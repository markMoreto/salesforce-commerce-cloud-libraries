'use strict';

var baseRest = require('./internal/baseRest');
var createWrap = require('./internal/createWrap');
var getHolder = require('./internal/getHolder');
var replaceHolders = require('./internal/replaceHolders');

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;
var WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = bind(greet, object, 'hi');
 * bound('!'); => 'hi fred!'
 *
 * * Bound with placeholders. *
 *
 * var bound = bind(greet, object, _, '!');
 * bound('hi');=> 'hi fred!'
 */
var bind = baseRest(function (func, thisArg, partials) {
    var bitmask = WRAP_BIND_FLAG;
    var holders;
    if (partials.length) {
        holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
    }
    return createWrap(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;
