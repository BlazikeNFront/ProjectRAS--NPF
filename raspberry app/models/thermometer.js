const TEMP_SENSOR = require('ds18b20-raspi'); // thermometer sensor(default 4GPIO on raspberry) for more info check out docs on npm



module.exports = class Thermometer {
    constructor() {
        this.sensor = TEMP_SENSOR;
        this.temperature = null;
      this.readTemp = this.readTemp.bind(this);
       
    }
  readTemp(cb) {
    this.sensor.readSimpleC((err, temp) => {
      if (err) {
         console.log(err)
      }
      else {
        this.temperature = temp;
        cb(temp)
      }
     })
   }

}


