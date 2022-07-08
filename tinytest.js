/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2008-2014 Joe Walnes
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
            if (window.document && document.body) {
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
