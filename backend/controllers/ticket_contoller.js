const Ticket = require('../models/ticket_model');

// @desc    Get all ticket
// @route   GET /api/v1/tickets
// @access  Public
exports.getTickets = async (req, res, next) => {
    try {
        const tickets = await Ticket.find();

        return res.status(200).json({
            success: true,
            count: tickets.length,
            data: tickets
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc    Add a ticket
// @route   POST /api/v1/tickets
// @access  Public
exports.addTicket = async (req, res, next) => {
    try {
        const ticket = await Ticket.create(req.body);

        return res.status(201).json({
            success: true,
            data: ticket
        });
    } catch (error) {
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
        
            return res.status(400).json({
                success: false,
                error: messages
            });

        } 
        
        else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
    
}

// @desc    Get a ticket by id
// @route   GET /api/v1/tickets/:id
// @access  Public
exports.getTicket = async (req, res, next) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        return res.status(200).json({
            success: true,
            count: ticket.length,
            data: ticket
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc    Delete a ticket
// @route   DELETE /api/v1/tickets/:id
// @access  Public
exports.deleteTicket = async (req, res, next) => {
    try {

        const ticket = await Ticket.findById(req.params.id);

        if(!ticket){
            return res.status(404).json({
                success: false,
                error: 'No ticket found'
            });
        }

        await ticket.remove();

        return res.status(200).json({
            success: true,
            data: ticket
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc    Update a ticket
// @route   PATCH /api/v1/tickets/:id
// @access  Public
exports.updateTicket = async (req, res, next) => {
    try {
        const ticket = await Ticket.findById(req.params.id);

        if(!ticket){
            return res.status(404).json({
                success: false,
                error: 'No tickets found'
            });
        }

        if(req.body.solutionTried != null) {
            await Ticket.findById(req.params.id).replaceOne({}, { 
                $set: { 
                    solutionTried: req.body.solutionTried
                } 
            });
        }

        if(req.body.userInfo != null) {
            await Ticket.findById(req.params.id).replaceOne({}, { 
                $set: { 
                    userInfo: req.body.userInfo
                } 
            });
        }

        if(req.body.dateAdded != null) {
            await Ticket.findById(req.params.id).replaceOne({}, { 
                $set: { 
                    dateAdded: req.body.dateAdded
                } 
            });
        }

        if(req.body.dateClosed != null) {
            await Ticket.findById(req.params.id).replaceOne({}, { 
                $set: { 
                    dateClosed: req.body.dateClosed
                } 
            });
        }


        return res.status(200).json({
            success: true,
            data: ticket
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}