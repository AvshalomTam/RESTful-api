const path = require('path');
const hbs = require('hbs');
// BASE SETUP
// =============================================================================
require('./db/mongoose');
const Order = require('./app/models/order');
const Mana = require('./app/models/mana');

// call the packages we need
var express = require('express');           
var app = express();                 
var bodyParser = require('body-parser');  

// Choose port
var port = process.env.PORT || 3000;    

// Define paths for Express configuration
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// Setup handelbars engine and views location 
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

// ROUTES
// =============================================================================
// main page (accessed at GET http://localhost:3000/)
app.get('/', function(req, res) {
    res.render('index');  
});

app.get('/search', function(req, res) {
    res.render('search');
}); 

app.get('/db', async (req, res) => {
    const number = parseInt(req.query.num) 
    // check if user inserted serial number
    if (isNaN(req.query.num)) {
        return res.send({
            mana: 'Please insert serial number!',
            users: []
        })
    }
    // here searsh in DB foe serial number
    try {
        const mana = await Mana.findOne({
            serialnumber: number
        })
        const users = await Order.find({
            serialnumber: number
        })

        if (!mana || !users) {
            return res.send({
                mana: `There is no mana with ${number} as serial number`,
                users: []
            })
        }
        // send msg and users to client
        res.send({
            mana: mana.name,
            users
        })
    } catch (e) {
        res.status(500).send()
    }
});

app.get('*', (req, res) => {
    res.render('404page', {
        title: '404 page',
        name: 'Avshalom Tam',
        error_msg: 'Page not found - Please go back'
    })
})
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server runs on port ' + port);