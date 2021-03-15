const bcrypt = require('bcryptjs');
const tokenJWT = require('jsonwebtoken');
const tempChartDay = require('../data/MongoDb.js').tempChartDay;
const tempChartWeek = require('../data/MongoDb.js').tempChartWeek;
const requestLogData = require('../data/MongoDb.js').requestLogData;
const checkUserInDb = require('../data/MongoDb.js').checkUserInDb;
const secret = require('../privates.js').secret;
const mirrorController = require('../models/ProcessController.js')
const insertRequestResultInDb = require('../data/MongoDb.js').insertRequestResultInDb;

exports.getData = async (req, res, next) => {
    try {
        const data = mirrorController.getControllerState()
        res.status(200).send(JSON.stringify(data))
    } catch (err) {
      console.log(err)
      res.status(500).send(err)
    }

}
exports.requestsForRaspberry = async (req, res) => {
    try {
        const raspbarryName = req.body.userName;
        const raspberryPassword = req.body.password;
        const userDataMatch = await checkUserInDb(raspbarryName, raspberryPassword)
        if (!userDataMatch) {
            throw new Error('Incorrect username or password')
        }
        if (mirrorController.currentRequest.requested === false) {
            res.status(200).send([])
            return
        }
        else if (mirrorController.currentRequest.requested === true) {
            const changes = {};
            if (mirrorController.autoControl !== mirrorController.currentRequest.autoControl) {
                changes.autoControl= [mirrorController.autoControl, mirrorController.currentRequest.autoControl]
            }
            for (let pump in mirrorController.pumps) {
                if (mirrorController.pumps[pump] !== mirrorController.currentRequest[pump]) {
                    changes[pump] = [mirrorController.pumps[pump], mirrorController.currentRequest[pump]]
                }
            }
        const date = new Date()
        const hoursGMT1 = date.getHours() + 1;
        date.setHours(hoursGMT1)
        const correctedDate = date.toUTCString()
        const payload = { ...mirrorController.currentRequest }
        payload.changes = changes
        payload.date = correctedDate
        res.status(200).send(JSON.stringify([payload]))
        mirrorController.currentRequest.requested = false;
        return
        }
        const payload = {
            request:false
        }
        res.status(200).send(JSON.stringify(payload))
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}
exports.requestResult =async (req, res) => {
    try {
        const payload = req.body
        const raspbarryName = payload.userName;
        const raspberryPassword = payload.password;
        const userDataMatch = await checkUserInDb(raspbarryName, raspberryPassword)
        if (!userDataMatch) {
            throw new Error('Incorrect username or password')
        }
        mirrorController.setMirrorControllerState(payload)
        const {date,changes, result} = payload
        const payloadForDb = {
            date,
            changes,
            result
        }
       insertRequestResultInDb(payloadForDb);
   }
   catch (err) {
       console.log(err)
       res.status(200).send();
    }
}

exports.raspberryPost = async (req, res) => {
    try {
        const payload = req.body;
        const raspbarryName = payload.userName;
        const raspberryPassword = payload.password;
        const userDataMatch =await checkUserInDb(raspbarryName,raspberryPassword)
        if (!userDataMatch) {
            throw new Error('Incorrect username or password')
        }
        mirrorController.setState(payload.state)
        res.status(200).send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}

exports.adminAuth =async (req,res,next) => {
        try {
            const userName =  req.body.userName;
            const password = req.body.password;
            const userDataMatch = await checkUserInDb(userName, password)
            
            if (!userDataMatch) {
            throw new Error('Incorrect username or password')
        }
            const token = await tokenJWT.sign(
                {user:userName},
                secret,
                { expiresIn: '1h' });
        res.status(200).json({token:token})
   }
   catch (err) {
    console.log(err)
     res.status(400).send(err)
     }
    
    }
    
exports.tempChart24Hours = async(req,res,next) => {
        try {
            const data = await tempChartDay();
            res.status(200).json(data)
        } catch (err) {
            console.log(err)
        }
    }
    
exports.tempChartWeek = async (req,res,next) => {
    try {
        const data = await tempChartWeek();
        res.status(200).json(data)
        } catch (err) {
            console.log(err)
        }
}

exports.requestLogData = async (req,res,next) => {
    try {
        const data = await requestLogData();
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
        const errorMessage = "SERVER SIDE ERROR"
        res.status(500).json({errorMessage})
    }
}


    
        
        









