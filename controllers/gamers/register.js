import Gamer from '../../models/Gamer.js'

export default async (req, res, next) => {
    try {
        const newGamer = await Gamer.create({ ...req.body });

        return res.status(201).json({ response: newGamer, success: true, message: 'Gamer created successfully' });
    } catch (error) {
        next(error);
}}
