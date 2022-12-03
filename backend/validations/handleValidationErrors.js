const { validationResult } = require("express-validator");

const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);
    console.log('body is this', req.body)
    if (!validationErrors.isEmpty()) {
        const errorFormatter = ({ msg }) => msg;
        const errors = validationErrors.formatWith(errorFormatter).mapped();

        const err = Error("Validation Error");
        err.errors = errors;
        err.statusCode = 400;
        err.title = "Validation Error";
        next(err);
    }
    next();
};

module.exports = handleValidationErrors;