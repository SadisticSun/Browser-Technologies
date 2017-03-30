# Browser Technologies - Progressive Enhanced Web App

## About this repo
This repo contains a progressively enhanced web app for the Browser Technologies course. The assignment was to create a simple demo application to practice and show how progressive enhancement for the web works.

## Core functionality
The main functionality of this app is to search contacts in a database and display it in the client.

## How it's done
The app is created in 3 stages:

1. Core functionality with only HTML
This ensures that when a user's browser is not able to load CSS and JavaScript the app still functions.
To do this, the entire basic markup and functionality is rendered server-side. This way the server carries the 'heavy' lifting of the search functionality, database requests and dynamic rendering of page content.

2. Enhanced visuals for better readability
When CSS is able to load, the app will be styled and given a better UX.

3. Enhanced functionality with JavaScript
When the client is fully capable, provide the best features and UX the app has.


## Link to live
Not yet :(

## Dependency List
* Body Parser
* EJS
* Express
* Request
* Watchify

## Usage

In terminal:

1.  Navigate to directory
2.  Install depencencies with

```
npm install
```
3. Run app with
```
node server.js
```
or, if you use Nodemon:
```
nodemon server.js
```

4. Test app at:
```
http://localhost:3000
```
