'use strict';

var buildMatchFn = require('../../../_lib/buildMatchFn/index');
var buildParseFn = require('../../../_lib/buildParseFn/index');
var buildMatchPatternFn = require('../../../_lib/buildMatchPatternFn/index');
var parseDecimal = require('../../../_lib/parseDecimal/index');
var matchOrdinalNumbersPattern = /^(\d+)(th|st|nd|rd)?/i;

var matchWeekdaysPatterns = {
    narrow: /^(ah|is|se|ra|kh|ju|sa)/i,
    short: /^(ahd|isn|sel|rab|kha|jum|sab)/i,
    long: /^(ahad|isnin|selasa|rabu|khamis|jumaat|sabtu)/i
};

var parseWeekdayPatterns = {
    any: [/^a/i, /^i/i, /^se/i, /^r/i, /^k/i, /^j/i, /^sa/i]
};

var matchMonthsPatterns = {
    short: /^(jan|feb|mac|apr|mei|jun|jul|ogo|sep|okt|nov|dis)/i,
    long: /^(januari|februari|mac|april|mei|jun|julai|ogos|september|oktober|november|disember)/i
};

var parseMonthPatterns = {
    any: [/^ja/i, /^f/i, /^ma/i, /^ap/i, /^me/i, /^jun/i, /^jul/i, /^og/i, /^s/i, /^ok/i, /^n/i, /^d/i]
};

var matchTimesOfDayPatterns = {
    short: /^(am|pm)/i,
    long: /^([ap]\.?\s?m\.?)/i
};

var parseTimeOfDayPatterns = {
    any: [/^a/i, /^p/i]
};

var match = {
    ordinalNumbers: buildMatchPatternFn(matchOrdinalNumbersPattern),
    ordinalNumber: parseDecimal,
    weekdays: buildMatchFn(matchWeekdaysPatterns, 'long'),
    weekday: buildParseFn(parseWeekdayPatterns, 'any'),
    months: buildMatchFn(matchMonthsPatterns, 'long'),
    month: buildParseFn(parseMonthPatterns, 'any'),
    timesOfDay: buildMatchFn(matchTimesOfDayPatterns, 'long'),
    timeOfDay: buildParseFn(parseTimeOfDayPatterns, 'any')
};

module.exports = match;
