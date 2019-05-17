const restify = require('restify')
require('dotenv').config()

const Intercom = require('./classes/Intercom')
global.intercom = new Intercom

const Slack = require('./classes/Slack')
global.slack = new Slack

const middleware = require('./middleware')

const server = restify.createServer({
    name: 'Grover Intercom Extensions'
})

server.use(restify.plugins.bodyParser())

server.post('/event', middleware.event)

server.head('*', (req, res, next) => {
    res.send(200);
    next()
})

server.listen(4000, () => {
    console.log('%s listening at %s', server.name, server.url);
})