#### Widget 08: Community Bookmarks ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/))

[![HTML Badge](https://img.shields.io/badge/HTML-602CA2)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-602CA2)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-602CA2)](https://github.com/aniqatc/playground)
[![Node Badge](https://img.shields.io/badge/Node-602CA2)](https://github.com/aniqatc/playground)
[![Express Badge](https://img.shields.io/badge/Express-602CA2)](https://github.com/aniqatc/playground)
[![MongoDB Badge](https://img.shields.io/badge/MongoDB-602CA2)](https://github.com/aniqatc/playground)
[![Cheerio Badge](https://img.shields.io/badge/Cheerio-602CA2)](https://github.com/aniqatc/playground)
[![Google Safe Browsing Badge](https://img.shields.io/badge/Google%20Safe%20Browsing-602CA2)](https://github.com/aniqatc/playground)
[![Natural Badge](https://img.shields.io/badge/Natural-602CA2)](https://github.com/aniqatc/playground)
[![Leo-Profanity Badge](https://img.shields.io/badge/Leo%20Profanity-602CA2)](https://github.com/aniqatc/playground)
[![Google Favicon Badge](https://img.shields.io/badge/MongoDB-602CA2)](https://github.com/aniqatc/playground)

**Relevant file(s)**: [/client/src/widgets/08/\*](../../client/src/widgets/08/), [/server/widgets/08/\*](../../server/widgets/08/)

A community-driven bookmark platform that processes submitted URLs to extract metadata, validate content safety, and generate topic tags. Features include community voting, automated metadata extraction, and content filtering to maintain a curated collection of high-quality web resources.

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-08_v1.png"></a>

## Tech

- JavaScript/HTML/SCSS: Core technologies for building and styling the widget
- Node.js & Express.js: Backend technologies for handling URL processing and data storage
- MongoDB: Database for storing bookmark data and user interactions (likes and dislikes)
- Cheerio: Web scraping library for metadata extraction
- Google Safe Browsing API: URL safety validation
- Natural: NLP library for topic extraction
- Leo-Profanity: Content filtering for inappropriate terms

## Storage

- MongoDB: Stores bookmark metadata, user votes, interaction data and individual user credentials
- Local Storage: Maintains individual user identification (that connects to an ID in the MongoDB databases)

## Features

- **URL Processing**:
  - Automated metadata extraction using Cheerio 
  - Topic generation from the webpage content using Natural (NLP library)
  - Safety validation using Google's Safe Browsing API
  - Content filtering using Leo-Profanity (specifically to block out inappropriate or hateful content)
- **Community Features**:
  - Like and dislike voting system (1 vote per user)
  - Vote tracking and limiting restrictions are applied to each user
  - Sorted by newest submissions
- **Content Display**:
  - Minimalistic and uniform card layout for each bookmark
  - Topic tags with extracted keywords from the metadata or generated using the NLP library to identify key phrases
  - Favicon integration through Google's Favicon API is used as a fallback in case a logo cannot be extracted successfully using Cheerio
  - Responsive design with support of container queries wherever necessary
- **Error Handling**: Clear error messaging provided to the user in the input element's placeholder

## Limitations

- Metadata extraction depends on the website's HTML structure and can sometimes be incomplete
- Topic generation may not be accurate as it depends on the website's title and description to find key words
- Limited to public websites that allow scraping and can return empty data for websites that block content extraction
- [No user authentication system](/docs/main/handlingUsers.md)

## Widget Architecture

### Frontend: [/client/src/widgets/08/\*](../../client/src/widgets/08/)

1. **Bookmark Display**: Shows processed bookmarks with metadata
2. **Voting Interface**: Handles user interactions and vote updates
3. **Submission**: URL input and processing

### Frontend Components

**Core Directory**:
- [`core/context.js`](../../client/src/widgets/08/core/context.js): Manages DOM elements and widget state
- [`core/data.js`](../../client/src/widgets/08/core/data.js): Handles API requests to the backend
- [`core/displayBookmark.js`](../../client/src/widgets/08/core/displayBookmark.js): Manages bookmark card rendering
- [`core/voteButtons.js`](../../client/src/widgets/08/core/voteButtons.js): Manages voting functionality
- [`core/addBookmark.js`](../../client/src/widgets/08/core/addBookmark.js): Processes new bookmark submissions
- [`core/loadBookmarks.js`](../../client/src/widgets/08/core/loadBookmarks.js): Loads all the bookmarks that have been saved previously

**Root Files**:
- [`content.js`](/client/src/widgets/08/content.js): Defines base HTML structure
- [`script.js`](/client/src/widgets/08/script.js): Entry point that initializes relevant components
- [`style.scss`](/client/src/widgets/08/style.scss): Widget-specific styling including dark mode, responsive layouts, animations and different states

### Backend: [/server/widgets/08/\*](../../server/widgets/08/)

1. **URL Processing**: Metadata extraction and safety validation
2. **Data Storage**: MongoDB integration for bookmarks and votes
3. **API Endpoints**: Express routes for bookmark operations
   - `/widget/bookmark/add` => processes URLs and creates bookmarks; has safety checks that returns errors in case of unsafe links, inappropriate content, incomplete metadata extraction and invalid URLs
   - `/widget/bookmark/all` => returns all bookmarks saved in the database; takes userId as additional query in case there is any vote count by the user to display (for e.g. active state on the like/dislike button that they clicked)
   - `/widget/bookmark/:vote` => handles a user's vote on a specific bookmark (bookmark ID is provided via a query string)
   - `/widget/bookmark/count` => provides the current count of a user's votes in order to enforce limits and certain styles in the frontend
4. **Error Handling**: Clear error messaging provided to the user in the input element's placeholder
   - "`Page contains inappropriate content`" is returned in `leo-profanity` detects any inappropriate content in the website's key metadata elements
   - "`Invalid URL`" is returned if a string is passed through without a TLD to identify it as a website
   - "`Bookmark already exists`" is returned to avoid creating duplicate bookmarks with the same URLs
   - "`URL contains inappropriate content`" is returned if the URL itself contains any inappropriate or explicit content
   - "`URL is flagged by Google's Safe Browsing API`" is returned if a URL is considered unsafe based on the criteria passed in the code (for e.g. `http://testsafebrowsing.appspot.com/s/malware.html` is flagged)

### Backend Components

- [`/server.js`](/server.js): Initializes the Express.js server, handles API routing

**Base Directory**:
- [`bookmarkModel.js`](../../server/widgets/08/bookmarkModel.js): MongoDB schema for bookmarks
- [`bookmarkRouter.js`](../../server/widgets/08/bookmarkRouter.js): Express routes for bookmark operations
- [`BookmarkData.js`](../../server/widgets/08/bookmarkData.js): Core class handling bookmark processing
  - `getBookmarks()` => handles retrieving bookmarks that were successfully saved to the database and packages it with the current like and dislike count, including the user's last vote
  - `processBookmark()` => processes the URL provided by the end-user; validates the URL, goes through filtering and safety checks and is then saved to the database
  - `extractMetadata()` => helper function to extract metadata from the URL using Cheerio
  - `extractTopics()` => helper function to extract topic tags from the webpage metadata using the Natural NLP library
  - `hasBadWords()` => helper function check the URL for any inappropriate content using Leo-Profanity library
  - `isNotSafe()` => helper function to check if the URL is flagged by Google's Safe Browsing API
  - `handleVote()` => handles a user's vote and saves it to the database to track overall like/dislike count
  - `getUserVoteCount()` => function that provides an individual user's last selected vote for a specific bookmark

## How to Use

1. **Submit a bookmark**:
   - Enter any public URL
   - System automatically processes and extracts relevant information
   - Content is checked for safety and appropriateness

2. **Interact with bookmarks**:
    - View extracted metadata and topics
    - Vote on bookmarks (like/dislike)
    - Click to visit bookmarked sites
   
3. **Discover content**:
    - Browse community-submitted bookmarks
    - View topic tags for quick content identification
