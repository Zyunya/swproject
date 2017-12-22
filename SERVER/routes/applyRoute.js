const express = require('express');

const router = express.Router();
const applyCtl = require('../controllers/applyController');

router.post('/api/apply' ,applyCtl.Apply);
router.get('/api/apply2' ,applyCtl.Apply2);


module.exports = router;