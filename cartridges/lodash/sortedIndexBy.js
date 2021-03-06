'use strict';

var baseIteratee = require('./internal/baseIteratee');
var baseSortedIndexBy = require('./internal/baseSortedIndexBy');

/**
 * This method is like `sortedIndex` except that it accepts `iteratee`
 * which is invoked for `value` and each element of `array` to compute their
 * sort ranking. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @since 4.0.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function} [iteratee=identity] The iteratee invoked per element.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * var objects = [{ 'x': 4 }, { 'x': 5 }];
 *
 * sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; }); => 0
 *
 * * The `property` iteratee shorthand. *
 * sortedIndexBy(objects, { 'x': 4 }, 'x'); => 0
 */
function sortedIndexBy(array, value, iteratee) {
    return baseSortedIndexBy(array, value, baseIteratee(iteratee, 2));
}

module.exports = sortedIndexBy;
