var irc = require('..');
var Stream = require('stream').PassThrough;

describe('topic()', function() {
  describe('on TOPIC', function() {
    it('should emit "topic"', function(done) {
      var stream = new Stream;
      var client = irc(stream);

      client.on('topic', function(e) {
        e.nick.should.equal('김지현');
        e.channel.should.eql('#openirc');
        e.topic.should.equal('Let\'s make OpenIRC great again!');
        e.hostmask.nick.should.equal('김지현');
        e.hostmask.username.should.equal('~nrvnqsr');
        e.hostmask.hostname.should.equal('example.com');
        e.hostmask.string.should.equal('김지현!~nrvnqsr@example.com');
        done();
      });

      stream.write(':김지현!~nrvnqsr@example.com TOPIC #openirc :Let\'s make OpenIRC great again!\r\n');
    });
  });
});
