'use strict';

var formatRelativeLocale = {
    lastWeek: "'letzten' eeee 'um' p",
    yesterday: "'gestern um' p",
    today: "'heute um' p",
    tomorrow: "'morgen um' p",
    nextWeek: "eeee 'um' p",
    other: 'P'
};

module.exports = function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
