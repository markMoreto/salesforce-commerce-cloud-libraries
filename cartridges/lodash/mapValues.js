'use strict';

var baseAssignValue = require('./internal/baseAssignValue');
var baseForOwn = require('./internal/baseForOwn');
var baseIteratee = require('./internal/baseIteratee');

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * mapValues(users, function(o) { return o.age; }); => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * * The `_.property` iteratee shorthand. *
 * mapValues(users, 'age'); => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
    var result = {};
    iteratee = baseIteratee(iteratee, 3);

    baseForOwn(object, function (value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
    });
    return result;
}

module.exports = mapValues;
