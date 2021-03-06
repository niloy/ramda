var and = require('./and');
var lift = require('./lift');


/**
 * A function wrapping calls to the two functions in an `&&` operation, returning the result of the first
 * function if it is false-y and the result of the second function otherwise.
 *
 * `R.both` will work on all other applicatives as well.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.and
 * @example
 *
 *      var gt10 = x => x > 10;
 *      var even = x => x % 2 === 0;
 *      var f = R.both(gt10, even);
 *      f(100); //=> true
 *      f(101); //=> false
 */
module.exports = lift(and);
