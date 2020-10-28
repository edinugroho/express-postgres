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
const updateUser = async (req, res) => {
    const user_id = req.params.user_id
    const User = await models.User.update({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        updatedAt : new Date().toISOString()
    }, {
        where : {
            id : user_id
        },
        returning : true
    })
    res.status(200).send({
        status : 200,
        message : `updating data with id ${user_id}`,
        data: User[1]
    })
}
const destroy = async (req, res) => {
    const user_id = req.params.user_id
    await models.User.destroy({
        where : {
            id : user_id
        }
    })
    res.status(200).send({
        status : 200,
        message : `User dengan id ${user_id} berhasil dihapus`
    });
}
module.exports = {getAllUsers, addUser, showUser, updateUser, destroy}