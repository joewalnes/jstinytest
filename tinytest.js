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
 *
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
 * That's it. Stop using over complicated frameworks that get in your way.
 *
 * -Joe Walnes
 * MIT License. See https://github.com/joewalnes/jstinytest/
 */
const TinyTest = {


    run: function(tests) {
      //add html to test file
        TinyTest.createHTML();
        setTimeout(function() {
          // Give document a chance to complete
          if (window.document && document.body) {
            // define variables
            let failingTestsDiv = document.getElementById('failingTestsDiv');
            let passingTestsDiv = document.getElementById('passingTestsDiv');
            let failures = 0;
            let passing = 0;
            //run tests and print results
            for (let testName in tests) {
                //testAction calls individual tests in html file provided by user
                let testAction = tests[testName];
                try {
                    testAction();
                    console.log('Test:', testName, 'OK');
                    //prints passing test to DOM
                    passingTestsDiv.innerHTML+='<ul>'+'Test passed: '+
                      testName+'</ul>';
                      passing++;
                  //if testAction throws an error (test fails)
                } catch (e) {
                    failures++;
                    console.error('Test:', testName, 'FAILED', e);
                    console.error(e.stack);
                    /*formats Test and Error onto their own lines
                     *and prints it in the DOM
                     */
                    failingTestsDiv.innerHTML+=
                      '<ul style="list-style: none;"> Test failed: '+testName+
                      '<li>'+e.stack+'</li>'+
                      '</ul>';
              }
          }
                //print total passing and total failues to top of screen (h3 element)
                document.getElementById('results').innerHTML='Passing Tests: '+
                passing+'&nbsp&nbsp&nbsp&nbsp&nbsp||&nbsp&nbsp&nbsp&nbsp&nbsp Failing Tests: '+
                failures;
                //change background color as needed
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
    createHTML: function(){
      /*HTML template for whatever html file the end user supplies
      *this is useful so the end user just needs to add their Tests
      *and not worry about HTML
      */
      var testFileHTML = `
      <style>
    #container{
      width: 100%;
      margin: 0;
      padding: 0;
      display:flex;
    }
    button, h3{
      display:inline-block;
    }
    button{
      margin-left:2em;
    }
      #passingTestsDiv {
          border: 2px solid green;
          position: relative;
          word-wrap:break-word;
          display: flex;
          flex-direction: column;
      }

      #failingTestsDiv {
          border: 2px solid red;
          position: relative;
          word-wrap:break-word;
          display: flex;
          flex-direction: column;
      }

      </style>
      <body>
        <h3 id="results">No tests run.  Please add some tests.</h3>
        <button type="button" onclick="TinyTest.reverseDisplayOrder()">Reverse Display Order</button>
        <div id="container" style="
        flex-direction:column;">
          <div id="passingTestsDiv"></div>
          <div id="failingTestsDiv"></div>
        </div>
      </body>
    </html>`
    var htmlElement = document.getElementsByTagName('HTML')[0];
    htmlElement.innerHTML+=testFileHTML;
  },
  reverseDisplayOrder:function(){
    //reverses the display order of passing and failing tests (which one is on top)
    if(document.getElementById('container').style.flexDirection==="column"){
      document.getElementById('container').style.flexDirection="column-reverse";
    }else{
      document.getElementById('container').style.flexDirection="column";
    }

  }

};

const fail                = TinyTest.fail,
      assert              = TinyTest.assert,
      assertEquals        = TinyTest.assertEquals,
      eq                  = TinyTest.assertEquals, // alias for assertEquals
      assertStrictEquals  = TinyTest.assertStrictEquals,
      tests               = TinyTest.run;
