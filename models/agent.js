'use strict'

const sequelize = require('sequalize')
const setupDataBase = require('../lib/db')

module.exports = function setupAgentModel(config) {
    const currentSequalize = setupDataBase(config)

    return currentSequalize.define('agent', {
        uuid: {
            type: sequelize.STRING,
            allowNulls: false
        },
        username: {
            type: sequelize.STRING,
            allowNulls: false
        },
        name: {
            type: sequelize.STRING,
            allowNulls: false
        },
        hostname: {
            type: sequelize.STRING,
            allowNulls: false
        },
        pid: {
            type: sequelize.INTEGER,
            allowNulls: false
        },
        connected: {
            type: sequelize.BOOLEAN,
            allowNulls: false,
            defaultValue: false
        }
    })
}

