const express = require('express');

const router = express.Router();

// list events
router.get('/profiles', (request, response) => {
    response.send('Listing profiles!');
}); 

// get profile
// router.get('/profiles/:profileId', (request, response) => {
//     const getCommand = new GetItemCommand({TableName: "profiles", Key: ""});
//     response.send(`Getting the ${request.params["userId"]} profile!`);
// });

// router.patch('/profiles/:userId', (request, response) => {
//     response.send(`Patching the ${request.params["userId"]} profile!`);
// });

// router.post('/profiles', (request, response) => {
//     response.send('Creating a profile!');
// });

// router.delete('/profiles/:eventId', (request, response) => {
//     response.send(`Deleting the ${request.params["userId"]} profile!`);
// });

module.exports = router;