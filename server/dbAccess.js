"use strict";
const MongoClient = require("mongodb").MongoClient;
const pwd = encodeURIComponent(process.env.DB_PWD);
const url = process.env.DB_PRECONNECTSTRING + pwd + process.env.DB_SUFCONNECTSTRING;
const dbName = process.env.DB_NAME;
// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect(url);

class DBAccess {
  async GetOneAsync(collectionName, filter) {
    let client;

    try {
      client = await MongoClient.connect(url, { useNewUrlParser: true });
      let db = client.db(dbName);
      let result = await db.collection(collectionName).findOne(filter);
      return result;
    } catch (err) {
      console.error(err);
    } finally {
      if (client) {
        client.close();
      }
    }
  }

  async GetManyAsync(collectionName, filter) {
    let client;

    try {
      client = await MongoClient.connect(url, { useNewUrlParser: true });
      let db = client.db(dbName);
      return await db
        .collection(collectionName)
        .find({})
        .filter(filter)
        .toArray();
    } catch (err) {
      console.error(err);
    } finally {
      if (client) {
        client.close();
      }
    }
  }

  async GetAllAsync(collectionName) {
    let client;
    try {
      client = await MongoClient.connect(url, { useNewUrlParser: true });
      let db = client.db(dbName);
      return await db
        .collection(collectionName)
        .find()
        .toArray();
    } catch (err) {
      console.error(err);
    } finally {
      if (client) {
        client.close();
      }
    }
  }

  async AddNewAsync(collectionName, data) {
    let client;

    try {
      client = await MongoClient.connect(url, { useNewUrlParser: true });
      let db = client.db(dbName);
      let result = await db.collection(collectionName).insertOne(data);
      return result;
    } catch (err) {
      console.error(err);
    } finally {
      if (client) {
        client.close();
      }
    }
  }

  async UpdateOneAsync(collection, filter, data) {
    let client;

    try {
      client = await MongoClient.connect(url, { useNewUrlParser: true });
      let db = client.db(dbName);
      let result = await db.collection(collection).updateOne(filter, data);
      return result;
    } catch (err) {
      console.error(err);
    } finally {
      if (client) {
        client.close();
      }
    }
  }

  DeleteAsync(collectionName, condition) {
    return new Promise((resolve, reject) => {
      return client.connect(url).then(db => {
        db.collection(collectionName)
          .deleteOne(condition)
          .then(result => {
            db.close();
            console.log("Collection is closed!");
            return resolve(true);
          });
      });
    }).catch(err => {
      return reject(err);
    });
  }
}

module.exports = DBAccess;
