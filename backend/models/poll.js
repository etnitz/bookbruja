const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Poll = new Schema(
    {
        show: { type: String, required: false },
        movie: { type: String, required: false },
        movieGenre: { type: String, required: false },
        musicGenre: { type: String, required: false },
        musician: { type: String, required: false },
        bookGenre: { type: String, required: false },
        book: { type: String, required: false },
        bookTrope: { type: String, required: false },
        personality: { type: String, required: false },
        hottie: { type: String, required: false },
        hobby: { type: String, required: false },
        interest: { type: String, required: false },
        age: { type: String, required: false }
    }
)

module.exports = Poll