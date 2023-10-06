const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.DDBB256;
const nombreBase = 'api_academia'
async function getData(collectionName, query) {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(nombreBase);
    const collection = db.collection(collectionName);
    const result = await collection.find(query).toArray();
    return result;
  } catch (error) {
    console.error(error.message);
    throw error;
  } finally {
    client.close();
  }
}

module.exports = getData;
