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

module.exports = {getAllUsers}