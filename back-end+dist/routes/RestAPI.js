const express = require('express');

const APIController = require('../controllers/APIController.js');

const router = express.Router();

router.get('/data', APIController.getData)
router.get('/templast24h',APIController.tempChart24Hours);
router.get('/templastweek',APIController.tempChartWeek);
router.get('/templastmonth',APIController.tempChartWeek);
router.get('/requestLogData',APIController.requestLogData);

router.post('/raspberryPost',APIController.raspberryPost)
router.post('/requestsForRaspberry', APIController.requestsForRaspberry)
router.post('/requestResult',APIController.requestResult);
router.post('/login',APIController.adminAuth);



module.exports = router;
