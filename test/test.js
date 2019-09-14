const test = require('tape')
const Router = require('../')

test('test', t => {
	t.plan(5)

	Router()
		.get('/*', (req, res) => {
			t.ok(req.method, 'GET', 'Should be a GET method')
			t.ok(req.url, '/foo/bar', 'Should have a proper url')
			return {req, res}
		})
		.get('/:foo/:bar', (req, res) => {
			t.equal(req.params.foo, 'foo', 'should have `foo` param set')
			t.equal(req.params.bar, 'bar', 'should have `bar` param set')
		})
		.handler({method: 'GET', url: '/foo/bar'})

	Router().get('/:table/*', (req, res) => {
		t.ok(req.params.table, 'foo')
	})
		.handler({method: 'GET', url: '/foo/bar?beep=boop'})
})
