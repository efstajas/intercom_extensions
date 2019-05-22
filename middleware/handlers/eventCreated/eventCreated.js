const eventsAdapter = require('./eventsAdapter')
const getEightRandomPositiveEmojis = require('./getEightRandomPositiveEmojis')

module.exports = (data) => {
    return new Promise(async (resolve, reject) => {
        let subHandlers = [] 

        subHandlers.push(
            handleSlackMessage(data),
            handleEventToNote(data)
        )

        Promise.all(subHandlers).then(() => {
            resolve()
        }).catch(e => {
            reject(e)
        })
    })
}

const handleSlackMessage = (data) => {
    return new Promise(async (resolve, reject) => {
        const user = await intercom.getUser(data.data.item.intercom_user_id)
        const adaptedEvent = eventsAdapter(data.data.item.event_name, data, user)

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

const handleEventToNote = async (data) => {
    return new Promise(async (resolve, reject) => {
        const eventName = data.data.item.event_name
        const userId = data.data.item.intercom_user_id
        let conversations = await intercom.getConversations(userId)

        if (conversations.length != 0) {
            conversations = intercom.ensureOpenConversations(conversations)
            
            let promises = [];

            conversations.forEach(c => {
                promises.push(intercom.addNoteOnConversation(
                    userId,
                    `Event fired by user: ${eventName}`
                ))
            })

            Promise.all(promises).then(() => {
                resolve()
            }).catch(e => {
                reject(e)
            })
        } else {
            resolve()
        }
    })
}