# Theme color switch
## [Demo](https://kulikovsasha.github.io/theme-color-switch/])
Dark (or any other color) mode javascript plugin. Save the mode in browser local storage after page reload.

## Installation

### 1. Include CSS
Include CSS file into your HTML head:
```
<link rel="stylesheet" href="path/to/theme-color-switch.css">
```
### 2. Include JS
Include JS file in the footer of your site (before the closing ```</body>``` tag).
```
<script src="path/to/theme-color-switch.min.js"></script>
```
### 3. Create HTML tag
Create any HTML tag with class theme-color-switch.
Example:
```
<div class="theme-color-switch">Click me</div>
```
Optionaly add data-text-on and data-text-off attributes to control the text of the switch using CSS pseudo classes.
Example:
```
<div class="theme-color-switch" data-text-on="OFF" data-text-off="ON"></div>
```

### 4. Initialize
Initialize on HTML tag you want to change on click.
In this example this is ```<div class="demo-wrapper">...</div>```
```
<script>new ThemeColorSwitch('.demo-wrapper');</script>
```

### 5. Use CSS
Using CSS and ```.alt-theme-color``` and ```.switch-on``` classes create any color mode
