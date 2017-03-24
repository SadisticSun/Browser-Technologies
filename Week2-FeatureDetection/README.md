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

### index6.html - preventDefault
Some versions of IE do not support the```event.preventDefault()` method. Check if it is present in the document object. If not, use```event.returnValue = false;```.
