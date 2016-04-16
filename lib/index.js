'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _sighCoreLibStream = require('sigh-core/lib/stream');

var _sighCoreLibLog = require('sigh-core/lib/log');

exports['default'] = function (op) {
  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  if (!("search" in opts) || !("replacement" in opts)) {
    console.error("Please provide 'search' and 'replacement' options to 'replace' plugin");
    throw Error("Please provide 'search' and 'replacement' options to 'replace' plugin");
  }

  return (0, _sighCoreLibStream.mapEvents)(op.stream, function (event) {
    if (event.type !== 'add' && event.type !== 'change') {
      return event;
    }

    if (opts.fileType && event.fileType !== opts.fileType) {
      return event;
    }

    event.data = event.data.replace(opts.search, opts.replacement);
    return event;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=index.js.map