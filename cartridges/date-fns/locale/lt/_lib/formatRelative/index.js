'use strict';

var formatRelativeLocale = {
    lastWeek: "'Praėjusį' eeee p",
    yesterday: "'Vakar' p",
    today: "'Šiandien' p",
    tomorrow: "'Rytoj' p",
    nextWeek: 'eeee p',
    other: 'P'
};

module.exports = function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
