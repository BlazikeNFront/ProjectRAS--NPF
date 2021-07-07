
const relayModule = require('../models/relay.js');
const SmsMessage = require('../models/SmsHandler.js');
const dataSensor = require('../data/dataFromSensors.js').data
const insertAvgDayTemp = require('../data/MongoDb.js').insertDayAvgTemp;
const insertHourTemp = require('../data/MongoDb.js').insertHourTemp;
const io = require('../socket.js');
const jwt = require('jsonwebtoken');
const secret = require('../privates.js').secret;
const critTemp = require('../privates.js').critTemp;


/*ALL DEVICES ARE ON SYNC 0 ON DEFUALT - DUE TO HOW THEY ARE CONNECTED TO RELAY - IF RASPBERRY OR RELAY DIES , SETUP WILL STILL WORK ON DEFAULT PUMPS;*/


class proccessController {
    constructor() {
        this.lastUpdate = null;
        this.lastState = null;
        this.lastTempHourUpdate = null;
        this.lastDayAverageTempUpdate = null;
        this.autoControl = true;
        const startControll = setInterval(() => {
        this.checkAndHandleConditionChanges();
        },5000);
       
        this.handleSocket = this.handleSocket.bind(this);
        
        
    }
  

    async getDataOfSensors(){
        
        const currentState = {
              firstWaterPump :await  relayModule.readSyncOfFirstWaterPump(),
              secondWaterPump:await relayModule.readSyncOfSecondaryWaterPump(),
              firstAirPump:await relayModule.readSyncOfFirstAirPump(),
              secondAirPump:await relayModule.readSyncOfSecondaryAirPump(),
              waterLevel: await dataSensor.waterLevel,
              temperature: await dataSensor.temperature,
              currentProtocol:null,
              
             
              }
             
              if(currentState.firstWaterPump === 0 && currentState.secondWaterPump === 0 && currentState.firstAirPump === 0 && currentState.secondAirPump === 0 && currentState.waterLevel === 1){
                  currentState.currentProtocol = 0} else {currentState.currentProtocol = 1}
              this.lastState = currentState;
              return currentState
        }
        
        
    toggleAutoControl(){
            this.autoControl = !this.autoControl;
            }
            
            
    checkIfHourTemp(temp){
        if(temp === null) {return}
            const currentDate = Date.now();
        const timeDiffrence = currentDate -this.lastTempHourUpdate;
        if(timeDiffrence > 3600000){
         insertHourTemp(temp);  
          this.lastTempHourUpdate = currentDate;
          } else {return}
        }
        
        
    checkifAvgDayTemp(){
            
        const currentDate = Date.now();
        const timeDiffrence = currentDate -this.lastDayAverageTempUpdate;
        if(timeDiffrence > 86400000){
            
          insertAvgDayTemp();  
          this.lastDayAverageTempUpdate = currentDate;
          } else {return}
        }
        
        
   async verifyToken(token){
       try{  
           
        jwt.verify(token,secret);
        return true
        
        } catch(err){
         
            return false
            }


        }
        
    handleSocket(){
       io.getIo().on('connection',(socket)=>{
           console.log('connected');
        socket.on('currentState',async (data)=>{
                    
                    const currentState = await this.getDataOfSensors();
                 
                    this.lastState = currentState;
                    currentState.autoControl = this.autoControl;
                   
                    socket.emit('currentState',currentState);
                   
                   })
      
        socket.on('autoControl',async (data)=>{
            
             if(data.token === null) {
               const error='Need authorization';
               console.log(error);
               return
               }
               
           const tokenVerified = await this.verifyToken(data.token);
           
           if(!tokenVerified){
               const error = 'FALSIFIED TOKEN in autocontrol';
                console.log(error);
               return
               }
               else {
                    this.toggleAutoControl();
                    
            }
            });
            
         socket.on('changeCurrentState',async (data)=>{
           
           if(data.token === null) {
               const error='Need authorization';
               console.log(error);
               return
               }
               
           const tokenVerified = await this.verifyToken(data.token);
           
           if(!tokenVerified){
               const error = 'FALSIFIED TOKEN';
                console.log(error);
               return
               }
               else {
                    this.toggleAutoControl();
           
          
                 if(data.device.name === 'waterPump1'){
                  
                 data.device.state === true ? await relayModule.initWaterPump1() : await  relayModule.stopWaterPump1();
                    }
                if(data.device.name=== 'waterPump2'){
                    data.device.state === true ? await relayModule.initWaterPump2() : await relayModule.stopWaterPump2();
                   
                    }
                if(data.device.name=== 'airPump1'){
                   data.device.state === true ? await relayModule.initAirPump1() : await relayModule.stopAirPump1();
                  
                    }
                if(data.device.name === 'airPump2'){
                    data.device.state === true ? await relayModule.initAirPump2() : await relayModule.stopAirPump2();
                 
                    }
                    
                    const currentState = await this.getDataOfSensors();
                 
                    this.lastState = currentState;
                    currentState.autoControl = this.autoControl;
                   
                    socket.emit('currentState',currentState);
                   
                   }
            ;})
            
          
            
            })}
    

    emitCurrentState(state,socket){
        this.lastState = state;
        console.log(state);
        state.autoControl = this.autoControl;
        socket.emit('currentState',state);
        }
    
   
    
     async checkAndHandleConditionChanges() {
        let state = await  this.getDataOfSensors();
        const socket = io.getIo();
        this.lastState = state;
        
       
     
        const currentState = await this.getDataOfSensors();
        
        await this.checkIfHourTemp(currentState.temperature);
        await this.checkifAvgDayTemp();
   
       if(!this.autoControl) {
               return 
            }
         
        const currentTime = Date.now();
        if (currentTime - this.lastUpdate < 10000){
           // console.log('NOT CHECKING');return 
            return
        }
        
        if(dataSensor.waterLevel === null){
          //  console.log('No data from waterLvlSensor');
            return
            }
        
        if (this.lastUpdate === null){
           this.lastUpdate = currentTime;
         //   console.log('First condition check');
           
        }
        
        
      
        //WATER IS NOT DETECTED in  PUMPING TANK CONDITIONS
        //WATER IS NOT DETECTED in  PUMPING TANK CONDITIONS
        //WATER IS NOT DETECTED in  PUMPING TANK CONDITIONS
        //WATER IS NOT DETECTED in  PUMPING TANK CONDITIONS
        
          //waterLvl sensor does not detect water with fish Tank
            
         //no water lvl on fish tank;

// default setup with normal temp
 if (dataSensor.waterLevel === 0 && currentState.firstWaterPump ===  0 && currentState.secondWaterPump === 0  && currentState.firstAirPump === 0  && currentState.secondAirPump === 0 && currentState.temperature < critTemp) {
            await   relayModule.initializeSecondWaterPump();
            await  SmsMessage.sendMessage();
            this.lastUpdate = currentTime;
            
            state = await  this.getDataOfSensors();
            this.emitCurrentState(state,socket);
            return
        }

//second pumps ON// normal temp 
if (dataSensor.waterLevel === 0 && currentState.firstWaterPump ===  1 && currentState.secondWaterPump === 1  && currentState.firstAirPump === 0  && currentState.secondAirPump === 1 && currentState.temperature < critTemp) {
            await   relayModule.disconnectAllDevices();
            await   relayModule.initiliazeSecondaryAirPump();
            await  SmsMessage.sendMessage();
            this.lastUpdate = currentTime;
            state = await  this.getDataOfSensors();
            this.emitCurrentState(state,socket);
            return
        }
        
        
        
//default with high temp//
 if (dataSensor.waterLevel === 0 && currentState.firstWaterPump ===  0 && currentState.secondWaterPump === 0  && currentState.firstAirPump === 0  && currentState.secondAirPump === 0 && currentState.temperature > critTemp) {
            await   relayModule.initializeSecondaryPumps();
            await   relayModule.initializeFirstAirPump();
            await  SmsMessage.sendMessage();
            this.lastUpdate = currentTime;
            state = await  this.getDataOfSensors();
            this.emitCurrentState(state,socket);
            return
    }
        
//second water pump ON // temp high
if (dataSensor.waterLevel === 0 && currentState.firstWaterPump ===  1 && currentState.secondWaterPump === 1  && currentState.firstAirPump === 0  && currentState.secondAirPump === 0 && currentState.temperature > critTemp) {
            await   relayModule.initializeSecondWaterPump();
            await  SmsMessage.sendMessage();
            this.lastUpdate = currentTime;
            state = await  this.getDataOfSensors();
            this.emitCurrentState(state,socket);
            return
        }


    //primiary water pump ON // high temp// both air pumps
    
      if (dataSensor.waterLevel === 0 && currentState.firstWaterPump ===  0 && currentState.secondWaterPump === 0  && currentState.firstAirPump === 0  && currentState.secondAirPump === 1 && currentState.temperature > critTemp) {
            await   relayModule.initializeSecondWaterPump();
            await  SmsMessage.sendMessage();
            this.lastUpdate = currentTime;
            state = await  this.getDataOfSensors();
            this.emitCurrentState(state,socket);
            return
        }

    //on second pump with higher temp and both air pump on!!
  if (dataSensor.waterLevel === 0 && currentState.firstWaterPump ===  1 && currentState.secondWaterPump === 1  && currentState.firstAirPump === 0  && currentState.secondAirPump === 1 && currentState.temperature > critTemp) {
            await   relayModule.disconnectAllDevices();
            await   relayModule.initiliazeSecondaryAirPump();
            await  SmsMessage.sendMessage();
            this.lastUpdate = currentTime;
            state = await  this.getDataOfSensors();
            this.emitCurrentState(state,socket);
            return
        }

        
        
        
        
//isWater lvl on fish tank but temp is higher;
//isWater lvl on fish tank but temp is higher;
//isWater lvl on fish tank but temp is higher;
//isWater lvl on fish tank but temp is higher;
//isWater lvl on fish tank but temp is higher;
//isWater lvl on fish tank but temp is higher;

//on first pump
if (dataSensor.waterLevel === 1 && currentState.firstWaterPump ===  0 && currentState.secondWaterPump === 0  && currentState.firstAirPump === 0  && currentState.secondAirPump === 0 && currentState.temperature >critTemp) {
            await   relayModule.initiliazeSecondaryAirPump();
            await  SmsMessage.sendMessage();
            this.lastUpdate = currentTime;
            
            state = await  this.getDataOfSensors();
            this.emitCurrentState(state,socket);
            return
        }


//on second pump 
if (dataSensor.waterLevel === 1 && currentState.firstWaterPump ===  1 && currentState.secondWaterPump === 1  && currentState.firstAirPump === 0  && currentState.secondAirPump === 0 && currentState.temperature >critTemp) {
            await   relayModule.initiliazeSecondaryAirPump();
            
            await  SmsMessage.sendMessage();
            this.lastUpdate = currentTime;
            
            state = await  this.getDataOfSensors();
            this.emitCurrentState(state,socket);
            return
        }


// no water in pump tank
/*
if (dataSensor.waterLevelPumpTank === 0 && currentState.firstWaterPump ===  0 && currentState.secondWaterPump === 0  && currentState.firstAirPump === 0  && currentState.secondAirPump === 0 && currentState.temperature <critTemp) {
            await   relayModule.stopWaterPump1();
 	    await   relayModule.stopWaterPump2();
            await  SmsMessage.sendMessage();
            this.lastUpdate = currentTime;
            
            state = await  this.getDataOfSensors();
            this.emitCurrentState(state,socket);
            return
        }
        
        
         */
        state = await  this.getDataOfSensors();
            
            
        this.emitCurrentState(state,socket);
        
    }
}


module.exports = new proccessController();

