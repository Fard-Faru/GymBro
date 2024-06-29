const db = require('../database/azure');

exports.getData = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM GymBroDB.dbo.Customers');
    res.json(result.recordset); 
  } catch (err) {
    console.error('Query error: ', err);
    res.status(500).send('Query error');
  }
};

exports.getUserWeight = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM GymBroDB.dbo.TrackWeight');
    res.json(result.recordset); 
  } catch (err) {
    console.error('Query error: ', err);
    res.status(500).send('Query error');
  }
};