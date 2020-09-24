import { Router } from 'express';
import UserController from '../app/controllers/User';
import AuthMiddleware from '../app/middlewares/auth';
import CreateUserSchemaValidation from
  '../app/middlewares/schema-validations/createUserSchema';
import UpdateUserSchemaValidation from
  '../app/middlewares/schema-validations/updateUserSchema';

const routes = new Router();

// rota para criação de usuário
routes.post('/users', [AuthMiddleware, CreateUserSchemaValidation],
  UserController.createUser);

// rota para atualização de usuário
routes.patch('/users', [AuthMiddleware, UpdateUserSchemaValidation],
  UserController.updateUser);

// rota para busca de 1 usuário
routes.get('/users', [AuthMiddleware],
  UserController.getUser);

// rota remoção de usuário
routes.delete('/users', [AuthMiddleware],
  UserController.deleteUser);

export default routes;
