qbirc [![Build Status]][travis] [![Version]][npm]
========
General purpose IRC client for nodejs. See [documentation] for the details.

- Plugin system
- Simple api
- Arbitrary input stream
- **[DEBUG]** support for easy debugging

[DEBUG]: https://github.com/visionmedia/debug
[documentation]: docs.md

```bash
$ npm install --save qbirc
```
```js
var irc = require('qbirc');
var net = require('net');

var stream = net.connect({
  port: 6667,
  host: 'irc.freenode.org'
});

var client = irc(stream);

client.pass('pass');
client.nick('tobi');
client.user('tobi', 'Tobi Ferret');

client.join('#express');
client.names('#express', function(err, names){
  console.log(names);
});
```

--------

MIT License

[Version]: https://img.shields.io/npm/v/qbirc.svg
[Build Status]: https://travis-ci.org/openirc/qbirc.svg?branch=master

[npm]: https://npmjs.org/package/qbirc
[travis]: https://travis-ci.org/openirc/qbirc
