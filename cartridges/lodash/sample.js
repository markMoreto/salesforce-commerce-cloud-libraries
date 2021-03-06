'use strict';

var arraySample = require('./internal/arraySample');
var baseSample = require('./internal/baseSample');
var isArray = require('./isArray');

/**
 * Gets a random element from `collection`.
 *
 * @static
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to sample.
 * @returns {*} Returns the random element.
 * @example
 *
 * sample([1, 2, 3, 4]); => 2
 */
function sample(collection) {
    var func = isArray(collection) ? arraySample : baseSample;
    return func(collection);
}

module.exports = sample;
