## Backend Server

**Relevant file**: `server.js`

The `server.js` file creates and handles a Node.js application using Express (specifically for routing HTTP requests) and Mongoose to deal with MongoDB database(s).

**Here are some key points**:

- `dotenv` package is used to load environmental variables from the hidden `.env` file which holds sensitive information like the database URI and password
- Mongoose is used to seamlessly connect to the relevant MongoDB database and upon successful connection, the database name is printed to the console
- The server is started using `app.listen` with the relevant port information and certain details are logged to the console (e.g. connection is sucessful and the environment mode based on the `NODE_ENV` variable which is set using npm scripts)

**Middleware configurations**

- `express.json()` is applied to all incoming requests - it parses JSON payloads
- `cors()` policy is configured based on the development environment - if I'm using the application locally, the CORS origin is set to the `FRONTEND_LOCAL` variable which is the localhost hosting my frontend application, whereas, if my application is in production, the CORS origin is set to the `FRONTEND_HOSTED` variable which represents my deployed frontend domain, allowing me to make requests from that domain:

```javascript
process.env.NODE_ENV === 'production'
	? app.use(cors({ origin: process.env.FRONTEND_HOSTED }))
	: app.use(cors({ origin: process.env.FRONTEND_LOCAL }));
```

As noted above, `NODE_ENV` is set based on the npm script that is executed.

- A **redirect middleware** is set up to send users to my `FRONTEND_HOSTED` domain if anyone tries to access the domain that is hosting the backend:

```javascript
app.use((req, res, next) => {
	if (req.hostname === 'data.playground.aniqa.dev') {
		return res.redirect(process.env.FRONTEND_HOSTED);
	}
	next();
});
```

Additionally, **router paths** are declared and for now, there is only the `like` and `user` router that is being handled:

```javascript
const userRouter = require('./server/main/routers/userRouter');
const likeRouter = require('./server/main/routers/likeRouter');
app.use('/users/', userRouter);
app.use('/likes/', likeRouter);
```

More details:

- <a href="/docs/main/handlingLikes.md">Handling Likes</a>
- <a href="/docs/main/handlingUsers.md">Handling User Data</a>
