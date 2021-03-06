'use strict';

var apply = require('./internal/apply');
var baseRest = require('./internal/baseRest');
var customDefaultsMerge = require('./internal/customDefaultsMerge');
var mergeWith = require('./mergeWith');

/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see defaults
 * @example
 *
 * defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } }); => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = baseRest(function (args) {
    args.push(undefined, customDefaultsMerge);
    return apply(mergeWith, undefined, args);
});

module.exports = defaultsDeep;
