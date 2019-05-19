const handlers = require('./handlers')

const mapHandler = (topic, data) => {
    switch(topic) {
        case "event.created":
            return handlers.eventCreated(data)
    }
}

module.exports = (req, res, next) => {
    console.log(`Handling event of type ${req.body.topic}`)

    mapHandler(req.body.topic, req.body).then(() => {
        console.log('-- Success.')
        res.send(200)
        next()
    }).catch((e) => {
        console.error(e)
        res.send(e)
    })
}