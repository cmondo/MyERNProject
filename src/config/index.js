const envs = {
    "development": {
      "username": "root",
      "password": null,
      "database": "company",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "endpoint": "/api"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "endpoint": "/api"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "endpoint": "/api"
    }
  };

class config {
    params;
    constructor(){
        const env = process.env.NODE_ENV || 'development';
        this.params = envs[env];
    }
}

export default new config().params;