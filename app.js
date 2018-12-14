const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(morgan('dev'));

let port = 1996;

let url = 'mongodb://localhost/lol';
mongoose.connect(url);
let conn = mongoose.connection;

conn.on('disconnected', function() {
	setTimeout(function(){
		mongoose.connect(mongodbUri);
	}, 3000);
});

conn.on('error', function(error) {
	console.error('Error in MongoDb connection: ' + error);
	mongoose.disconnect();
});

conn.on('connected', function(){
	console.log('connected with mongodb');
});

require('./server/routes')(app)

app.listen(port, () =>{
    console.log('The server is running on port : '+port);
})



var restore = require('./server/controllers/temp')
restore.restoreBook()