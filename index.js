var restify = require('restify')
var GeoFind = require(__dirname + '/StrangeJS/GeoFind/GeoFind.js')

/**
 * Authentication middleware - let's secure the route
 * @param   object  req     The request object
 * @param   object  res     The response object
 * @param   func    next    The next function
**/
function authenticate(req, res, next) {
    if (req.authorization.credentials === process.env.GEOFIND_API_KEY) {
        next()
    } else {
        next(new restify.UnauthorizedError('Fuck you'))
    }
}

/**
 * Responds to the POST request
 * @param   object  req     The request object
 * @param   object  res     The response object
 * @param   func    next    The next function
**/
function respond(req, res, next) {
    // Pull out our parameters and use the GeoFind library
    GeoFind.get(req.params.lat, req.params.long, req.params.type)
        .then((loc) => {
            res.send(loc)
            next()
        })
        .catch((err) => {
            console.log(err)
            next(err)
        })
}
// Create and configure a server
var server = restify.createServer()
server.use(restify.authorizationParser())
server.use(restify.bodyParser());
server.use(restify.CORS({
    origins: ['*'],
    credentials: true,
    headers: ['x-foo']
}));

// Ensure you call with the accept-version header
server.post({path: '/api/geo', version: '1.0.0'}, authenticate, respond)


server.listen(8080, (e) => {
    console.log('%s listening at %s', server.name, server.url)
})
