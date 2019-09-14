
Express inspired ultra fast and minimalist router for serverless functions. Uses [trouter](https://www.npmjs.com/package/trouter#trouteraddmethod-pattern-handlers) and [qs](https://www.npmjs.com/package/qs)

**Note:** The api is still in flux. I would not use this library yet.

```js
	const Router = require('route-now')
	const app = Router()
	app.use(authenticate)
	app.get('/', handle)
	app.post('/', handle)
	app.put('/', handle)
	app.delete('/', handle)

	module.exports = app.handler

	function authenticate(req, res) {
		if (!auth) throw({statusCode: 401})
	}

	function handle(req, res) {
		res.json({foo: 'bar'})
	}
```
