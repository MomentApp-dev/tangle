const express = require('express');

const router = express.Router();

// list events
router.get('/', (request, response) => {
    response.send('Listing profiles!');
});

// get event
router.get('/:userId', (request, response) => {
    response.send(`Getting the ${request.params["userId"]} profile!`);
});

router.patch('/:userId', (request, response) => {
    response.send(`Patching the ${request.params["userId"]} profile!`);
});

router.post('/', (request, response) => {
    response.send('Creating a profile!');
});

router.delete('/:eventId', (request, response) => {
    response.send(`Deleting the ${request.params["userId"]} profile!`);
});

module.exports = router;