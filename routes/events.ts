const express = require('express');
const { DynamoDBClient, ListTablesCommand } = require("@aws-sdk/client-dynamodb");

const router = express.Router();

router.get('/', async (request, response) => {
    // lists all tables inside of the service account. not what the API should do...
    const client = new DynamoDBClient({ region: "us-east-1"});
    const command = new ListTablesCommand({});
    let responseString = "";
    try {
        const awsResponse = await client.send(command);
        console.log(awsResponse.TableNames);
        response.send(awsResponse.TableNames);
    } catch (err) {
        console.error(err)
    }
});

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