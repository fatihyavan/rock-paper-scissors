const Sequelize = require("sequelize");

const sequelize = new Sequelize("score","postgres","postgres",{
    host: "localhost",
    dialect: "postgres"
});

module.exports=sequelize;