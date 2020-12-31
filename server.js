const path = require('path');
const hbs = require('hbs');
// BASE SETUP
// =============================================================================
require('./db/mongoose');
const Order = require('./app/models/order');

// const orders = require('./db/CRUD');

// call the packages we need
var express = require('express');           // call express
var app = express();                        // define our app using express
//body-parser will let us pull POST content from our HTTP request so that we can do things like create a bear
var bodyParser = require('body-parser');  

var port = process.env.PORT || 3000;        // set our port
// console.log(path.join(__dirname, '../public'))
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
app.use(bodyParser.urlencoded({ extended: true })); // this will let us get the data from a POST
app.use(bodyParser.json());
// orders.fetchByRestaurant()

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:3000/)
app.get('/', function(req, res) {
    res.render('index');  
});

// More routes
router.get('/orders/:res', async (req, res) => {
    const restaurantNum = req.params.res 
    try {
        const orders = await Order.find({
            restaurant: restaurantNum
        })

        if (!orders) {
            return res.status(404).send()
        }
        res.send(orders)
    } catch (e) {
        res.status(500).send()
    }
});

// REGISTER OUR ROUTES -------------------------------
// all of our api routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);