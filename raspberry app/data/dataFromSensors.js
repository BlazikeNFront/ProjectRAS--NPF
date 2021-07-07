const WaterLevelSensor = require('../models/waterLevelSensor.js')
const Thermometer = require('../models/thermometer.js');




const waterSensor = new WaterLevelSensor();
const tempSensor = new Thermometer();


 class dataFromSensors {
    constructor(){
   this.data = { 
       waterLevel: null,
       temperature: null,
    }
    
    const updateInterval = setInterval(() => {
    this.updateTemperature();
    this.updateWaterLevel();
    
    }, 5000)
    }
    
    
    async updateTemperature() {
    
    try {
        await tempSensor.readTemp((temp) => {this.data.temperature = temp});
       
    }
   catch (err){
       console.log(err)
    }
  }
    
    async updateWaterLevel() {
    
    try {
        const result = await waterSensor.getWaterLevel();
        this.data.waterLevel = result
    }
    catch (err) {
        console.log(err)
    }
    }
  } 
  
module.exports = new dataFromSensors(); 



