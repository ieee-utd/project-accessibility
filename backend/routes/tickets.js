const express = require('express');
const router = express.Router();
const { getTickets, addTicket, getTask , deleteTask , updateTask } = require('../controllers/ticket_contoller');

router
    .route('/')
    .get(getTickets)
    .post(addTicket);

router
    .route('/:id')
    .get(getTask)
    .delete(deleteTask)
    .patch(updateTask);
    
module.exports = router;