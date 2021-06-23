const { body } = require("express-validator");


const validate = [
    body("firstName").not().isEmpty().trim().escape().isLength({ min: 4, max: 10 }),
    body("surname").not().isEmpty().trim().escape().isLength({ min: 4, max: 10 }),

    body("email").isEmail().normalizeEmail(),
    body("password").exists().isLength({ min: 4, max: 10 }),

    body("date").exists(),
]
module.exports = validate