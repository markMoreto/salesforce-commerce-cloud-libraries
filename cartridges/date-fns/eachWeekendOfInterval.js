'use strict';

var eachDayOfInterval = require('./eachDayOfInterval');
var isSunday = require('./isSunday');
var isWeekend = require('./isWeekend');

/**
 * @name eachWeekendOfInterval
 * @category Interval Helpers
 * @summary List all the Saturdays and Sundays in the given date interval.
 *
 * @description
 * Get all the Saturdays and Sundays in the given date interval.
 *
 * @param {Interval} interval - the given interval. See [Interval]{@link docs/types/Interval}
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * var result = eachWeekendOfInterval({
 *   start: new Date(2018, 8, 17),
 *   end: new Date(2018, 8, 30)
 * })
 * //=> [
 * //   Sat Sep 22 2018 00:00:00,
 * //   Sun Sep 23 2018 00:00:00,
 * //   Sat Sep 29 2018 00:00:00,
 * //   Sun Sep 30 2018 00:00:00
 * // ]
 */
module.exports = function eachWeekendOfInterval(interval) {
    if (arguments.length < 1) {
        throw new TypeError(
            '1 argument required, but only ' + arguments.length + ' present'
        );
    }

    var dateInterval = eachDayOfInterval(interval);
    var weekends = [];
    var index = 0;
    while (index++ < dateInterval.length) {
        var date = dateInterval[index];
        if (isWeekend(date)) {
            weekends.push(date);
            if (isSunday(date)) index += 5;
        }
    }
    return weekends;
};
