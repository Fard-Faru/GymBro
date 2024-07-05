const connection = require("../config/azureConfig");

const executeQuery = async (queryCallback) => {
  const pool = await connection;
  return queryCallback(pool);
};

module.exports = {
  query: executeQuery
};
