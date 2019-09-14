const Trouter = require('trouter')
const {parse} = require('url')
const qs = require('qs').parse

function Router(opts) {
	const router = new Trouter()
	router.handler = (req, res) => {
		const {pathname, query} = parse(req.url)
		const routes = router.find(req.method, pathname)
		routes.handlers.reduce((prev, fn) => fn(prev.req, prev.res), {req: {...req, params: routes.params, query: qs(query)}, res})
	}
	return router
}

module.exports = Router
