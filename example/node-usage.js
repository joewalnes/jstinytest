// Usage example for writing tinyjs unit tests in node modules
"use strict";

var {
    fail, assert, assertEquals, assertStrictEquals, tests 
    } = require("../tinytest.js");

var expected = 42;
var actual = 40;

tests({
    "foobar" : function foo() {
        assertEquals(expected, actual);
    }
});
