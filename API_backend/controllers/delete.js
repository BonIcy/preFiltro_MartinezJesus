const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const uri = process.env.DDBB256;
const nombreBase = 'api_academia';

async function deleteData(collectionName, itemId) {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(nombreBase);
    const collection = db.collection(collectionName);
    const result = await collection.findOneAndDelete({ _id: new ObjectId(itemId) });

    if (result.value) {
      return { message: `Elemento con ID ${itemId} no encontrado en ${collectionName}` };
    }
    else{
      return {message: `Elemento con ID ${itemId} eliminado correctamente`}
    }

    return result.value;
  } catch (error) {
    console.error(error.message);
    throw error;
  } finally {
    client.close();
  }
}
module.exports = {
  deleteData
};

