const express = require('express');
const router = express.Router();
const { getTickets, addTicket, getTicket , deleteTask , updateTask } = require('../controllers/ticket_contoller');

router
    .route('/')
    .get(getTickets)
    .post(addTicket);

router
    .route('/:id')
    .get(getTicket)
    .delete(deleteTask)
    .patch(updateTask);
    
module.exports = router;