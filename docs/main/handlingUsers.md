## Handling User Data

**Relevant file**:

- [/server/main/models/userModel.js](../../server/main/models/userModel.js)
- [/server/main/routers/userRouter.js](../../server/main/routers/userRouter.js)
- [/server/main/helpers/handleWidgetData.js](../../server/main/helpers/handleWidgetData.js)
- [/client/main/scripts/user/userHandler.js](../../client/main/scripts/user/userHandler.js)

On the client-side of this application, the `userHandler.js` file deals with creating a unique ID using the `uuid` package for each user that visits. This is done by checking their `localStorage` for the ID and if there isn't any, they are assigned a new one and it is sent to the corresponding MongoDB database using the Fetch API.

This unique ID will be used to track certain data without cluttering a user's browser storage. Only certain things will be saved in the user's browser storage. For example, I don't want to save anyone's IP address and other adjacent data so I save it in the user's browser where they have full control of it. Other miniscule data, like adding a task to a to-do list will be sent to a MongoDB database to avoid cluttering a user's `localStorage` or `sessionStorage`.

Additionally, there is a helper function on the server-side called `addWidgetDataToUser`. This function is responsible for connecting the individual widget's data to a specific user by adding a reference to a user's `ObjectId` which is generated by MongoDB.

First, the user is found by searching for their unique ID that I generated with `uuid` on the frontend. If that `userId` isn't found, then a new one is created. Then, the widget model is created (based on the `widgetType` passed in the function). The `widgetData` object is given an additional field, `userRef`, which expects a reference to an `ObjectId` value - this allows me to connect this `widgetData` to the user it corresponds with. Finally, the new document is created and saved.

```javascript
// /server/main/helpers/handleWidgetData.js
async function addWidgetData(userId, widgetType, widgetData) {
	let user = await User.findOne({ userId: userId });

	if (!user) {
		user = await createNewUser(userId);
	}

	const WidgetModel = mongoose.model(widgetType);
	widgetData.userRef = user._id;
	const widget = new WidgetModel(widgetData);
	await widget.save();
}
```

**Connecting a widget (example)**

In order to connect the widget data to a user - the widget needs its own model based on its own Mongoose schema. Within the schema, I make sure to add a field that acts a reference (`userRef`) which will connect the widget data to a specific user. Then, this model is referenced in `mongoose.model` in the above code snippet which creates a new document with the `widgetData` and is saved.

Example:

```javascript
// /server/main/models/toDoModel.js
const mongoose = require('mongoose');
const ToDoListSchema = new mongoose.Schema({
	items: [{ content: String, completed: Boolean }],
	userRef: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Users',
		required: true,
	},
});
module.exports = mongoose.model('ToDoList', ToDoListSchema);
```

Then, the above `addWidgetData()` function is called when handling a route using Express:

```javascript
app.post('/widget/todo/:userId', async (req, res) => {
	const userId = req.params.userId;
    const toDoData = { items: [] };
    await addWidgetData(userId, 'ToDoList', toDoData;
    res.status(200).send('To-Do widget data added successfully');
});
```