'use strict';

var mongoose = require('mongoose')
var Host = require('../models/hostModel.js');

// const HostRepository = require('../repositories/hostRepository');

// var redis = require('redis');
// var client = redis.createClient();

exports.get = (req, res) => {

    Host.find()
        .then((host) => {
            // client.set('allpersons', JSON.stringify(person));
            // client.expire('allpersons', 20);
            res.status(200).send(host);
        }).catch(err => res.status(500).send(err))

};

exports.getById = (req, res) => {

    Host.findById(req.params.id)
        .then((host) => {
            res.status(200).send(host);
        }).catch(err => res.status(500).send(err))
};

exports.post = (req, res) => {
    const p = req.body;
    console.log('creating host : ' + p)

    Host.create(p)
        .then((host) => {
            res.status(200).send(host);
        }).catch(err => res.status(500).send(err))
};

exports.put = (req, res) => {
    const updatedhost = {
        name: req.body.name,
        hostgroup: req.body.hostgroup,
        so: req.body.so,
    }

    Host.findByIdAndUpdate(req.params.id, updatedhost, {
            new: true
        })
        .then((host) => {
            res.status(201).send(host);
        }).catch(err => res.status(500).send(err))
};

exports.delete = (req, res) => {
    Host.findByIdAndRemove(req.params.id)
        .then((host) => {
            res.status(200).send(req.params.id);
        }).catch(err => console.error.bind(console, `Error ${err}`))
};