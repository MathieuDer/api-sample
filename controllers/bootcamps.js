const Bootcamp = require('../models/Bootcamps');


// @desc    GET all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
    res
        .status(200)
        .json({ status: true, msg: 'Show all bootcamps' });
}

// @desc    GET single bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({ status: true, msg: `Show bootcamp ${req.params.id}` });
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  Private
exports.createBootcamp = async (req, res, next) => {

    const bootcamp = Bootcamp.create(req.body);

    res.status(201).json({
        success: true
    });
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({ status: true, msg: `Update bootcamp ${req.params.id}` });
}

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({ status: true, msg: `Delete bootcamp ${req.params.id}` });
}