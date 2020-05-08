const Solution = require('../models/solution_model');

// @desc    Get all solutions
// @route   GET /api/v1/solutions
// @access  Public
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

// @desc    Add a solution
// @route   POST /api/v1/solutions
// @access  Public
exports.addSolution = async (req, res, next) => {
    try {
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

// @desc    Get a solution by id
// @route   GET /api/v1/solutions/:id
// @access  Public
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

// @desc    Delete a solution
// @route   DELETE /api/v1/solutions/:id
// @access  Public
exports.deleteSolution = async (req, res, next) => {
    try {

        const solution = await Solution.findById(req.params.id);

        if(!solution){
            return res.status(404).json({
                success: false,
                error: 'No solution found'
            });
        }

        await solution.remove();

        return res.status(200).json({
            success: true,
            data: solution
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc    Update a solution
// @route   PATCH /api/v1/solutions/:id
// @access  Public
exports.updateSolution = async (req, res, next) => {
    try {
        const solution = await Solution.findById(req.params.id);

        if(!solution){
            return res.status(404).json({
                success: false,
                error: 'No solution found'
            });
        }

        if(req.body.issue != null) {
            await Solution.findById(req.params.id).replaceOne({}, { 
                $set: { 
                    issue: req.body.issue
                } 
            });
        }

        if(req.body.tags != null) {
            await Solution.findById(req.params.id).replaceOne({}, { 
                $set: { 
                    tags: req.body.tags
                } 
            });
        }

        if(req.body.machine_tags != null) {
            await Solution.findById(req.params.id).replaceOne({}, { 
                $set: { 
                    machine_tags: req.body.machine_tags
                } 
            });
        }

        if(req.body.solutions != null) {
            await Solution.findById(req.params.id).replaceOne({}, { 
                $set: { 
                    solutions: req.body.solutions
                } 
            });
        }


        return res.status(200).json({
            success: true,
            data: solution
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}