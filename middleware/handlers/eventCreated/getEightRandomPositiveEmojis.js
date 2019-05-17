const emotion = require('emoji-emotion')

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
    let positiveEmojis = emotion.filter((o) => o.polarity === 3)
    return positiveEmojis[Math.floor(Math.random()*positiveEmojis.length)]
}