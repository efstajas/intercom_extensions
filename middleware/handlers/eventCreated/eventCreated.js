const eventsAdapter = require('./eventsAdapter')

module.exports = (data) => {
    return new Promise(async (resolve, reject) => {
        let user = await intercom.getUser(data.data.item.intercom_user_id)

        let adaptedEvent = eventsAdapter(data.data.item.event_name, data, user)

        if (adaptedEvent) {
            slack.postToChannel("Event on POS", adaptedEvent).then(() => {
                resolve()
            }).catch((e) => {
                reject(e)
            })
        } else {
            resolve()
        }
    })
}