var htmlToText = require('html-to-text');
var wordCount = require('word-count');

module.exports = function(content, prefix) {
  prefix = !prefix ? 'min. read' : prefix;
  var text = htmlToText.fromString(content, {
    ignoreImage: false,
    ignoreHref: true,
    wordwrap: false
  });

  var words = wordCount(text);
  var speed = 150;

  var rt = Math.round(words / speed);
  var readingTime = rt <= 1 ? 1 : rt;

  return readingTime + ' ' + prefix;
};
