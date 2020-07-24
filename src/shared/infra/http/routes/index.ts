import { Router } from 'express';
import appointmentsRouter from '@modules/appointments/http/routes/appointment.routes';
import usersRouter from '@modules/users/http/routes/users.routes';
import sessionsRouter from '@modules/users/http/routes/session.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
