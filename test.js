const parser = require("./index.js");
const assert = require("assert");

describe("Parser", function() {
  it("should parse simple config", function() {
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
  it("should parse array config", function() {
    var config = parser({
      "some[0]": "value",
      "some[1]": "123",
      "some[2]": "xyz",
      "some[3]": "..."
    });

    assert.ok(config);
    assert.ok(config.some);
    assert.ok(config.some.length);
    assert.equal(4, config.some.length);

    assert.equal("value", config.some[0]);
    assert.equal("123", config.some[1]);
    assert.equal("xyz", config.some[2]);
    assert.equal("...", config.some[3]);
  });
  it("should parse complex config", function() {
    var config = parser({
      "some.more": "Hello",
      "some.other[0].value": "value",
      "some.other[1].value": "123",
      "some.other[2].value": "xyz",
      "some.other[3].value": "..."
    });

    assert.ok(config);
    assert.ok(config.some.more);
    assert.ok(config.some.other);
    assert.ok(config.some.other.length);
    assert.equal(4, config.some.other.length);

    assert.equal("value", config.some.other[0].value);
    assert.equal("123", config.some.other[1].value);
    assert.equal("xyz", config.some.other[2].value);
    assert.equal("...", config.some.other[3].value);
  });
});
