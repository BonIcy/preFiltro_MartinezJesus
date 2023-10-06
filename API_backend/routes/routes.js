
const express = require('express');
require('dotenv').config();
const router = express.Router();
const { MongoClient } = require('mongodb');

const getData = require('../controllers/get');
const {postData} = require('../controllers/post');
const {deleteData} = require('../controllers/delete');
const {updateData} = require('../controllers/update');

const uri = process.env.DDBB256;
const nombreBase = 'api_academia';




router.get('/consumo', async (req, res) => {
    try {
        console.log('cruds');
    } catch (error) {
        console.log(error.message);
    }
})


//!get
router.get('/:collectionName', async (req, res) => {
    const {collectionName} = req.params
    try {
      const result = await getData(collectionName, {});
      res.json(result);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: `Error al obtener ${collectionName}`  });
    }
  });
  
//!post
router.post('/add/:collectionName', async (req, res) => {
    const { collectionName } = req.params;
    const data = req.body;
  
    try {
      const result = await postData(collectionName, data);
      res.status(201).json({result,data});
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: `Error al postear un elemento a ${collectionName}` });
    }
  });
  

//!delete
router.delete('/del/:collectionName/:itemId', async (req, res) => {
    const { collectionName, itemId } = req.params;
    try {
      const result = await deleteData(collectionName, itemId);
      res.json(result);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: `Error al deletear el elemento de ${collectionName}` });
    }
});

//!update
router.put('/upd/:collectionName/:itemId', async (req, res) => {
    const { collectionName, itemId } = req.params;
    const newData = req.body;
  
    try {
      const result = await updateData(collectionName, itemId, newData);
      res.json(result);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: `Error al actualizar el elemento de ${collectionName}` });
    }
  });
module.exports = router;