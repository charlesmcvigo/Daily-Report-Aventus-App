const express = require('express');
const router = express.Router();
const dailyReportController = require('../controllers/daily_report.controller');
const {requireAuth} = require('../middlewares/auth.middleware.js');

router.post('/daily-reports', requireAuth, dailyReportController.createDailyReport);
router.get('/daily-reports', requireAuth, dailyReportController.getAllDailyReports);
router.get('/daily-reports/:id', requireAuth, dailyReportController.getDailyReportsById);
router.put('/daily-reports/:id', requireAuth, dailyReportController.updateDailyReport);
router.delete('/daily-reports/:id', requireAuth, dailyReportController.deleteDailyReport);

module.exports = router;