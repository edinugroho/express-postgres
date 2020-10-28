const express = require('express');
const models = require('../models')

const getAllUsers = async (req,res) => {
    const User = await models.User.findAll({})
    res.status(200).send({
        status : 200,
        message : "Berhasil get data user",
        data : User
    });
}
const addUser = async (req, res) => {
    const User = await models.User.create({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        createdAt : new Date().toISOString(), 
        updatedAt : new Date().toISOString()
    })
    res.status(200).send({
        status : 200,
        message : "Berhasil tambah data user",
        data : User
    });
}
module.exports = {getAllUsers, addUser}