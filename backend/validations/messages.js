const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

const validateMessageInput = [
  check('body')
    .exists({ checkFalsy: true })
    // .isLength({ min: 1, max: 140 })
    .withMessage('Sorry, message cannot be blank!'),
  handleValidationErrors
];

module.exports = validateMessageInput;