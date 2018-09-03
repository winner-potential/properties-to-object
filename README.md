# Parse Properties to Objects

[![Build Status](https://travis-ci.com/winner-potential/properties-to-object.svg?branch=master)](https://travis-ci.com/winner-potential/properties-to-object)

Simple parser to handle property file based key names and parse them into objects. The key name separations with points is transferred into an object structure.

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

## Use with Spring Cloud Config

This node module is intended to be used in combination with results from spring cloud configuration servers as provided by using the module [cloud-config-client](https://github.com/victorherraiz/cloud-config-client).

```
npm install cloud-config-client properties-to-object --save
```

``` javascript
const client = require("cloud-config-client")
const parser = require("properties-to-object")

client.load({
    application: "invoices"
}).then((config) => {
    // Rebuild config from server into map with key value pairs
    var result = {}
    config.forEach((k,v) => {
        result[k] = v
    });
    // Use parser to create configuration object
    var configuration = parser(result)
});
```
