const emotion = require('emoji-emotion')
const positiveEmojis = emotion.filter((o) => o.polarity === 3)

module.exports = () => {
    return [
        getRandomPositiveEmoji(),
        getRandomPositiveEmoji(),
        getRandomPositiveEmoji(),
        getRandomPositiveEmoji(),
        getRandomPositiveEmoji(),
        getRandomPositiveEmoji(),
        getRandomPositiveEmoji(),
        getRandomPositiveEmoji(),
    ]
}

function getRandomPositiveEmoji() {
    return positiveEmojis[Math.floor(Math.random()*positiveEmojis.length)]
}
