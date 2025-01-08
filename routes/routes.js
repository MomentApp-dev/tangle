const Router = require('express');
const profileRouter = require('./profiles');
const eventRouter = require('./events');

const api = Router()
    .use(profileRouter)
    .use(eventRouter);

module.exports = Router().use('/', api);