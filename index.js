const Trouter = require('trouter')
const {parse} = require('url')
const qs = require('qs').parse

module.exports = function Router(opts) {
	const router = new Trouter()
	router.catch = fn => {
		router.errs = fn
		return router
	}
	router.errs = (e, req, res) => res.status(e.statusCode || e.status || 500)
	router.handler = (req, res) => {
		const {pathname, query} = parse(req.url)
		const routes = router.find(req.method, pathname)
		req = {...req, pathname, query: qs(query), params: routes.params}
		routes.handlers.reduce((prev, fn) => {
			return prev.then(_ => fn(req, res))
		}, Promise.resolve())
		.catch(e => router.errs(e, req, res))
	}
	return router
}
