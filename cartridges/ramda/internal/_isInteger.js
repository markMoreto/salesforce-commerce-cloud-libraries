'use strict';

/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {boolean}
 */
module.exports = Number.isInteger || function _isInteger(n) {
    return (n << 0) === n;
};
