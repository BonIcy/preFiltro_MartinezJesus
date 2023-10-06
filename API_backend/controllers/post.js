const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.DDBB256;
const nombreBase = 'api_academia';

async function postData(collectionName, data) {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(nombreBase);
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(data);
    return result
  } catch (error) {
    console.error(error.message);
    throw error;
  } finally {
    client.close();
  }
}

module.exports = {
  postData
};
