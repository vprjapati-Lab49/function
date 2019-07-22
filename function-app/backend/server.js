const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const database = require('./config/db/mongo');
const {server} = require('./config/dev');
const setupRoutes = require('./routes/index');
//----------import separator----------

const expressApp = express();
expressApp.use(cors());
expressApp.use(bodyParser.urlencoded({extended: false}));
expressApp.use(bodyParser.json());
expressApp.use(logger('dev'));

const router = express.Router()

setupRoutes(router);
database();

console.log(`All exposed routes are:::${JSON.stringify(router.stack)}`);

expressApp.listen(server.port, () => {
    console.log(`Listening on port [${server.port}]`)
});

expressApp.use(server.basePath, router);