import { Router } from 'express';
import profileRouter from './profiles.ts'
import eventRouter from './events.ts'

const api = Router()
    .use(profileRouter)
    .use(eventRouter);

export default Router().use('/api', api);