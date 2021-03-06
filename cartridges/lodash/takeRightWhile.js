'use strict';

var baseIteratee = require('./internal/baseIteratee');
var baseWhile = require('./internal/baseWhile');

/**
 * Creates a slice of `array` with elements taken from the end. Elements are
 * taken until `predicate` returns falsey. The predicate is invoked with
 * three arguments: (value, index, array).
 *
 * @static
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function} [predicate=identity] The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * takeRightWhile(users, function(o) { return !o.active; }); => objects for ['fred', 'pebbles']
 *
 * * The `matches` iteratee shorthand. *
 * takeRightWhile(users, { 'user': 'pebbles', 'active': false }); => objects for ['pebbles']
 *
 * * The `matchesProperty` iteratee shorthand. *
 * takeRightWhile(users, ['active', false]); => objects for ['fred', 'pebbles']
 *
 * * The `property` iteratee shorthand. *
 * takeRightWhile(users, 'active'); => []
 */
function takeRightWhile(array, predicate) {
    return (array && array.length)
        ? baseWhile(array, baseIteratee(predicate, 3), false, true)
        : [];
}

module.exports = takeRightWhile;
