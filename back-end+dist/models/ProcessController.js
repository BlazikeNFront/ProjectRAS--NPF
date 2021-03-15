
const socket = require('../socket');
const jwt = require('jsonwebtoken')
const secret = require('../privates').secret


class ProccessControler {
    constructor() {
        this.autoControl = null;
        this.currentProtocol = null;
        this.waterLevel = null;
        this.temperature = null;
        this.pumps = {
            waterPump1: null,
            waterPump2: null,
            airPump1: null,
            airPump2: null,
        }

        this.currentRequest = {};
        
        this.getControllerState= this.getControllerState.bind(this)
        
        this.handleSocket= this.handleSocket.bind(this)
        this.setState = this.setState.bind(this)
      
        this.setMirrorControllerState = this.setMirrorControllerState.bind(this)
       
    }

     setState(data) {
       
         const { autoControl, currentProtocol, waterLevel, temperature, pumps } = data;
        
         for (let device in pumps) {
             this.pumps[device] = pumps[device]
         }
        
        this.autoControl = autoControl;
        this.currentProtocol = currentProtocol;
        this.waterLevel = waterLevel;
        this.temperature = temperature;
        this.pumps = {...pumps};
        this.currentRequest ={ ...pumps};
        this.currentRequest.autoControl = autoControl;
        this.currentRequest.requested = false;
         
        const io = socket.getIo();
        const payload = mirrorController.getControllerState()
        
        io.emit('currentState',payload)
    }
   
    
    getControllerState() {
        
        const currentState = {
            autoControl : this.autoControl,
            currentProtocol:this.currentProtocol,
            waterLevel:this.waterLevel,
            temperature:this.temperature,
            pumps: this.pumps,
            requested:this.currentRequest.requested
        }
        
        return currentState
    }

    setRequest(payload) {
       
        if (payload.autoControl === false || payload.autoControl === true) {
            this.currentRequest.autoControl = payload.autoControl;
            this.currentRequest.requested = true;
            return
        }
        else {
           this.currentRequest[payload.name] = payload.state
           this.currentRequest.requested = true;
        }
    }
   
    handleSocket() {
        const io = socket.getIo();
        io.on('connection', (socket) => {
            console.log('client connected')
            socket.on('setRequest', async (data) => {
                try {
                   
                    const verifiedToken = await jwt.verify(data.token, secret);
                    if(!verifiedToken){
                        const error = 'FALSIFIED TOKEN';
                        console.log(error);
                        return
                    }
                    else { this.setRequest(data);}
                 }
                catch (err) {
                 console.log(err);
                 const payload = mirrorController.getControllerState();
                 io.emit('currentState', payload);
                }
            })
        })
    }

    setMirrorControllerState(data) {
        for (let device in this.pumps) {
            this.pumps[device] = data[device]
        }
        this.autoControl = data.autoControl
        const io = socket.getIo();
        const payload = mirrorController.getControllerState()
        io.emit('currentState',payload)
    }
}
const mirrorController = new ProccessControler();
module.exports = mirrorController
