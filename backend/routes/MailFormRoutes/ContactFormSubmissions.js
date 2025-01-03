

const express = require('express');
const { contactFormSubmissions } = require('../../controllers/mails.controllers');

const router = express.Router();

router.post('/submissions', contactFormSubmissions); 

module.exports = router;
