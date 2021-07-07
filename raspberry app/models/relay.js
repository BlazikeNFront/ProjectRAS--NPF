const Gpio = require('onoff').Gpio;
//this is programmed for 4 channel relay module
const RELAY_1_GPIO = 6; // WATER PUMP 1
const RELAY_2_GPIO = 13; // WATER PUMP 2
const RELAY_3_GPIO = 19; // AIR PUMP 1
const RELAY_4_GPIO = 26; // AIR PUMP 2
const NAME_OF_WATER_PUMP_1 = 'waterPump1';// change variables names
const NAME_OF_WATER_PUMP_2 ='waterPump2'
const NAME_OF_AIR_PUMP_1 = 'airPump1';
const NAME_OF_AIR_PUMP_2 = 'airPump2';
    
     
 class RelayModule {
    constructor() {
        this.initializeDefaultSetup = this.initializeDefaultSetup.bind(this);
        this.initializeSecondWaterPump = this.initializeSecondWaterPump.bind(this);
        this.initializeSecondAirPump = this.initializeSecondAirPump.bind(this);
        this.initializeSecondaryPumps = this.initializeSecondaryPumps.bind(this);
        this.readSyncOfFirstWaterPump = this.readSyncOfFirstWaterPump.bind(this);
        this.readSyncOfSecondaryWaterPump = this.readSyncOfSecondaryWaterPump.bind(this);
        this.readSyncOfFirstAirPump = this.readSyncOfFirstAirPump.bind(this);
        this.readSyncOfSecondaryAirPump = this.readSyncOfSecondaryAirPump.bind(this);
        this.initiliazeSecondaryAirPump = this.initiliazeSecondaryAirPump.bind(this);
        this.initializeFirstAirPump = this.initializeFirstAirPump.bind(this);
        this.disconnectAllDevices = this.disconnectAllDevices.bind(this);
        this.stopWaterPump1 = this.stopWaterPump1.bind(this);
        this.stopWaterPump2 = this.stopWaterPump2.bind(this);
        this.initWaterPump1 = this.initWaterPump1.bind(this);
        this.initWaterPump2 = this.initWaterPump2.bind(this);
        this.initAirPump1 = this.initAirPump1.bind(this);
        this.initAirPump2 = this.initAirPump2.bind(this);
        this.stopAirPump1 = this.stopAirPump1.bind(this);
        this.stopAirPump2 = this.stopAirPump2.bind(this);
        this.pumps = [];
        this.initAllDevices();
    }

// typeOfInput = in,out or both - check DOCS of 'onoff' module;
   async initDevice( name,usedGpio, typeOfInput, sync) {
   
        const device = {};
         device[name] = await new Gpio(usedGpio, typeOfInput);
         await device[name].writeSync(sync);
         
         this.pumps.push(device)
        
     }
     
 async initAllDevices() {
     this.initDevice(NAME_OF_WATER_PUMP_1, RELAY_1_GPIO, 'out', 0);
     this.initDevice(NAME_OF_WATER_PUMP_2, RELAY_2_GPIO, 'out', 0);
     this.initDevice(NAME_OF_AIR_PUMP_1, RELAY_3_GPIO, 'out', 0);
     this.initDevice(NAME_OF_AIR_PUMP_2, RELAY_4_GPIO, 'out', 0);
     }
  async disconnectAllDevices(){
    await this.stopWaterPump1();
    await this.stopWaterPump2();
    await this.stopAirPump1();
    await this.stopAirPump2();

    }
     
    initWaterPump1(){
     
       this.pumps[0][NAME_OF_WATER_PUMP_1].writeSync(0);
        }
        
    stopWaterPump1(){
          
        this.pumps[0][NAME_OF_WATER_PUMP_1].writeSync(1);
        }
        
    initWaterPump2(){
        this.pumps[1][NAME_OF_WATER_PUMP_2].writeSync(1);
        }
        
    stopWaterPump2(){
        this.pumps[1][NAME_OF_WATER_PUMP_2].writeSync(0);
        }
        
    initAirPump1(){
        this.pumps[2][NAME_OF_AIR_PUMP_1].writeSync(0);
        }
        
    stopAirPump1(){
        this.pumps[2][NAME_OF_AIR_PUMP_1].writeSync(1);
        }
        
    initAirPump2(){
        this.pumps[3][NAME_OF_AIR_PUMP_2].writeSync(1);
        }
        
    stopAirPump2(){
        this.pumps[3][NAME_OF_AIR_PUMP_2].writeSync(0);
        }
        
    diconnectBothWaterPumps() {
        this.pumps[0][NAME_OF_WATER_PUMP_1].writeSync(1);
        this.pumps[1][NAME_OF_WATER_PUMP_2].writeSync(0);
    }
    
    initializeDefaultSetup() {
        this.pumps[0][NAME_OF_WATER_PUMP_1].writeSync(1);
        this.pumps[1][NAME_OF_WATER_PUMP_2].writeSync(0);
        this.pumps[2][NAME_OF_AIR_PUMP_1].writeSync(1);
        this.pumps[3][NAME_OF_AIR_PUMP_2].writeSync(0);
    }
    initializeSecondWaterPump() {
        this.pumps[0][NAME_OF_WATER_PUMP_1].writeSync(1);
        this.pumps[1][NAME_OF_WATER_PUMP_2].writeSync(1);
    }
    
     initializeFirstAirPump() {
        this.pumps[2][NAME_OF_AIR_PUMP_1].writeSync(0);
        this.pumps[3][NAME_OF_AIR_PUMP_2].writeSync(0);
    }
    
    initializeSecondAirPump() {
        this.pumps[2][NAME_OF_AIR_PUMP_1].writeSync(1);
        this.pumps[3][NAME_OF_AIR_PUMP_2].writeSync(1);
    }
    initializeSecondaryPumps() {
     
        this.initializeSecondWaterPump();
        this.initializeSecondAirPump();
    }
    
    initiliazeSecondaryAirPump(){
        this.pumps[2][NAME_OF_AIR_PUMP_1].writeSync(0);
        this.pumps[3][NAME_OF_AIR_PUMP_2].writeSync(1);
        }
    
   async readSyncOfFirstWaterPump(){
        return await this.pumps[0][NAME_OF_WATER_PUMP_1].readSync();
        }
        
    async readSyncOfSecondaryWaterPump(){
        return await this.pumps[1][NAME_OF_WATER_PUMP_2].readSync();
        }
        
    async readSyncOfFirstAirPump(){
        return await this.pumps[2][NAME_OF_AIR_PUMP_1].readSync();
        }
    async readSyncOfSecondaryAirPump(){
        return await this.pumps[3][NAME_OF_AIR_PUMP_2].readSync();
        }
   
    
    //OPTIONAL
    //oxygenLvL is low with primiary air pump ON--- send sms, init secondary air pump;
    
    
}
module.exports = new RelayModule();
