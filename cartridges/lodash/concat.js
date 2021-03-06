'use strict';

var arrayPush = require('./internal/arrayPush');
var baseFlatten = require('./internal/baseFlatten');
var copyArray = require('./internal/copyArray');
var isArray = require('./isArray');

/**
 * Creates a new array concatenating `array` with any additional arrays
 * and/or values.
 *
 * @static
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * var array = [1];
 * var other = concat(array, 2, [3], [[4]]);
 *
 * console.log(other); => [1, 2, 3, [4]]
 *
 * console.log(array); => [1]
 */
function concat() {
    var length = arguments.length;
    if (!length) {
        return [];
    }
    var args = Array(length - 1);
    var array = arguments[0];
    var index = length;

    while (index--) {
        args[index - 1] = arguments[index];
    }
    return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}

module.exports = concat;
