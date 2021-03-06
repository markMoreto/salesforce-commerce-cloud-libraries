'use strict';

var arrayMap = require('./arrayMap');
var baseIteratee = require('./baseIteratee');
var baseMap = require('./baseMap');
var baseSortBy = require('./baseSortBy');
var baseUnary = require('./baseUnary');
var compareMultiple = require('./compareMultiple');
var identity = require('../identity');

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
    var index = -1;
    iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

    var result = baseMap(collection, function (value) {
        var criteria = arrayMap(iteratees, function (iteratee) {
            return iteratee(value);
        });
        return { criteria: criteria, index: ++index, value: value };
    });

    return baseSortBy(result, function (object, other) {
        return compareMultiple(object, other, orders);
    });
}

module.exports = baseOrderBy;
