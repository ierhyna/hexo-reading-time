var htmlToText = require('html-to-text');
var wordCount = require('word-count');

module.exports = function(content, suffix, wpm) {

    // Check if suffix provided is not a string
    if (suffix && typeof suffix !== "string") {
        console && console.warn("Second argument [suffix] must be a string.\nUsing default parameters.");
        suffix = 'min. read';
    };

    !suffix && (suffix = 'min. read');
    // defaults for omitted parameter.     
    // This way we can pass third argument and omit second.


    if (wpm && typeof wpm !== "number") {
        console && console.warn("Third parameter [reading speed] must be a number\nUsing default parameters.");
        wpm = 150;
    };

    !wpm && (wpm = 150);
    // if speed is not provided then default is used.

    var words = wordCount(htmlToText.fromString(
        content, {
            ignoreImage: false,
            ignoreHref: true,
            wordwrap: false
        }));

    var readingTime = Math.round(words / wpm);
    return readingTime < 1 ? '1 ' + suffix : readingTime + ' ' + suffix
};