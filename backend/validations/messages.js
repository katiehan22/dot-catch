const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

const validateMessageInput = [
  check('body')
    .exists({ checkFalsy: true })
    // .not().isEmpty({ ignore_whitespace: true })
    .withMessage('Sorry, message cannot be blank!'),
  handleValidationErrors
];

module.exports = validateMessageInput;