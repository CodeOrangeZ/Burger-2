'use strict';
module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define('burger', {
        'burger_name': DataTypes.STRING,
        finished: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return burger;
};