/**
 * Very simple in-browser unit-test library, with zero deps.
 *
 * Background turns green if all tests pass, otherwise red.
 * View the JavaScript console to see failure reasons.
 *
 * That's it. Stop using over complicated frameworks that get in your way.
 *
 * -Joe Walnes
 * MIT License. See https://github.com/joewalnes/jstinytest/
 */
"use strict";
const TinyTest = {

    run: function(tests) {
        let failures = 0;
        var passed = 0;
        for (let testName in tests) {
            let testAction = tests[testName];
            try {
                testAction();
                console.log('Test:', testName, 'OK');
                passed++; 
            } catch (e) {
                failures++;
                console.error('Test:', testName, 'FAILED', e);
                console.error(e.stack);
            }
        }
        var total = failures + passed;
        if (failures) {
            console.error(
                `Tests: ${failures} failed, ${passed} passed, ${total} total`
            );
        }
        else {
            console.log(
                `Tests: ${passed} passed, ${total} total`
            );
        }
        setTimeout(function() { // Give document a chance to complete
        if (isBrowser() ) {
            if (typeof window.document && document.body) {
                document.body.style.backgroundColor = (failures == 0 ? '#99ff99' : '#ff9999');
            }
        }
        }, 0);
    },

    fail: function(msg) {
        throw new Error('fail(): ' + msg);
    },

    assert: function(value, msg) {
        if (!value) {
            throw new Error('assert(): ' + msg);
        }
    },

    assertEquals: function(expected, actual) {
        if (expected != actual) {
            throw new Error(`assertEquals() "${expected}" != "${actual}"`);
        }
    },

    assertStrictEquals: function(expected, actual) {
        if (expected !== actual) {
            throw new Error(`assertStrictEquals() "${expected}" !== "${actual}"`);
        }
    },

};

function isNode() {
    return typeof window === "undefined";
}

function isBrowser() {
    return !isNode();
}

const fail                = TinyTest.fail,
      assert              = TinyTest.assert,
      assertEquals        = TinyTest.assertEquals,
      eq                  = TinyTest.assertEquals, // alias for assertEquals
      assertStrictEquals  = TinyTest.assertStrictEquals,
      tests               = TinyTest.run;

if (isNode() ) {
    module.exports = { 
        fail, assert, assertEquals, eq, assertStrictEquals, tests
    };
}
