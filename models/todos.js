module.exports = function(sequelize, DataTypes) {
    const Todo = sequelize.define('Todo', {
      text: DataTypes.STRING,
      complete: {
        type: DataTypes.BOOLEAN,
        default: false
      }
    })
    return Todo
  }