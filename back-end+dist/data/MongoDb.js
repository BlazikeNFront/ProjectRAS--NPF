const MongoDB = require('mongodb');
const bcrypt = require('bcryptjs');
const MongoClient = MongoDB.MongoClient;
const mongoUrl= require('../privates.js').mongoUrl;
const getDateValues = require('../util/getCurrentDateValues.js');


let _db;

const mongoConnect = async  () => {
    try {
        const Mongo = await MongoClient.connect(mongoUrl,{ useUnifiedTopology: true })
        _db = Mongo.db();
        return
    }
    catch(err){console.log(err)}
} 



const getDb =  () => {
    if (_db) {
        return _db
    }
    else {
        const error = 'There is no connection with DataBase'
        throw new Error(error)
        }
}


async function tempChartDay(){
    try {
        await mongoConnect()
        const db = getDb();
        const data = await db.collection('temperatureData').find().sort({$natural:-1}).limit(24);
        const tempValues =  await data.toArray();
        const tempValuesRevers = tempValues.reverse();
        return tempValuesRevers
    }
    catch(err){err =>console.log(err)}
}

async function tempChartWeek(){
    try {
        await mongoConnect()
        const db = getDb();
        const data = await db.collection('avarageDayTemp').find().sort({$natural:-1}).limit(7);
        const tempValues =  await data.toArray();
        const tempValuesRevers = tempValues.reverse();
        return tempValuesRevers; 
    }
    catch(err){err =>console.log(err)}
}
async function tempChartMonth(){
    try {
        await mongoConnect()
        const db = getDb();
        const data = await db.collection('avarageDayTemp').find().sort({$natural:-1}).limit(30);
        const tempValues =  await data.toArray();
        const tempValuesRevers = tempValues.reverse();
        return tempValuesRevers; 
    }
    catch(err){err =>console.log(err)}
}
async function insertDayAvgTemp(){
	try{
		await mongoConnect();
		const db = getDb();
		const dbDoc  = getDateValues();
		const dataFromDb = await db.collection('temperatureData').find().limit(24);
		const arrayOfTemps = await dataFromDb.toArray();
		const sumOfNumbers = arrayOfTemps.length;
		const avarageTemp  = arrayOfTemps.reduce((acc,elem)=> acc+=elem.temp,0)/sumOfNumbers;
        dbDoc.temp = parseInt(avarageTemp);
		await db.collection('avarageDayTemp').insertOne(dbDoc); 
		}catch(err){console.log(err)}
		}
        
async function insertHourTemp(temp){
	try	{
		await mongoConnect();
		const db = getDb();
		const dbDoc  = getDateValues();
		dbDoc.temp = parseInt(temp)
        console.log(dbDoc);
		await db.collection('temperatureData').insertOne(dbDoc); 
		}catch(err){console.log(err)}
}

 





const insertRequestResultInDb =async (payload) => {
    try {
        await mongoConnect()
        const db = getDb();
        const data = await db.collection('stateChangeRequest').insertOne(payload);
        if (!data.insertedId) {
            const error = new Error('Db side Error')
            error.status = 500;
            throw error
      }
       return data.insertedId
    }
    catch(err){err =>console.log(err)}
}


async function requestLogData(){
    try {
        await mongoConnect()
        const db = getDb();
        const data = await db.collection('stateChangeRequest').find().sort({$natural:-1}).limit(10);
        const requestLogArray =  await data.toArray();
        const logArrayReversed = requestLogArray
        return logArrayReversed; 
    }
    catch(err){err =>console.log(err)}
}

async function checkUserInDb(username,password){
    
    try {
        await mongoConnect()
        const db = getDb();
        const user = await db.collection('users').findOne({ username: username })
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (username === user.userName || !passwordMatch) {
            return false
        }
        return true
    }
    catch(err){err =>console.log(err)}
}



exports.tempChartMonth = tempChartMonth;
exports.tempChartWeek = tempChartWeek;
exports.tempChartDay = tempChartDay;
exports.requestLogData = requestLogData;
exports.insertDayAvgTemp = insertDayAvgTemp;
exports.insertHourTemp = insertHourTemp;
exports.insertRequestResultInDb = insertRequestResultInDb;
exports.checkUserInDb = checkUserInDb;
