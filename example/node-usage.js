// Usage example for writing tinyjs unit tests in node modules
"use strict";

var {
    fail, assert, assertEquals, assertStrictEquals, tests 
} = require("../tinytest.js");

tests({
    "foobar" : function foo() {
        var expected = 42;
        var actual = 21 * 2;
        assertEquals(expected, actual);
    }
});
