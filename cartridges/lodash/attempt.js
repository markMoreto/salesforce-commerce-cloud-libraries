'use strict';

var isError = require('./isError');

/**
 * Attempts to invoke `func`, returning either the result or the caught error
 * object. Any additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @since 3.0.0
 * @category Util
 * @param {Function} func The function to attempt.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {*} Returns the `func` result or error object.
 * @example
 *
 * // Avoid throwing errors for invalid selectors.
 * var elements = attempt(selector =>
 *   document.querySelectorAll(selector), '>_>')
 *
 * if (isError(elements)) {
 *   elements = []
 * }
 */
function attempt(func) {
    try {
        var args = Array.prototype.slice.call(arguments);
        args.shift();
        return func.apply(this, args);
    } catch (e) {
        return isError(e) ? e : new Error(e);
    }
}

module.exports = attempt;
