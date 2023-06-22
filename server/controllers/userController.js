const axios = require('axios');
const User = require('../models/User');

// Fetch data from external API and save in users table
const fetchAndSaveUsers = async (req, res) => {
    try {
        const response = await axios.get('https://gorest.co.in/public/v2/users',
            {
                headers: {
                    Authorization: 'Bearer ' + process.env.API_KEY
                }
            });
        const users = response.data;

        // Save each user in the database
        for (const user of users) {
            // const u = await User.findById(user.id)
            // if (u !== undefined || u === null) {
            //     continue
            // } else {
            // }
            await User.create(user);
        }

        res.status(200).json({ message: 'Users saved successfully!' });
    } catch (error) {
        console.error('Error fetching and saving users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    fetchAndSaveUsers,
};
