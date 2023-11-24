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
