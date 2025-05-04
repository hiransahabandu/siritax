const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbot');

// Route to handle chat messages
router.post('/message', chatbotController.handleMessage);

// Route to get chat history
router.get('/history', chatbotController.getChatHistory);

module.exports = router; 