const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/restful-api', {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

// Run to connect to mongoDB
// C:\Users\avsha\mongodb\bin\mongod.exe --dbpath=C:/Users/avsha/mongodb-data