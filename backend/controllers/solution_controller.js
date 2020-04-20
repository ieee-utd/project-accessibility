const Solution = require('../models/solution_model');

exports.getSolutions = async (req, res, next) => {
    try {
        const solutions = await Solution.find();

        return res.status(200).json({
            success: true,
            count: solutions.length,
            data: solutions
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addSolution = async (req, res, next) => {
    try {
        const { issue, tags, machine_tags, solutions} = req.body;

        const solution = await Solution.create(req.body);

        return res.status(201).json({
            success: true,
            data: solution
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

exports.getSolution = async (req, res, next) => {
    try {
        const solution = await Solution.findById(req.params.id);
        return res.status(200).json({
            success: true,
            count: solution.length,
            data: solution
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}