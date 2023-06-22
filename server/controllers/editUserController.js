const User = require('../models/User');

const editUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, gender, status } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, email, gender, status },
            { new: true }
        );
        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
module.exports = {
    editUser
}