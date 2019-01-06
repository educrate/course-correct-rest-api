// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const college = sequelizeClient.define('college', {
    uuid: { 
      type: DataTypes.UUID, 
      primaryKey: true 
    },
    name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    }
  }, {
    underscored: true,
    freezeTableName: true
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  college.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return college;
};
