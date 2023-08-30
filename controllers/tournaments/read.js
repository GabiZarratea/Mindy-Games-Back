import Tournament from '../../models/Tournament.js'

export default async (req, res) => {
    try {
        const tournaments = await Tournament.find();
        res.status(200).json(tournaments);
    } catch (error) {
        res.status(500).json({ error: 'Error getting tournaments' });
    }
};