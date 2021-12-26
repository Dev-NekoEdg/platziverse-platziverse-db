'use strict'

const sequelize = require('sequalize')
const setupDataBase = require('../lib/db')

module.exports = function setupMetricModel(config) {
    const currentSequalize = setupDataBase(config)
    return currentSequalize.define('metric', {
        type: {
            type: sequelize.STRING,
            allowNulls: false
        },
        value: {
            type: sequelize.TEXT,
            allowNulls: false
        }
    })
}
