const { validationResult, body } = require('express-validator');

const loginUserValidation = [
    body('email').notEmpty().withMessage('Email is required'),
    body('password').notEmpty().withMessage('Password is required'),
];

  function loginUser(req, res, next){
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ isError: errors.array() })
    }

    passport.authenticate('local', (err, user, info) => {
        if (err){
            return res.status(500).json({ isError: "An Error occurred during login", err})
        }
        if (!user){
            return res.json({ isError: info.isError });
        }

        req.login(user, (loginErr) => {
            if (loginErr) {
                return next(loginErr);
            }
            req.session.userID = user._id;
            req.session.userName = user.name;
            return res.status(200).json({ message: "Login Successful"});
        })
    })(req, res, next);
  }

  module.exports = { loginUser, loginUserValidation};
  