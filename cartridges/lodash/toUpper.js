'use strict';

var toString = require('./toString');

/**
 * Converts `string`, as a whole, to upper case just like
 * [String#toUpperCase](https://mdn.io/toUpperCase).
 *
 * @static
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the upper cased string.
 * @example
 *
 * toUpper('--foo-bar--'); => '--FOO-BAR--'
 *
 * toUpper('fooBar'); => 'FOOBAR'
 *
 * toUpper('__foo_bar__'); => '__FOO_BAR__'
 */
function toUpper(value) {
    return toString(value).toUpperCase();
}

module.exports = toUpper;
