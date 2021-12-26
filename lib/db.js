'use strict'

const Sequelize = require('sequelize')

let currentSequelize = null

module.exports = function seputDataBase(config) {
    if (!currentSequelize) {
        currentSequelize = new Sequelize(config)
    }
    return currentSequelize
}
