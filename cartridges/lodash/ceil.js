'use strict';

var createRound = require('./internal/createRound');

/**
 * Computes `number` rounded up to `precision`.
 *
 * @static
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round up.
 * @param {number} [precision=0] The precision to round up to.
 * @returns {number} Returns the rounded up number.
 * @example
 *
 * ceil(4.006); => 5
 *
 * ceil(6.004, 2); => 6.01
 *
 * ceil(6040, -2); => 6100
 */
var ceil = createRound('ceil');

module.exports = ceil;
