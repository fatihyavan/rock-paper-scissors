const Sequelize = require("sequelize");
const sequelize = require("./database");

const Scoreboard = sequelize.define("scoreboard",{
    user_name:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    win:{
        type: Sequelize.DataTypes.INTEGER
    },
    totalPlayed:{
        type: Sequelize.DataTypes.INTEGER
    } 
});

(async () => {
    Scoreboard.sync({ alter: true });
  })();

module.exports = Scoreboard;
