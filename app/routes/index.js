// const express = require('express');
// const router = express.Router();

module.exports = (app) => {

    app.get('/', function (req, res, next) {
        res.status(200).send({
            title: "Node, Mongo",
            version: "0.0.1"
        });
    });

};