const handlers = require('./handlers')

const mapHandler = (topic, data) => {
    switch(topic) {
        case "event.created":
            return handlers.eventCreated(data)
    }
}

module.exports = (req, res, next) => {
    console.log('Handling /event')

    mapHandler(req.body.topic, req.body).then(() => {
        res.send(200)
        next()
    }).catch((e) => {
        console.error(e)
        res.send(e)
    })
}