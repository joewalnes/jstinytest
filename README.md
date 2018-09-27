tinytest_dom_edition JavaScript unit testing library
=======================================

This is an in-browser JavaScript library I've been using for years. It's so small and simple that it never occurred to me to open source it until I saw all the overly complicated alternatives that are out there.

If you're looking for a JavaScript library full of features or install guides that say things like `grunt`, `npm` or `bower`, you've come to the wrong place. Sorry, this probably isn't for you. Move along now.

If you're looking for a quick way to unit-test a JavaScript function/object in a web-page and don't want to get bogged down in frameworks, you've come to the right place. Take a seat... no scratch that, you'll have everything you need in a few seconds so you may as well remain standing.

*   [Download tinytest_dom_edition.js](https://github.com/justinbourb/jstinytest_dom_edition/blob/master/tinytest_dom_edition.js)
*   [Example](https://github.com/justinbourb/jstinytest_dom_edition/tree/master/example)

10 second tutorial
------------------

Download [tinytest_dom_edition.js](https://github.com/justinbourb/jstinytest_dom_edition/blob/master/tinytest_dom_edition.js) and put it somewhere in your web directory.

Let's say you have a function in `adder.js`:

```javascript
function add(a, b) {
  return a + b;
}
```

Create a test page called `adder-test.html` (you can name it anything). This includes your code under test, tinytest_dom_edition.js and defines your tests:

```html
<script src="tinytest_dom_edition.js"></script>
<script src="adder.js"></script>
<script>
 tests({

   'adds numbers': function() {
     eq(6, add(2, 4));
     eq(6.4, add(2.4, 4));
   },

   'subtracts numbers': function() {
     eq(-2, add(2, -4));
   },

 });
</script>
```

Open the page in your browser. Green is good. Red is bad. With jstinytest_dom_edition there's no need to look in the JavaScript console for messages, because pressing ctrl+shift+j is just too much work.

![](https://github.com/justinbourb/jstinytest_dom_edition/blob/master/screenshots/results-green.png)

**That's it!**

Don't believe me? Here's the [source](https://github.com/justinbourb/jstinytest_dom_edition/tree/master/example) and [result](https://raw.githubusercontent.com/justinbourb/jstinytest_dom_edition/master/example/adder-test.html).

What else?
==========

If your tests fail, you'll get stack traces:

![](https://github.com/justinbourb/jstinytest_dom_edition/blob/master/screenshots/results-red.png)

Function reference
------------------

```javascript
// Force a failure
fail(reason);

// Assert expression is truthy (fail with reason)
assert(expression, reason);

// Assert expected == actual
assertEquals(expected, actual)

// Assert expected === actual
assertStrictEquals(expected, actual)
eq(expected, actual) // Alias for assertStrictEquals
```

Errm that's it. Now stop wasting time - go test that function.

But, but, but. What about feature X?
------------------------------------

It probably doesn't have it. If you need that, you'll probably find it in one of the many more sophisticated frameworks out there.

Projects using TinyTest
-----------------------

*   [Filtrex](https://github.com/joewalnes/filtrex) - A simple, safe, JavaScript Filter Expression compiler ([Tests](https://github.com/joewalnes/filtrex/blob/master/test/filtrex-test.html)) ([Results](https://rawgit.com/joewalnes/filtrex/master/test/filtrex-test.html))

Other stuff
-----------
Justin Bourbonniere (jstinytest_dom_edition)
Check out Justin's other [GitHub projects](https://github.com/justinbourb).

Joe Walnes (jstinytest)
Joe also has [TinyTest for C](https://github.com/joewalnes/tinytest) that follows similar principles of simplicity.

Check out Joe's other [GitHub projects](https://github.com/joewalnes) and follow [@joewalnes](https://twitter.com/joewalnes) on that Twitter thing.
