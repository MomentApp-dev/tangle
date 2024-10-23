const express = require('express');

const router = express.Router();

// list events
router.get('/', (request, response) => {
    response.send('Listing events!');
});

// get event
router.get('/:eventId', (request, response) => {
    response.send(`Getting the ${request.params["eventId"]} event!`);
});

router.patch('/:eventId', (request, response) => {
    response.send(`Patching the ${request.params["eventId"]} event!`);
});

router.post('/', (request, response) => {
    response.send('Creating an event!');
});

router.delete('/:eventId', (request, response) => {
    response.send(`Deleting the ${request.params["eventId"]} event!`);
});

module.exports = router;