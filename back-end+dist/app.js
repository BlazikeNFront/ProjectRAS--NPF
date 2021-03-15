
const express = require('express');
const path = require('path');
const router = require('./routes/RestAPI.js');
const bodyParser = require('body-parser');
const socketInit = require('./socket').init
const ProccessControler = require('./models/ProcessController');
const helmet = require('helmet')
const compression = require('compression')
const dist = path.resolve('./dist')


const app = express();

app.use(bodyParser.json());
app.use(helmet());
app.use(compression());
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET','POST');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
        next();
})

app.use(express.static(dist));

app.get('/', (req,res,next) => {
    res.sendFile(dist+'/index.html')
})
app.use(router);

const server = app.listen(process.env.PORT || 4000);
const io = socketInit(server);
ProccessControler.handleSocket()





