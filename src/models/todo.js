'use strict';

const Todo = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};

export default Todo;