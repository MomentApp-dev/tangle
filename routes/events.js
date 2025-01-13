const express = require('express');
const { DynamoDBClient, ListTablesCommand, GetItemCommand, QueryCommand } = require("@aws-sdk/client-dynamodb");
const AWS = require('aws-sdk');

const router = express.Router();
const client = new DynamoDBClient({ 
    region: "us-east-1", 
    credentials: new AWS.SharedIniFileCredentials({ profile: "tangle-dev" })
});

router.get('/events', async (request, response) => {
    // lists events
    // TODO: implement pagination & querying subsets
    console.log("/events STUBBED");
    response.status(200).send("/events STUBBED");
});

router.get('/events/:eventId', async (request, response) => {
    const getCommand = new GetItemCommand({
        TableName: "events", 
        Key: {
            events_uuid: {
                S: request.params.eventId
            }
        }
    });

    try {
        const awsResponse = await client.send(getCommand);
        console.log(awsResponse);
        response.status(200).send(`Event: ${JSON.stringify(awsResponse.Item)}`);
    } catch (err) {
        console.error(err);
    }
});

// router.patch('/events/:eventId', (request, response) => {
//     response.send(`Patching the ${request.params["eventId"]} event!`);
// });

// router.post('/events', (request, response) => {
//     response.send('Creating an event!');
// });

// router.delete('/events/:eventId', (request, response) => {
//     response.send(`Deleting the ${request.params["eventId"]} event!`);
// });

module.exports = router;