const db = require('../db')
const { Poll } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const createPolls = async () => {
    const polls = [{
        show: "Bob's Burgers",
        movie: 'Star Wars',
        movieGenre: 'action',
        musician: 'Pink Floyd',
        bookGenre: 'fantasy',
        book: 'Lord of the Rings',
        bookTrope: 'hidden powers',
        personality: 'introvert',
        hottie: 'Princess Leia',
        hobby: 'video games',
        interest: 'electricity',
        age: '37'
    }]

    await Query.insertMany(polls)
    console.log('Created test poll')
    return polls

}

const run = async () => {
    await createPolls()
    db.close()
}

run()