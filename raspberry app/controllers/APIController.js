const bcrypt = require('bcryptjs');
const adminData =  require('../auth.js').readAdminData();
const tokenJWT = require('jsonwebtoken');
const processCOntroller = require('./processController.js');
const tempChartDay = require('../data/MongoDb.js').tempChartDay;
const tempChartWeek = require('../data/MongoDb.js').tempChartWeek;
const secret = require('../privates.js').secret;

exports.getData = (req, res, next) => {

    res.status(200).json({
        processCOntroller
    })
}

exports.adminAuth =async (req,res,next) => {
    
   try {
    const userName =  req.body.userName;
    const password = req.body.password;
    const passwordComparement =await  bcrypt.compare(password,adminData.hashedPassword);
  
    if(adminData.userName !== userName  ||  !passwordComparement ){
        const error = new Error('Incorrect username or password');
        error.statusCode = 401;
        throw error;
    
        }
    const token = await tokenJWT.sign(
        {token:'KEKW'},
        secret,
        {expiresIn:'1h'});
       
        
        res.status(200).json({token:token})
        
    } catch(err) {
        if(!err.statusCode){
            err.statusCode = 500;
            }
        next(err)
        }
    }
    
exports.tempChart24Hours = async(req,res,next) => {
        try {
        
            const data = await tempChartDay();
            
            res.status(200).json(data)
        
    } catch(err) {
        if(!err.statusCode){
            err.statusCode = 500;
            }
        next(err)
        }
    }
    
exports.tempChartWeek = async (req,res,next) => {
        try {
            
            const data = await tempChartWeek();
            
            res.status(200).json(data)
        
    } catch(err) {
        if(!err.statusCode){
            err.statusCode = 500;
            }
        next(err)
        }
    }
    
        
        









