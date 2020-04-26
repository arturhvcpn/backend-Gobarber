import { Router } from 'express';
import appointmentsRouter from './appointment.routes';
import usersRouter from './users.routes';
import sessionsRouter from './session.routes'

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
