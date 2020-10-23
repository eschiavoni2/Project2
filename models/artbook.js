module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  var artwork_data = sequelize.define("artwork_data", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    accession_number: {
      type: DataTypes.INTEGER,
    },
    artist: {
      type: DataTypes.STRING,
    },
    artistRole: {
      type: DataTypes.STRING,
    },
    artistId: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    dateText: {
      type: DataTypes.STRING,
    },
    medium: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    acquisitionYear: {
      type: DataTypes.INTEGER,
    },
    url: {
      type: DataTypes.STRING,
    },
    thumbnailUrl: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.INTEGER
    },
    updatedAt: {
      type: DataTypes.INTEGER
    }
  });
  return artwork_data;
};
=======
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
  
>>>>>>> 01ef3745f2754b64848f55f10dbf9837869b2eef
