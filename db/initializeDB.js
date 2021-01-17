// 0. Run to install additional modules: npm install 
// 1. Run to connect mongodb: C:\Users\avsha\mongodb\bin\mongod.exe --dbpath=C:/Users/avsha/mongodb-data
// 2. From another terminal, run to initialize DB: node initializeDB.js 
// 3. Run to start server: npm start
// 4. View http://localhost:3000/ inside the browser 

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'restful-api';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
    return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)

    // create manas collection
    db.collection('manas').insertMany([
        {
        name: 'Pizza',
        serialnumber: 26,
        times: 4
    }, {
        name: 'Lazania',
        serialnumber: 157,
        times: 5
    }, {
        name: 'Pasta',
        serialnumber: 15,
        times: 3
    }]);

    // create orders
    db.collection('orders').insertMany([
        {
            serialnumber: 15,
            username: "ori",
            date: "23.12.2020",
            telephone: "0545681258"
        }, {
            serialnumber: 15,
            username: "yonatan",
            date: "23.12.2020",
            telephone: "0508411111"
        }, {
            serialnumber: 15,
            username: "itzhak",
            date: "23.12.2020",
            telephone: "0555555555"
        }, {
            serialnumber: 26,
            username: "yogev",
            date: "23.12.2020",
            telephone: "0545682544558"
        }, {
            serialnumber: 26,
            username: "yonatan",
            date: "23.12.2020",
            telephone: "0508419999"
        }, {
            serialnumber: 26,
            username: "yaakov",
            date: "23.12.2020",
            telephone: "011111111"
        }, {
            serialnumber: 26,
            username: "shaul",
            date: "23.12.2020",
            telephone: "0808080880808"
            },{
            serialnumber: 157,
            username: "yarden",
            date: "23.12.2020",
            telephone: "0545682544558"
        }, {
            serialnumber: 157,
            username: "dana",
            date: "23.12.2020",
            telephone: "0508419999"
        }, {
            serialnumber: 157,
            username: "rotem",
            date: "23.12.2020",
            telephone: "011111111"
        }, {
            serialnumber: 157,
            username: "miri",
            date: "23.12.2020",
            telephone: "0808080880808"
        }, {
            serialnumber: 157,
            username: "dalia",
            date: "23.12.2020",
            telephone: "0560211111"
        } , {
            serialnumber: 157,
            username: "dudu",
            date: "23.12.2020",
            telephone: "0560211111"
        } , {
            serialnumber: 157,
            username: "moshik",
            date: "23.12.2020",
            telephone: "0560211111"
        } , {
            serialnumber: 157,
            username: "avshalom",
            date: "23.12.2020",
            telephone: "0560211111"
        } , {
            serialnumber: 157,
            username: "moti",
            date: "23.12.2020",
            telephone: "0560211111"
        } , {
            serialnumber: 157,
            username: "elad",
            date: "23.12.2020",
            telephone: "0560211111"
        } , {
            serialnumber: 157,
            username: "sapir",
            date: "23.12.2020",
            telephone: "0560211111"
        }
    ]);

    // close connection with db
    client.close();
});