'use strict';
// var mongoose = require('mongoose')
// var Host = require('../models/hostModel.js');


module.exports = new class HostRepository {

    getAll() {
        return Host.find();
    }

    getById(id) {
        return Host.findById(id);
    }

    create(host) {
        return Host.create(host);
    }

    update(id, host) {

        const updatedhost = {
            name: host.name,
            hostgroup: host.hostgroup,
            so: host.so,
        }

        return Host.findByIdAndUpdate(id, updatedhost, {
            new: true
        });
    }

    delete(id) {
        return Host.findByIdAndRemove(id);
    }

}