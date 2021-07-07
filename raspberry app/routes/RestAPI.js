const express = require('express');

const APIController = require('../controllers/APIController.js');

const router = express.Router();

router.get('/data',APIController.getData)
router.post('/login',APIController.adminAuth);
router.get('/templast24h',APIController.tempChart24Hours);
router.get('/templastweek',APIController.tempChartWeek);
router.get('/templastmonth',APIController.tempChartWeek);
router.get('*',APIController.getData)


module.exports = router;
