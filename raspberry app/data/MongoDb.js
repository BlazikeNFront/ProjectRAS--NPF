const MongoDB = require('mongodb');
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
		try	{
		
			await mongoConnect();
			const db = getDb();
		const dbDoc  = getDateValues();
		
			
		 const dataFromDb = await db.collection('temperatureData').find().limit(24);
		const arrayOfTemps = await dataFromDb.toArray();
	
		const sumOfNumbers = arrayOfTemps.length;
		const avarageTemp  = arrayOfTemps.reduce((acc,elem)=> acc+=elem.temp,0)/24;
			
		dbDoc.temp = parseInt(avarageTemp)
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
        
async function checkForUpdateRequestsInDb(){
    try	{
        await mongoConnect();
        const db = getDb();
        
        
        
     
       

    }catch(err){console.log(err)}
    }







exports.checkForUpdateRequestsInDb = checkForUpdateRequestsInDb;
exports.tempChartMonth = tempChartMonth;
exports.tempChartWeek = tempChartWeek;
exports.tempChartDay = tempChartDay;
exports.insertDayAvgTemp = insertDayAvgTemp;
exports.insertHourTemp = insertHourTemp;
