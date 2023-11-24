# My Extension

この拡張機能は何かを行います。

## ファイル構成

- `manifest.json`: 拡張機能の設定を記述します。
- `background.js`: バックグラウンドで実行されるJavaScriptです。
- `popup.html`: ポップアップのHTMLです。
- `popup.js`: ポップアップのJavaScriptです。
- `options.html`: オプションページのHTMLです。
- `options.js`: オプションページのJavaScriptです。

## manifest.jsonについて

`manifest.json`は、拡張機能の設定を記述するファイルです。以下にその内容を示します。

```json
{
  "manifest_version": 2,

  "name": "My Extension",
  "description": "This extension does something",
  "version": "1.0",

  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "popup.html"
  },
  "options_page": "options.html",

  "background": {
    "scripts": ["background.js"],
    "persistent": false
  },

  "permissions": [
    "storage"
  ],

  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["popup.js"]
    }
  ]
}
```

## background.jsについて

`background.js`は、バックグラウンドで実行されるJavaScriptです。以下にその内容を示します。

```javascript
// This is a basic background script that doesn't do anything yet.

// Listen for a click on the browser action icon
chrome.browserAction.onClicked.addListener(function(tab) {
  // This will log a message when the browser action icon is clicked
  console.log('Browser action icon clicked!');
});

// Listen for changes in the storage
chrome.storage.onChanged.addListener(function(changes, namespace) {
  // This will log a message when something in the storage changes
  for (let key in changes) {
    let storageChange = changes[key];
    console.log('Storage key "%s" in namespace "%s" changed. ' +
                'Old value was "%s", new value is "%s".',
                key,
                namespace,
                storageChange.oldValue,
                storageChange.newValue);
  }
});
```

## popup.htmlとpopup.jsについて

`popup.html`と`popup.js`は、ポップアップのHTMLとJavaScriptです。以下にその内容を示します。

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Extension</title>
    <style>
      body {
        font-family: "Arial", sans-serif;
        padding: 15px;
        width: 300px;
      }
    </style>
  </head>
  <body>
    <h1>My Extension</h1>
    <p>This extension does something.</p>
    <button id="clickme">Click me!</button>

    <script src="popup.js"></script>
  </body>
</html>
```

```javascript
// Get the button by its id
let button = document.getElementById('clickme');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Log a message when the button is clicked
  console.log('Button clicked!');

  // Send a message to the background script
  chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});
```

## options.htmlとoptions.jsについて

`options.html`と`options.js`は、オプションページのHTMLとJavaScriptです。以下にその内容を示します。

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Extension Options</title>
    <style>
      body {
        font-family: "Arial", sans-serif;
        padding: 15px;
        width: 300px;
      }
    </style>
  </head>
  <body>
    <h1>My Extension Options</h1>
    <p>Here you can customize your extension settings.</p>

    <!-- Add your options controls here -->

    <script src="options.js"></script>
  </body>
</html>
```

```javascript
// This is a sample code for options.js. You can add your own logic here to handle the options of your extension.

document.addEventListener('DOMContentLoaded', function() {
  // Load any options already saved
  loadOptions();

  // Add event listener for when options are saved
  document.querySelector('button').addEventListener('click', saveOptions);
});

// Function to load options
function loadOptions() {
  // Use the Chrome storage API to load any options
  chrome.storage.sync.get({
    // Add your option keys here
  }, function(items) {
    // Use the items object to set the values of your options in the UI
  });
}

// Function to save options
function saveOptions() {
  // Use the Chrome storage API to save the options
  chrome.storage.sync.set({
    // Add your option keys and their values here
  }, function() {
    // You can add a callback here to handle any actions after the options are saved
  });
}
```
