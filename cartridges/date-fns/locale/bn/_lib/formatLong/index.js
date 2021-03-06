'use strict';

var buildFormatLongFn = require('../../../_lib/buildFormatLongFn/index');

var dateFormats = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy'
};

var timeFormats = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a'
};

var dateTimeFormats = {
    full: "{{date}} {{time}} 'সময়'",
    long: "{{date}} {{time}} 'সময়'",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}'
};

var formatLong = {
    date: buildFormatLongFn({
        formats: dateFormats,
        defaultWidth: 'full'
    }),

    time: buildFormatLongFn({
        formats: timeFormats,
        defaultWidth: 'full'
    }),

    dateTime: buildFormatLongFn({
        formats: dateTimeFormats,
        defaultWidth: 'full'
    })
};

module.exports = formatLong;
