
const Gpio = require('onoff').Gpio
const express = require('express');
const path = require('path');
const router = require('./routes/RestAPI.js');
const bodyParser = require('body-parser');
const processCOntroller = require('./controllers/processController.js');


const dist = path.resolve('./dist')

//FAKE ELECTRICITY
this.fakePump1 = new Gpio(12,'out');
    this.fakePump1.writeSync(1);
  
this.fakePump2 = new Gpio(16,'out');
    this.fakePump2.writeSync(1);
    
this.fakePump3 = new Gpio(20,'out');
    this.fakePump3.writeSync(1);
    
this.fakePump4 = new Gpio(21,'out');
    this.fakePump4.writeSync(1);
    


    
const app = express();



app.get('/', (req,res,next) => {
    res.sendFile(dist+'/index.html')
})
app.use(router);



const server = app.listen(3000);

processCOntroller.handleSocket();

 
 


     




