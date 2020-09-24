import { Router } from 'express';
import SessionController from '../app/controllers/Session';
import CreateSessionSchemaValidation from
  '../app/middlewares/schema-validations/createSessionSchema';

const routes = new Router();

// rota para criação de usuário
routes.post('/sessions', CreateSessionSchemaValidation,
  SessionController.auth);

export default routes;
