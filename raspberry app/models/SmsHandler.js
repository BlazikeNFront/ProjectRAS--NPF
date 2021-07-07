const fetch = require('node-fetch');

//Privates
const phoneNumber  = require('../privates').phoneNumber
const APIKey  = require('../privates').APIKey
const password  = require('../privates').password





 class SmsHandler {
    constructor(url, params) {
       this.url = url;
       this.params = params;
        //params is an array with a model of "[[a,b],[a,b]]" where "a"  param name and "b"  is value for this param
      /// PHONE NUMBER
      this.query = this.createParamsQuery(this.url);
      this.sendMessage = this.sendMessage.bind(this);
    }
    
  
    createParamsQuery(url) {
        let query = url + '?';
        const receiverNumber = `to=${phoneNumber}`
        this.params.forEach(param => {
            query += param[0] + '=' + param[1] + '&';
        });
        query += receiverNumber;
        return query
    }

     async sendMessage() {
       try
       {
           const query = this.query;
           console.log('SMS sent');
           const data = await fetch(query)

       const dataJson = await data.json();
       
       } catch (err) {
           console.log(err)
           }
    }
}

module.exports =  new SmsHandler('https://api2.smsplanet.pl/sms', [['key', APIKey], ['password', password], ['from', 'TEST'], ['msg', 'KEKW'], ['test', 1]]);

//new SmsMessage('https://api2.smsplanet.pl/sms',[['key',APIKey],['password',password],['from','TEST'],['msg','testing_message'],['test',1]])
