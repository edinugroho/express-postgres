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
const showUser = async (req, res) => {
    const user_id = req.params.user_id
    const User = await models.User.findByPk(user_id)
    res.status(200).send({
        status : 200,
        message : `Get user with id ${user_id}`,
        data : User
    });
}
module.exports = {getAllUsers, addUser, showUser}