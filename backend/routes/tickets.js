const express = require('express');
const router = express.Router();
const { getTickets, addTicket, getTicket , deleteTicket , updateTicket } = require('../controllers/ticket_contoller');

router
    .route('/')
    .get(getTickets)
    .post(addTicket);

router
    .route('/:id')
    .get(getTicket)
    .delete(deleteTicket)
    .patch(updateTicket);
    
module.exports = router;