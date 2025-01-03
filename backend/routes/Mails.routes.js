

// backend/routes/mails.routes.js
const express = require('express');
const { addSubscription } = require('../../controllers/subscrption.controller');

const router = express.Router();

router.post('/', addSubscription);

module.exports = router;