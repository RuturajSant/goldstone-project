const json2csvParser = require('json2csv').Parser
const User = require('../models/User');
const exportUsers = async (req, res) => {
    try {
        const users = await User.find();
        let usersData = [];
        users.forEach(user => {
            const { id, name, email, gender, status } = user;
            usersData.push({ id, name, email, gender, status });
        });
        const csvFields = ['id', 'name', 'email', 'gender', 'status'];
        const csvParser = new json2csvParser({ csvFields });
        const csvData = csvParser.parse(usersData);

        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=users.csv');

        res.status(200).end(csvData);
    }
    catch (error) {
        console.error('Error exporting users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
module.exports = { exportUsers }