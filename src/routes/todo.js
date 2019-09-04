import models from '../models';
import awaitErrorHandler from './handler';

class Todo {   

    /**
	 * Get all Todos.
	 * @async
	 * @param {Object} req - Express request object.
	 * @param {Object} res - Express response object.
	 */ 
    async getAll(req, res){
        const exec = awaitErrorHandler(async (req, res) => {
            const data = await models.Todo.findAll({});
            return res.status(200).json({
                data,
                size: data.length
            });
        })
        exec(req, res);
    }

    /**
	 * Get single Todo by Id.
	 * @async
	 * @param {Object} req - Express request object.
	 * @param {Object} res - Express response object.
	 */ 
    async getById(req, res){
        const exec = awaitErrorHandler(async (req, res) => {
            const todo_id = req.params.id;
            const data = await models.Todo.findOne({where : {id : todo_id}});
            let code = 200;
            let message = 'Todo get success';
    
            if(!data){
                code = 404;
                message = 'Unable to get Todo'
            }
            
            return res.status(code).json({
                data : !data ? [] : data,
                message
            });
        })
        
        exec(req, res);
    }

    /**
	 * Save one Todo
	 * @async
	 * @param {Object} req - Express request object.
	 * @param {Object} res - Express response object.
	 */ 
    async saveOne(req, res){
        const exec = awaitErrorHandler(async (req, res) => {
            const data = await models.Todo.create(req.body);
            return res.status(201).json({
                data,
                message: 'Todo was created success'
            });
        })

        exec(req, res);
    }

    /**
	 * Update one Todo
	 * @async
	 * @param {Object} req - Express request object.
	 * @param {Object} res - Express response object.
	 */ 
    async updateOne(req, res){
        const exec = awaitErrorHandler(async (req, res) => {
            const todo_id = req.params.id;
            const data = await models.Todo.update(req.body,{ where:{id:todo_id}});
            let code = 200;
            let message = 'Todo was updated success';
    
            if(!data[0]){
                code = 404;
                message = 'Unable to update Todo'
            }
            
            return res.status(code).json({
                message
            });
        })

        exec(req, res);
    }

    /**
	 * Delete one Todo
	 * @async
	 * @param {Object} req - Express request object.
	 * @param {Object} res - Express response object.
	 */ 
    async deleteOne(req, res){
        const exec = awaitErrorHandler(async (req, res) => {
            const todo_id = req.params.id;
            const data = await models.Todo.destroy({ where:{id:todo_id}});
            let code = 200;
            let message = 'Todo was deleted success';
    
            if(!data){
                code = 404;
                message = 'Unable to delete Todo'
            }
            
            return res.status(code).json({
                message
            });
        })
        
        exec(req, res);
    }
}


export default Todo;