## Description

Provides button group functionality

## Support
Supports AMD eco system. If there is no loader, ButtonGroup is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var obj = new ButtonGroup();


```
- Use it with require.js
```js
require(["path/to/ButtonGroup"], function(ButtonGroup){
    // Work with ButtonGroup
});
```

## Style
- The control comes with build-in styles, which will programmatically be injected into the page head as style tag. 
- For custom styling add own styles to the end of the body.

## Installation

`npm install jean-button-group --save --legacy-bundling`

## API Reference

### ButtonGroup Constructor

**Options**
- **placeholder**: `String` - `mandatory` - description


## Tests

- Open spec/spec-runner.html in browser to see the test cases.
- Open example/index.html in your web browser for an example implementation.

## License

MIT