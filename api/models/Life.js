/**
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

attributes: {
    "TheBest": {
        "key": "TheBest",
        "type": "string",
        "autoIncrement": false,
        "unique": false,
        "primaryKey": true,
        "required": true,
        "collection": false
    },
    "id": {
        "key": "id",
        "type": "integer",
        "autoIncrement": true,
        "unique": false,
        "primaryKey": false,
        "required": false,
        "collection": false
    }
}

};

