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
