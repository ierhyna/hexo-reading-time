var htmlToText = require('html-to-text');
var wordCount = require('word-count');

module.exports = function(content, suffix, wpm) {

    suffix = suffix || 'min. read';
    wpm = wpm || 150;

    var words = wordCount(htmlToText.fromString(
        content, {
            ignoreImage: false,
            ignoreHref: true,
            wordwrap: false
        }));

    var readingTime = Math.ceil(words / wpm);
    return readingTime < 1 ? '1 ' + suffix : readingTime + ' ' + suffix
};