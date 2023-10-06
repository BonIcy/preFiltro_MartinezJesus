const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const uri = process.env.DDBB256;
const nombreBase = 'api_academia';

async function updateData(collectionName, itemId, newData) {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(nombreBase);
    const collection = db.collection(collectionName);
    const filter = { _id: new ObjectId(itemId) };
    const update = { $set: newData };
    const result = await collection.updateOne(filter, update);
    if (result.matchedCount === 0) {
      throw new Error(`Elemento con ID ${itemId} no encontrado en ${collectionName}`);
    }

    return newData;
  } catch (error) {
    console.error(error.message);
    throw error;
  } finally {
    client.close();
  }
}

module.exports = {
  updateData
};
