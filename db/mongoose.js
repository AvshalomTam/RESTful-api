// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'restful-api'
// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//     return console.log('Unable to connect to database!')
//     }

//     const db = client.db(databaseName)

//     // Start to interact with the database
//     db.collection('bears').insertOne({
//         name: 'aoo',
//         age: 291
//     })
// })

const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true, 
//     useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true
// });

mongoose.connect('mongodb://127.0.0.1:27017/restful-api', {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({
    name: 'aviavi',
    age: 678
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('error!', error)
})

const you = new User({
    name: 'avishahar',
    age: 6
})

you.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('error!', error)
})