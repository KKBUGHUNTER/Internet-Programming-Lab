// /src/modules/MainModule.js

const { MongoClient } = require('mongodb');

class MainModel {
  
  constructor() {
    this.client = new MongoClient('mongodb://localhost:27017');  // Database Client
    this.dbName = 'ExaminationApp'; // Database name
    this.userCollection = 'User'; // User Collection 
    this.appCollection = 'AppData'; // AppData Collection 
  }

  async connect() {
    try {
        await this.client.connect();
        // console.log("Connected successfully to server");
    } catch(error) {
        console.error("Connection Error: ", error);
    }
  }

  async getCollection(collectionName) {
    try {
        const database = this.client.db(this.dbName);
        const collection = database.collection(collectionName);
        return collection;
    } catch(error) {
        console.error("Error getting collection: ", error);
    }
  }

  async getUserCollection() {
    return this.getCollection(this.userCollection);
  }

  async getAppCollection() {
    return this.getCollection(this.appCollection);
  }

  async close() {
    try {
        await this.client.close();
        // console.log("Connection closed");
    } catch(error) {
        console.error("Error closing connection: ", error);
    }
  }
}

module.exports = MainModel;
