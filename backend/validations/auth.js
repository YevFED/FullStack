import { body } from "express-validator";

const registerValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 5, max: 18 }),
  body("username").isLength({ min: 3, max: 15 }),
];
