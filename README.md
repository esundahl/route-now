
Express inspired ultra fast and minimalist router for serverless functions. Uses [trouter](https://www.npmjs.com/package/trouter#trouteraddmethod-pattern-handlers) and [qs](https://www.npmjs.com/package/qs)

`js
	const Router = require('router-now')
	const app = Router()
	app.use(authenticate)
	app.get('/', handle)
	app.post('/', handle)
	app.put('/', handle)
	app.delete('/', handle)

	module.exports = app.handler

	function handle(req, res) {
		res.json({foo: 'bar'})
	}
`
