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

## Browser Testing
To check if the app is properly enhanced in a progressive manner, I tested it in different browsers. I used very old versions of popular browsers via Browserstack.com. Unfortunately I was not able to test in all the available browsers because of my limited account. I did, however, test on various mobile devices: Android Chrome & Android Browser, Apple Safari iOS (iPhone 6S & iPad Air)

### Recent Browsers

#### Chrome
The normal version of the app with all features and styling enabled running in Chrome 56 (most recent).
![Chrome](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/chrome_recent.png?raw=true)
![Chrome Detail Page](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/chrome_recent_detail.png?raw=true)

#### Firefox
The normal version of the app with all features and styling enabled running in Firefox 52 (most recent).
![Firefox](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/firefox_recent.png?raw=true)
![Firefox Detail Page](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/firefox_detail.png?raw=true)

#### Safari
The normal version of the app with all features and styling enabled running in Safari 10 (most recent).
![Safari](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/safari_recent.png?raw=true)
![Safari Detail Page](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/safari_recent_detail.png?raw=true)

#### Opera
The normal version of the app with all features and styling enabled running in Opera 44 (most recent).
![Opera](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/opera.png?raw=true)
![Opera Detail Page](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/opera_detail.png?raw=true)

#### Neon (experimental)
The normal version of the app with all features and styling enabled running in Neon 1.0 (most recent).
![Neon](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/neon.png?raw=true)
![Neon Detail Page](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/neon_detail.png?raw=true)

#### Internet Explorer
The normal version of the app with all features and styling enabled running in IE11 (most recent).
![IE11](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/IE11.png?raw=true)
![IE11 Detail Page](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/ie11_detail.png?raw=true)

#### Internet Explorer 5 (IE11 compatibility mode)
The normal version of the app with all features and styling enabled running in IE5 Compatibility Mode, a feature in IE11.
![IE5](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/ie5.png?raw=true)
![IE5 Detail Page](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/ie5_detail.png?raw=true)

## Progressive Enhancement
### No JavaScript
With JS disabled, the app functions properly due to the server-side rendering.
![No JS!](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/nojs.png?raw=true)
![No JS!](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/nojs_detail.png?raw=true)

### No CSS
With CSS disabled, no styles will be loaded and a basic markup version of the app is presented.
![No CSS!](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/nocss.png?raw=true)
![No CSS!](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/nocss_detail.png?raw=true)

## Experimental feature 1: Details Tag 
<details><summary>I am a details tag. Click me!</summary> Yay! I am a details paragraph!</details>

The details tag is an experimental feature that creates a simple JS-less widget to toggle the visibility of a piece of content. It is supported on most recent browsers, except Microsoft Edge.

![CanIUse?](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/caniuse_details.png?raw=true)

### When Supported
Ofcourse, Chrome supports it. Being the awesome browser it is it displays the tag and it's content perfectly.

![Chrome is awesome?](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/details-tag_chrome.png?raw=true)
![Chrome is awesome?](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/details-tag_chrome2.png?raw=true)

### When NOT Supported
When this feature is not supported, the content of the details tag is rendered immediately.

![Edge is not awesome?](https://raw.github.com/SadisticSun/Browser-Technologies/master/Week3-PE-BrowserTech/readme-img/details-tag_edge.png?raw=true)

## Javascript Enhancement: Layout Toggler
When Javascript is enabled, the user can toggle different views of the contact cards to either a grid view or a row view.

### No JS?
When Javascript is not enabled/supported, the feature will not display and the app is usable in the original way, i.e. a standard row layout is used and all other features are available.

## Link to live
Not yet :(

## Dependencies
* Body Parser
* EJS
* Express
* Request

## Dev Dependencies
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
http://localhost:8080
```
