## Handling User Data

**Relevant file**:

- [/server/main/models/userModel.js](../../server/main/models/userModel.js)
- [/server/main/routers/userRouter.js](../../server/main/routers/userRouter.js)
- [/server/main/helpers/userHelpers.js](../../server/main/helpers/userHelpers.js)
- [/client/main/scripts/user/userHandler.js](../../client/main/scripts/user/userHandler.js)

On the client-side of this application, the `userHandler.js` file deals with creating a unique ID using the `uuid` package for each user that visits. This is done by checking their `localStorage` for the ID and if there isn't any, they are assigned a new one and it is sent to the corresponding MongoDB database using the Fetch API.

This unique ID will be used to track certain data without cluttering a user's browser storage. Only certain things will be saved in the user's browser storage. For example, I don't want to save anyone's IP address and other adjacent data so I save it in the user's browser where they have full control of it. Other miniscule data, like adding a task to a to-do list will be sent to a MongoDB database to avoid cluttering a user's `localStorage` or `sessionStorage`.

Additionally, there is a helper function on the server-side called `addWidgetDataToUser`. This function is responsible for connecting the individual widget's data to a specific user. It creates a new document based on the specified widget model and saves it. Then, it finds the `userId` that is passed and sends the data that was just created to the corresponding `User` document so that the individual user's data specific to that widget can be accessed.

```javascript
// /server/main/helpers/userHelpers.js
async function addWidgetDataToUser(userId, widgetId, widgetType, widgetData) {
	const WidgetModel = mongoose.model(widgetType);
	const widget = new WidgetModel(widgetData);
	await widget.save();

	const user = await User.findById(userId);
	user.widgets.push({ widgetId: widgetId, widgetType: widgetType, widgetRef: widget._id });
	await user.save();
}
```

**Connecting a widget (example)**

In order to connect widget data to a user - the widget needs its own model based on its own Mongoose schema. This is then referenced in `mongoose.model` above which creates a new document with the `widgetData` and is saved. Then, the corresponding user is found and the refrenced to the newly created document is made.

Example:

```javascript
// /server/main/models/toDoModel.js
const mongoose = require('mongoose');
const ToDoListSchema = new mongoose.Schema({
	items: [{ content: String, completed: Boolean }],
});

module.exports = mongoose.model('ToDoList', ToDoListSchema);
```

Then, the above `addWidgetDataToUser()` function is called when handling a route using Express:

```javascript
app.post('/widget/:widgetId/:userId', async (req, res) => {
	const userId = req.params.userId;
	const widgetId = req.params.widgetId;
        const toDoData = { items: [] };
        await addWidgetDataToUser(userId, widgetId, 'ToDoList', toDoData;

        res.status(200).send('To-Do widget added successfully');
});
```
