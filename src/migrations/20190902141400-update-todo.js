module.exports = {
    up: (queryInterface, Sequelize) => {
      return Promise.all([
        queryInterface.addColumn(
          'todos',
          'completed',
          {
            type: Sequelize.BOOLEAN
          }
        )
      ]);
    },
  
    down: (queryInterface, Sequelize) => {
      return Promise.all([
        queryInterface.removeColumn('todos', 'completed'),
      ]);
    }
  };