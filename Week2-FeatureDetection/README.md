# Feature Detection with fallbacks

## HTML

### index1.html - Inputs
All unsupported input types will revert to a standard```<input type="text">```.

### index2.html - Media Capture
If the attribute```capture="camera"```is not supported, a standard```<input type="file">```will be used.

## CSS

### index3.html - Flexbox
If the browser supports flexbox, set the body tag to display as a flexible box. Checked with```@supports (display:flex)```.

### index4.html - Opacity
A fallback for IE6+ where opacity is not supported is used:```filter: alpha(opacity=55);```

## JS 

### index5.html - querySelector & querySelectorAll
Used a conditional to check if the```querySelector```is present in the document object. 
If not, use the standard```document.getElementById```method. Same for```querySelectorAll```, which will revert to getElementsByClassName in this case (getElementsByTagName is also possible).

EDIT: Console.log is not supported in IE8, that's why it broke. Changed to alert instead and now works.

```javascript
var block;
    var items;
    var message = "I am a list item!";

    if (!document.querySelector || !document.querySelectorAll) {
        alert("You're using Internet Explorer 7 or lower.. BOOO!");
        block = document.getElementById('block');
        items  = document.getElementsByClassName('list-item');
    } else {
        alert("You're not using Internet Explorer 7.. YAAY!");
        block = document.querySelector('#block');
        items = document.querySelectorAll('.list-item');
    }

    function showItems(arr) {
      for (var i = 0; i < arr.length; i++) {
        arr[i].innerHTML = message;
      }
    }

    showItems(items);
```

### index6.html - preventDefault
Some versions of IE do not support the```event.preventDefault()``` and the ```addEventListener``` methods. Check if it is present in the document object. If not, fallback to IE supported standards:
```javascript
// Check if addEventListener is supported, if not then use Microsoft's proprietary version attachEvent
    if (!document.addEventListener) {

      form.attachEvent('onsubmit', function (e) {
        alert('no eventlistener');
        preventFormSubmit(e);
      })
    } else {
      form.addEventListener('submit', function (e) {
        alert('eventlistener present!');
          preventFormSubmit(e);
      })
    }

  function preventFormSubmit(e) {
    // Check if preventDetault is supported.
    if (!event.preventDefault) {
        // No support, use IE version of preventDefault
        e.returnValue = false;
        alert('Form submitted (IE version)')
    } else {
        e.preventDefault();
        alert('Form submitted (Chrome/FF/Safari version)');
    }
  }
  ```
