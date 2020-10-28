const express = require('express');
const models = require('../models')

const index = async (req,res) => {
    const User = await models.User.findAll({})
    res.status(200).send({
        status : 200,
        message : "Geting all Users data",
        data : User
    });
}
const create = async (req, res) => {
    const User = await models.User.create({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        createdAt : new Date().toISOString(), 
        updatedAt : new Date().toISOString()
    })
    res.status(200).send({
        status : 200,
        message : "Add User data succeeded",
        data : User
    });
}
const show = async (req, res) => {
    const user_id = req.params.user_id
    const User = await models.User.findByPk(user_id)
    res.status(200).send({
        status : 200,
        message : `Getting Users data with id ${user_id}`,
        data : User
    });
}
const update = async (req, res) => {
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
        message : `Update Users data with id ${user_id} succeeded`,
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
        message : `Delete User data with id ${user_id} succeeded`
    });
}

module.exports = {index, create, show, update ,destroy}