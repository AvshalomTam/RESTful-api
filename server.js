const path = require('path');
const hbs = require('hbs');
// BASE SETUP
// =============================================================================
require('./db/mongoose');
const Order = require('./app/models/order');

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

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();             
app.use('/api', router);

// main page (accessed at GET http://localhost:3000/)
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