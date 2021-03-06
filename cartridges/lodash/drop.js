'use strict';

var baseSlice = require('./internal/baseSlice');
var toInteger = require('./toInteger');

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @static
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param {Object} [guard] Enables use as an iteratee for methods like `map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * drop([1, 2, 3]); => [2, 3]
 *
 * drop([1, 2, 3], 2); => [3]
 *
 * drop([1, 2, 3], 5); => []
 *
 * drop([1, 2, 3], 0); => [1, 2, 3]
 */
function drop(array, n, guard) {
    var length = array == null ? 0 : array.length;
    if (!length) {
        return [];
    }
    n = (guard || n === undefined) ? 1 : toInteger(n);
    return baseSlice(array, n < 0 ? 0 : n, length);
}

module.exports = drop;
