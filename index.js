'use strict'

const seputDaraBase = require('./lib/db')
const seputAgentModel = require('./models/agent')
const seputAgentMetric = require('./models/metric')

module.exports = async function (config) {


    const sequalize = setupDataBase(config)
    const AgentModel = seputAgentModel(config)
    const MetricModel = seputAgentMetric(config)

    // relaciones en DB
    AgentModel.hasMany(MetricModel)
    MetricModel.belongsTo(AgentModel)

    await sequalize.authenticate()

    const Agent = {}
    const Metric = {}

    return {
        Agent,
        Metric
    }
}
