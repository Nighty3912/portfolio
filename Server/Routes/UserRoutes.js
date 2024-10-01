const express=require("express");
const router=express.Router();
const userController= require('../Controllers/UserController');
const { check,validationResult} = require("express-validator");

router.post("/create",userController.createUser)
router.get("/",userController.start)
router.post("/calc",userController.calculation)
router.post("/findone",userController.findUserByName)
//router.get("/findone",userController.findUserByName)
router.post('/register', [
    check('userName')
        .notEmpty().withMessage("Username is required")
        .isLength({ min: 3 }).withMessage("Username should be at least 3 characters long"),
    check('firstName')
        .notEmpty().withMessage("First Name is required")
        .isLength({ min: 2 }).withMessage("First Name should be at least 2 characters long"),
    check('lastName')
        .notEmpty().withMessage("Last Name is required")
        .isLength({ min: 2 }).withMessage("Last Name should be at least 2 characters long"),
    check('phoneNumber')
        .optional()
        .matches(/^\+923\d{2}\d{7}$/).withMessage("Enter a valid Pakistani phone number (e.g., +92 3XX XXXXXXX)"),

    check('email')
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Enter a valid email address"),

    check('password')
        .notEmpty().withMessage("Password is required")
        .isLength({ min: 6 }).withMessage("Password should be at least 6 characters long"),

    check('confirmPassword')
        .notEmpty().withMessage("Confirm Password is required")
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("Passwords do not match");
            }
            return true;
        }),

        check('dateOfBirth')
        .notEmpty().withMessage("Date of Birth is required")
        .isISO8601().withMessage("Date of Birth must be a valid date"),
], userController.register);
router.get("/findall",userController.findAllUsers)
router.put("/users",userController.updateUser)
router.patch("/users",userController.updateUser)
router.delete("/users", userController.deleteUser);

module.exports=router;