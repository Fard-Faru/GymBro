const db = require('../database/azure'); 
const sql = require('mssql'); // For sql object types
const bcrypt = require('bcrypt'); // For encrypt passwords

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

exports.postSignup =  async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  try {
    // Check if user exists
    const userResult = await db.query(pool => 
      pool.request()
        .input('username', sql.NVarChar, username)
        .query('SELECT * FROM GymBroDB.dbo.Users WHERE username = @username')
    );

    if (userResult.recordset.length > 0) {
      return res.status(200).send('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Regsiter when user doesnt exist
    const registerResult = await db.query(pool => 
      pool.request()
          .input('username', sql.NVarChar, username)
          .input('password', sql.NVarChar, hashedPassword)
          .query('INSERT INTO GymBroDB.dbo.Users (uid, username, password) VALUES (NEWID(), @username, @password)')
    );
    res.status(201).send({ message: 'User registered successfully', result: registerResult });
  } catch (err) {
    console.error('Error processing request:', err);
    res.status(500).send('Error processing request');
  }
};

exports.postLogin = async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  
  try {
    // Check if user exists
    const userResult = await db.query(pool => 
      pool.request()
        .input('username', sql.NVarChar, username)
        .query('SELECT * FROM GymBroDB.dbo.Users WHERE username = @username')
    );

    if (userResult.recordset.length === 0) {
      return res.status(404).send('User not found');
    }

    const user = userResult.recordset[0];

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send('Invalid credentials');
    }

    res.status(200).send({ message: 'Login successful', uid: user.uid });

  } catch (err) {
    console.error('Error processing request:', err);
    res.status(500).send('Error processing request');
  }

};
