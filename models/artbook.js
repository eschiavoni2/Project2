module.exports = function(sequelize, DataTypes) {
    var artbook = sequelize.define("artbook", {
      user_id: {
        type: DataTypes.STRING,
      },
      savedArt: {
        type: DataTypes.STRING
      },
      created_at: {
        type: DataTypes.DATE
      },
      updated_at: {
        type: DataTypes.DATE
      }
    });
    return artbook;
  };
  