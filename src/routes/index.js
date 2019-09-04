import express from 'express';
import todo from './todo';

const router = new express.Router();
const Todos = new todo();

router.route('/todos')
        .get(Todos.getAll)
        .post(Todos.saveOne);

router.route('/todos/:id')
        .put(Todos.updateOne)
        .delete(Todos.deleteOne)
        .get(Todos.getById);

export default router;