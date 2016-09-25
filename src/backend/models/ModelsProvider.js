/**
 * Created by vasiliy on 25.09.16.
 */
'use strict';

const config = require("./config.json");
const mongoose = require('mongoose');

const [host, port, database] = [congig.mongodb.host, congig.mongodb.port, congig.mongodb.database];

let instance;

class ModelsProvider{
    constructor(){
        if(!instance){
            instance = this;
        }
        this.__connection = mongoose.createConnection(`mongodb://${host}:${port}/${database}`);

        return instance;
    }

    createModel(modelName, model, options={}){
        let schema = new mongoose.Schema(modelName, model, options);
        this.__connection.model(modelName, schema, options);
    }

    getModel(modelName){
        return this.__connection(modelName);
    }
}

module.exports = ModelsProvider;