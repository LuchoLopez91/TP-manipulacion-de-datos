const { check } = require("express-validator");

module.exports = [
    check("title").notEmpty().withMessage("Title requerido"),
    check("rating").notEmpty().withMessage("Rating requerido"),
    check("awards").notEmpty().withMessage("Awards requerido"),
    check("release_date").notEmpty().withMessage("Release date requerido"),
];