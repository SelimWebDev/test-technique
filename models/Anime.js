import db from './index.js'

export const Anime = db.sequelize.define('anime', {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    title: db.Sequelize.STRING,
    description: db.Sequelize.TEXT
});