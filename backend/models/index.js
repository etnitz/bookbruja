const { model } = require('mongoose')
const PollSchema = require('./poll')

const Poll = model('poll', PollSchema)

module.exports = Poll