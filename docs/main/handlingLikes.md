## Handling Widget Likes

**Relevant file**:

- [/server/main/models/likeModel.js](../../server/main/models/likeModel.js)
- [/server/main/routers/likeRouter.js](../../server/main/routers/likeRouter.js)
- [/client/src/main/scripts/likes/\*](../../client/src/main/scripts/likes/)

For this website, I wanted there to be a way for visitors to show their appreciation for widgets that they enjoy the most. It also serves an indication to me as the creator to see which widgets might benefit from having its own dedicated website with more features.

In order to track the likes, I'm using a MongoDB database that is handled in my Node.js application using Mongoose. In order to access the data from the frontend, I use the routes set up to handle the requests with Express. In the frontend, I handle caching the likes with `sessionStorage`, fetching and updating the data with the Fetch API, updating the like button styling depending on its state, limiting likes to 5 per user which is tracked via `localStorage` and additional tidbits.

#### Key points relating to the backend:

**`likeModel.js`**

Using Mongoose, I created a schema that defines how the documents will be structured in the `Likes` collection in my MongoDB database. Keeping it very simple, I only required two fields to track:

- `widgetID` which is a `String` and represents the widget the likes will belong to
- `likeCount` which is a `Number` and represents the number of likes the widget has

**likeRouter.js**

First, I ensure that I create a new router object with Express which allows me to handle specific URL paths and HTTP methods. In this case, I only need to focus on `GET` so that my frontend get the current number of likes to display and `POST` so that my frontend can update the number of likes whenever a visitor "likes" the widget.

```javascript
// server.js includes middleware that handles likeRouter at this path
app.use('/likes/', likeRouter);

// likeRouter.js
const router = express.Router();
router.route('/:widgetId/').get(getCurrentLikes).post(updateLikes);
```

An example of what the request URL would look like to retrieve or update the database:

```txt
https://data.playground.aniqa.dev/likes/02
```

Now, there are two functions that handle the requests:

- `getCurrentLikes()` for `GET` requests
  - Extracts the `widgetId` from the request URL and looks for the corresponding document in the database
  - Returns the `widgetId` and current `likeCount` in the response to the frontend
- `updateLikes()` for `POST` requests
  - Extracts the `widgetId` from the request URL and looks for the corresponding document in the database: if it doesn't exist, a new document will be created for it based on the model specified in `likeModel.js`; if it exists, the exist document's `likeCount` field will be incremented by 1
  - The document is then saved to the database
  - Returns the updated `likeCount` in the response to the frontend

#### Key points relating to the frontend:

The two main functions that handle the 'likes' on the frontend are the `initializeLikeHandler()` and `handleLikes()` in the `likeHandler.js` file. Both of these also utilize additional helper functions that are found in the `likeHelpers.js` file.

**`initializeLikeHandler()`** in `likeHandler.js`

This function sets up event listeners and initial states for the like buttons and the like count.

For each like button:

- the `click` event listener is added
- the callback for the event listener:
  - checks if the user can like the widget based on the limit (of 5)
  - updates the likes in the database by sending a `POST` request
  - updates the button styling
  - updates the user's current like amount in `localStorage` (to keep track so that it doesn't exceed the limit)

For each like count value:

- the like counts are retrieved (on page load) based on its associated widget ID (either from the server or the cache in `sessionStorage`) and updates the count for the user

**`handleLikes()`** in `likeHandler.js`

This function manages the fetching and updating of like counts from the server - it's an asynchronous function that uses the Fetch API to do so.

This function takes three parameters: `el`, `id`, `type`

- `el` => represents the like count to update
- `id` => represents the widget ID
- `type` => represents the HTTP request type, either `GET` or `POST`

The function uses `sessionStorage` to cache the like count for each widget, which reduces the need for unnecessary network requests during a single session. If the like counts are available in `sessionStorage`, those values will be used to show to the user. However, if it isn't available, then either a `POST` or `GET` request is made.

**Helpers** in `likeHelpers.js`

- `getUserLikes` => retrieves user's likes from `localStorage`
- `canUserLike` => returns a boolean based on whether or not a user has exceeded the like limit of 5 for that specific widget
- `updateUserLikes` => updates the count of how many times the user has liked a specific widget in `localStorage`
- `updateLikeButtonState` => updates the styling of the like button based on how many times the user has liked the widget
