'use strict';
var Ticket = require('../models/ticket_model');

exports.getTickets = function(req, res) {
    Ticket.getAllTickets(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};



exports.addTicket = function(req, res) {
    var new_ticket = new Task(req.body);

    //handles null error 
    if(!new_ticket.task || !new_ticket.status){
        res.status(400).send({ error:true, message: 'Please provide all info' });
    }
    
    else{
        Task.createTicket(new_ticket, function(err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    }
};


exports.getTask = function(req, res) {
  Task.getTaskById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.updateTask = function(req, res) {
  Task.updateById(req.params.taskId, new Task(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.deleteTask = function(req, res) {


  Task.remove( req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};