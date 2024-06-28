const connection = require("../config/azureConfig");

const executeQuery = async (query) => {
    const pool = await connection;
    return pool.request().query(query);
  };

module.exports = {
    query: executeQuery
};
