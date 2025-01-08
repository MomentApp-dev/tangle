const express = require('express');
const { DynamoDBClient, ListTablesCommand } = require("@aws-sdk/client-dynamodb");
const AWS = require('aws-sdk');

const router = express.Router();

router.get('/events', async (request, response) => {
    // lists all tables inside of the service account. not what the API should do...
    console.warn("/events STUBBED");
    response.send('Getting events!');
    // const client = new DynamoDBClient({ region: "us-east-1"});
    // const command = new ListTablesCommand({});
    // let responseString = "";
    // try {
    //     const awsResponse = await client.send(command);
    //     console.log(awsResponse.TableNames);
    //     response.send(awsResponse.TableNames);
    // } catch (err) {
    //     console.error(err)
    // }
});

// router.get('/events/:eventId', (request, response) => {
//     response.send(`Getting the ${request.params["eventId"]} event!`);
// });

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