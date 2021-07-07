const Gpio = require('onoff').Gpio;
const USED_GPIO = 17;

module.exports = class WaterLevelSensor {
    constructor() {
        this.sensor = new Gpio(USED_GPIO, 'in');
    }
    getWaterLevel() {
        const waterLevel = this.sensor.readSync();
        
        return waterLevel
      }
}
  

