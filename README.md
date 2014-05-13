Tiniest simplest JavaScript unit testing library
================================================

This is an in-browser JavaScript library I've been using for years. It's so small and simple that it never occured to me to open source it until I saw all the overly complicated alternatives that are out there.

If you're looking for a JavaScript library full of features or install guides that say things like `grunt`, `npm` or `bower`, you've come to the wrong place. Sorry, this probably isn't for you. Move along now.

If you're looking for a quick way to unit-test a JavaScript function/object in a web-page and don't want to get bogged down in frameworks, you've come to the right place. Take a seat... no scratch that, you'll have everything you need in a few seconds so you may as well remain standing.

10 second tutorial
------------------

Download `tinytest.js` and put it somewhere in your web directory.

Let's say you have a function in `adder.js`:

```javascript
function add(a, b) {
  return a + b;
}
```

Create a test page called `adder-test.html` (you can name it anything). This includes your code under test, tinytest.js and defines your tests:

```html
<script src="tinytest.js"></script>
<script src="adder.js"></script>
<script>
 tests({

   'adds numbers': function() {
     assertEquals(6, add(2, 4));
     assertEquals(6.4, add(2.4, 4));
   },

   'subtracts numbers': function() {
     assertEquals(-2, add(2, -4)); 
   },

 });
</script>
```

Open the page in your browser. Green is good. Red is bad. If it's red, look in the JavaScript console for messages.

![](https://github.com/joewalnes/jstinytest/raw/master/screenshots/results-green.png)

**That's it!**

Moar MOARRR!
============

Well, there's not much more to it.

If you open up the JavaScript console you'll see it ran the tests:

![](https://github.com/joewalnes/jstinytest/raw/master/screenshots/results-green-console.png)

If your tests fail, you'll get stack traces:

![](https://github.com/joewalnes/jstinytest/raw/master/screenshots/results-red.png)

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
```



