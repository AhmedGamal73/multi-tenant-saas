const { MongoClient } = require("mongodb");

async function connectedToDb(tenant) {
  const uri = `mongodb://localhost:27017/${tenant}_db`;
  const client = new MongoClient(uri, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log(`Connected to ${tenant} database`);
    return client.db();
  } catch (err) {
    console.log(err);
  }
}

module.exports = { connectedToDb };
