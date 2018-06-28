const parser = require("./index.js");
const assert = require("assert");

describe("Basic Mocha String Test", function() {
  it("should return number of charachters in a string", function() {
    var config = parser({
      "some.property": "value",
      "other": "123"
    });

    assert.ok(config);
    assert.ok(config.some);
    assert.ok(config.some.property);
    assert.ok(config.other);
    assert.equal("123", config.other);
    assert.equal("value", config.some.property);
  });
});
