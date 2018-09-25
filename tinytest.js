/**
 * Very simple in-browser unit-test library, with zero deps.
 *
 * Background turns green if all tests pass, otherwise red.
 * View the JavaScript console to see failure reasons.
 *
 * Example:
 *
 *   adder.js (code under test)
 *
 *     function add(a, b) {
 *       return a + b;
 *     }
 *
 *   adder-test.html (tests - just open a browser to see results)
 *
 *     <script src="tinytest.js"></script>
 *     <script src="adder.js"></script>
 *     <script>
 *    /*tests calls TinyTest.run
 *     *@params takes an object of tests
 *     *individual tests then call eq which tests against strict assertEquals
 *    /*
 *     tests({
 *
 *       'adds numbers': function() {
 *         eq(6, add(2, 4));
 *         eq(6.6, add(2.6, 4));
 *       },
 *
 *       'subtracts numbers': function() {
 *         eq(-2, add(2, -4));
 *       },
 *
 *     });
 *     </script>
 *
 *      //prints passings and failings tests to the screen
 *     <div id="passingTestsDiv"</div>
 *     <div id="failingTestsDiv"</div>
 *
 * That's it. Stop using over complicated frameworks that get in your way.
 *
 * -Joe Walnes
 * MIT License. See https://github.com/joewalnes/jstinytest/
 */
var TinyTest = {


    run: function(tests) {
        
        setTimeout(function() { // Give document a chance to complete
          if (window.document && document.body) {
            failingTestsDiv = document.getElementById('failingTestsDiv');
            passingTestsDiv = document.getElementById('passingTestsDiv');
          var failures = 0;
          for (var testName in tests) {
              var testAction = tests[testName];
              try {
                  testAction.apply(this);
                  console.log('Test:', testName, 'OK');
                  //prints passing test to DOM
                  passingTestsDiv.innerHTML+='<ul>'+'Test: '+
                    testName+' OK'+'</ul>';
              } catch (e) {
                  failures++;
                  console.error(
                    `Test failed: ${testName}`+'\n'+`${e.stack}`);
                  //console.error('Test:', testName, 'FAILED', e.stack);
                  //console.error(e.stack);
                  /*formats Test and Error onto their own lines
                   *and prints it in the DOM (sorry it's so clunky)
                   */
                  failingTestsDiv.innerHTML+=
                    '<ul style="list-style: none;"> Test failed: '+testName+
                    '<li>'+e.stack+'</li>'+
                    '</ul>';
              }
          }

                //document.body.style.backgroundColor = (failures == 0 ? '#99ff99' : '#ff9999');
                if (failures === 0){
                  passingTestsDiv.style.backgroundColor = '#99ff99';
                }else{
                  failingTestsDiv.style.backgroundColor = '#ff9999';
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
            throw new Error('assertEquals() "' + expected + '" != "' + actual + '"');
        }
    },

    assertStrictEquals: function(expected, actual) {
        if (expected !== actual) {
            throw new Error('assertStrictEquals() "' + expected + '" !== "' + actual + '"');
        }
    },

};

var fail               = TinyTest.fail.bind(TinyTest),
    assert             = TinyTest.assert.bind(TinyTest),
    assertEquals       = TinyTest.assertEquals.bind(TinyTest),
    eq                 = TinyTest.assertStrictEquals.bind(TinyTest),
    tests              = TinyTest.run.bind(TinyTest);
var failingTestsDiv;
var passingTestsDiv;
