const eventsAdapter = require('./eventsAdapter')
const getEightRandomPositiveEmojis = require('./getEightRandomPositiveEmojis')

module.exports = (data) => {
    return new Promise(async (resolve, reject) => {
        console.log(getEightRandomPositiveEmojis())
        let user = await intercom.getUser(data.data.item.intercom_user_id)

        let adaptedEvent = eventsAdapter(data.data.item.event_name, data, user.data)

        if (adaptedEvent) {
            slack.postToChannel("Beep boop 🤖", adaptedEvent).then(() => {
                resolve()
            }).catch((e) => {
                reject(e)
            })
        } else {
            resolve()
        }
    })
}