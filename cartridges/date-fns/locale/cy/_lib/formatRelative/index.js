'use strict';

var formatRelativeLocale = {
    lastWeek: "eeee 'diwethaf am' p",
    yesterday: "'ddoe am' p",
    today: "'heddiw am' p",
    tomorrow: "'yfory am' p",
    nextWeek: "eeee 'am' p",
    other: 'P'
};

module.exports = function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
