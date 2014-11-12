var test = require('tape')
  , echo = require('./../').default

test('echo exists', function(t) {
  t.plan(1)
  t.ok(echo, 'there is an echo')
  t.end()
})

test('can echo', function(t) {
  var msg = 'hello world'
  t.plan(1)
  t.equal(echo(msg), msg, 'echo uhhh echoes')
  t.end()
})
