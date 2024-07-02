const db = require('../database/azure'); // Adjust the path as necessary
const sql = require('mssql'); // Import the sql object for types

exports.getData = async (req, res) => {
  try {
    const result = await db.query(pool => pool.request().query('SELECT * FROM GymBroDB.dbo.Customers'));
    res.json(result.recordset); 
  } catch (err) {
    console.error('Query error: ', err);
    res.status(500).send('Query error');
  }
};

exports.getUserWeight = async (req, res) => {
  try {
    const result = await db.query(pool => pool.request().query('SELECT * FROM GymBroDB.dbo.TrackWeight'));
    res.json(result.recordset); 
  } catch (err) {
    console.error('Query error: ', err);
    res.status(500).send('Query error');
  }
};

exports.postWeight = async (req, res) => {
  const { weight, recordedOn } = req.body;
  const uid = null; 

  if (!weight || !recordedOn) {
    return res.status(400).send('Bad Request: weight and recordedOn are required.');
  }

  try {
    // Merge Query for Overlapping Dates
    const query = `
      MERGE INTO GymBroDB.dbo.TrackWeight AS target
      USING (VALUES (@uid, @weight, @recordedOn)) AS source (uid, weight, recordedOn)
      ON target.recordedOn = source.recordedOn
      WHEN MATCHED THEN 
        UPDATE SET 
          target.weight = source.weight
      WHEN NOT MATCHED THEN 
        INSERT (uid, weight, recordedOn)
        VALUES (source.uid, source.weight, source.recordedOn);
    `;

    const result = await db.query(pool => 
      pool.request()
        .input('uid', sql.NVarChar, uid)
        .input('weight', sql.Decimal, weight)
        .input('recordedOn', sql.Date, recordedOn)
        .query(query)
    );

    res.status(200).send({ message: 'Data inserted or updated successfully', result });
  } catch (err) {
    console.error('Error inserting or updating data:', err);
    res.status(500).send('Error inserting or updating data');
  }
};
