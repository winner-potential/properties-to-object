# Parse Properties to Objects

Simple parser to handle property file based key names and parse them into objects.

```
npm install properties-to-object --save
```

``` javascript
const parser = require("properties-to-object");
var config = parser({
    "some.property": "value",
    "other": "123"
});
console.log(config.some.property);
```