const test = require('tape')
const Router = require('../')

test('test', async t => {

	t.plan(3)


	Router()
		.get('/throw', _ => { throw 'Should catch a throw' })
		.catch(t.pass)
		.handler({method: 'GET', url: '/throw'})

	Router()
			.get('/reject', _ => Promise.reject({status: 401, message: 'Unauthorized'}))
			.catch((err, req, res) => {
				t.equal(err.status, 401)
				t.equal(err.message, 'Unauthorized')
			})
			.handler({method: 'GET', url: '/reject'})
})
