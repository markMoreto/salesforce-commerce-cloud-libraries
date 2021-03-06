'use strict';

var baseDifference = require('./internal/baseDifference');
var baseFlatten = require('./internal/baseFlatten');
var isArrayLikeObject = require('./isArrayLikeObject');
var last = require('./last');

/**
 * This method is like `difference` except that it accepts `iteratee` which
 * is invoked for each element of `array` and `values` to generate the criterion
 * by which they're compared. The order and references of result values are
 * determined by the first array. The iteratee is invoked with one argument:
 * (value).
 *
 * **Note:** Unlike `pullAllBy`, this method returns a new array.
 *
 * @static
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor) => [1.2]
 */
function differenceBy(array) {
    var values = Array.prototype.slice.call(arguments);
    values.shift();
    let iteratee = last(values);
    if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
    }
    return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), iteratee)
        : [];
}

module.exports = differenceBy;
