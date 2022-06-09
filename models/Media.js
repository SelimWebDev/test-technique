const Sequelize = require('./index')
const sequelize = require("./index")

const Media = sequelize.define("media", {
    title: Sequelize.STRING,
    description: Sequelize.TEXT
})

module.exports = Media