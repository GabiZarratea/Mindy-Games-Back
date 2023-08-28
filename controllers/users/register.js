import User from '../../models/User.js'

function generateVerificationCode() {
    const length = 6; 
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}

export default async (req, res, next) => {
    try {
        const verificationCode = generateVerificationCode();

        const newUser = await User.create({ ...req.body, verify_code: verificationCode });

        return res.status(201).json({ response: newUser, success: true, message: 'User created successfully' });
    } catch (error) {
        next(error);
}}
