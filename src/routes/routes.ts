import Router from 'express';
import { PROFILE_ROUTER } from './profiles';
import { EVENTS_ROUTER } from './events';

const api = Router()
    .use(PROFILE_ROUTER)
    .use(EVENTS_ROUTER);

export const ROUTER = Router().use('/api', api);