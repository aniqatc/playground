## Handling User Data

**Relevant files**:

- [/server/main/models/userModel.js](../../server/main/models/userModel.js)
- [/server/main/routers/userRouter.js](../../server/main/routers/userRouter.js)
- [/client/src/main/scripts/user/userHandler.js](../../client/src/main/scripts/user/userHandler.js)

On the client-side of this application, the `userHandler.js` file deals with creating a unique ID using the `uuid` package for each user that visits. This is done by checking their `localStorage` for the ID and if there isn't any, they are assigned a new one and it is sent to the corresponding MongoDB database using the Fetch API.

This unique ID will be used to track certain data without cluttering a user's browser storage. Only small preferences, like the theme and which widgets a visitor has liked, are kept in browser storage. Data that belongs to a widget, like tasks in the task manager, is saved to MongoDB under the visitor's ID. Location and browser details from the digital footprint widget are looked up on each visit and never saved.
