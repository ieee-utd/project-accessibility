'use strict';
var Ticket = require('../models/ticket_model');

// @desc    Get all tickets
// @route   GET /api/v1/tickets
// @access  Public
exports.getTickets = function(req, res) {
    Ticket.getAllTickets(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};

// @desc    Add a ticket
// @route   POST /api/v1/tickets
// @access  Public
exports.addTicket = function(req, res) {
    var new_ticket = new Ticket(req.body);

    //handles null error 
    if(!new_ticket.solutionID){
        res.status(400).send({ error:true, message: 'Please provide solutionID' });
    }
    if(!new_ticket.user_info){
        res.status(400).send({ error:true, message: 'Please provide user info' });
    }
    
    else{
        Ticket.createTicket(new_ticket, function(err, ticket) {
            if (err)
                res.send(err);
            console.log(new_ticket);
            res.json(ticket);
        });
    }
};

// @desc    Get a ticket by id
// @route   GET /api/v1/tickets/:id
// @access  Public
exports.getTicket = function(req, res) {
  Ticket.getTicketById(req.params.id, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

//TODO: Work on this
exports.updateTask = function(req, res) {
  Task.updateById(req.params.taskId, new Task(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

//TODO: Work on this
exports.deleteTask = function(req, res) {


  Task.remove( req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};