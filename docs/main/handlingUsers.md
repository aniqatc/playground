## Handling User Data

**Relevant file**:

- [/server/main/models/userModel.js](../../server/main/models/userModel.js)
- [/server/main/routers/userRouter.js](../../server/main/routers/userRouter.js)
- [/server/main/helpers/handleWidgetData.js](../../server/main/helpers/handleWidgetData.js)
- [/client/main/scripts/user/userHandler.js](../../client/main/scripts/user/userHandler.js)

On the client-side of this application, the `userHandler.js` file deals with creating a unique ID using the `uuid` package for each user that visits. This is done by checking their `localStorage` for the ID and if there isn't any, they are assigned a new one and it is sent to the corresponding MongoDB database using the Fetch API.

This unique ID will be used to track certain data without cluttering a user's browser storage. Only certain things will be saved in the user's browser storage. For example, I don't want to save anyone's IP address and other adjacent data so I save it in the user's browser where they have full control of it. Other miniscule data, like adding a task to a to-do list will be sent to a MongoDB database to avoid cluttering a user's `localStorage` or `sessionStorage`.
