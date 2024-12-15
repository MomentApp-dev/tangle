import { GetItemCommand } from "@aws-sdk/client-dynamodb";

const express = require('express');

const router = express.Router();

const client = new DynamoDBClient({ region: "us-east-1"});

// list events
router.get('/', (request, response) => {
    response.send('Listing profiles!');
});

// get profile
router.get('/:profileId', (request, response) => {
    const getCommand = new GetItemCommand({TableName: "profiles", Key: ""});
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