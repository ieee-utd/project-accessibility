'user strict';
var sql = require('../config/config');

//Task object constructor
var Ticket = function(ticket){
    this.solutionID = ticket.solutionID;
    this.user_info = ticket.user_info;
    this.created_at = new Date();
    this.resolved_at = ticket.resolved_at;
};

// @desc    Get all tickets
// @route   GET /api/v1/tickets
// @access  Public
Ticket.getAllTickets = function (result) {
    sql.query("Select * from tickets", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('tickets : ', res);  
            result(null, res);
        }
    });   
};

// @desc    Add a ticket
// @route   POST /api/v1/tickets
// @access  Public
Ticket.createTicket = function (newTicket, result) {    
    sql.query("INSERT INTO tickets set ?", newTicket, function (err, res) {    
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res);
            result(null, res);
        }
    });           
};

// @desc    Get a ticket by id
// @route   GET /api/v1/tickets/:id
// @access  Public
Ticket.getTicketById = function (id, result) {
sql.query("Select * from tickets where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        
        }
    });   
};

//TODO: Work on this
// @desc    Delete a ticket
// @route   DELETE /api/v1/tickets/:id
// @access  Public
Ticket.updateById = function(id, ticket, result){
    sql.query("UPDATE tickets SET ticket = ? WHERE id = ?", [ticket.ticket, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{   
            result(null, res);
        }
    }); 
};

//TODO: Work on this
// @desc    Delete a ticket
// @route   DELETE /api/v1/tickets/:id
// @access  Public
Ticket.remove = function(id, result){
    sql.query("DELETE FROM tickets WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Ticket;