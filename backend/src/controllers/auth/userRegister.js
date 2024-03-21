const bcrypt = require('bcrypt');
const registerUserValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email format '),
    body('password').isLength({ min: 6}).withMessage('Password must be 8 charachters long'),
];

async function registerUser(req, res){

    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }

    try{
        let { name, email, password } = req.body;
        name = name.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ');
        email = email.toLowerCase();
        const hash = await bcrypt.hash(password, 10);

        const user = new UserModel({
            name,
            email,
            password: hash
        });

        await user.save();
        return res.status(201).json({ message: `User Registration is Successful`});
    } catch(error) {
        return res.status(500).json({ message: `An error has occurred during user registration ${error}` });
    }

}

module.exports = { registerUser, registerUserValidation};