'use strict';

var baseUpdate = require('./internal/baseUpdate');

/**
 * This method is like `update` except that it accepts `customizer` which is
 * invoked to produce the objects of `path`. If `customizer` returns `undefined`
 * path creation is handled by the method instead. The `customizer` is invoked
 * with three arguments: (nsValue, key, nsObject).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 4.6.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {Function} updater The function to produce the updated value.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * const object = {}
 *
 * updateWith({}, '[0][1]', function() { return 'a'; }, Object) => { '0': { '1': 'a' } }
 */
function updateWith(object, path, updater, customizer) {
    customizer = typeof customizer === 'function' ? customizer : undefined;
    return object == null ? object : baseUpdate(object, path, updater, customizer);
}

module.exports = updateWith;
