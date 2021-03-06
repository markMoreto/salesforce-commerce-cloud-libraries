'use strict';

var baseMean = require('./meanBy');

/**
 * Computes the mean of the values in `array`.
 *
 * @static
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the mean.
 * @example
 *
 * mean([4, 2, 8, 6]) => 5
 */
function mean(array) {
    return baseMean(array, function (value) { return value; });
}

module.exports = mean;
