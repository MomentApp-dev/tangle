const express = require('express');
const { DynamoDBClient, ListTablesCommand, GetItemCommand, QueryCommand } = require("@aws-sdk/client-dynamodb");
const AWS = require('aws-sdk');

const router = express.Router();

router.get('/events', async (request, response) => {
    // lists events
    // TODO: implement pagination & querying subsets
    const credentials = new AWS.SharedIniFileCredentials({ profile: "tangle-dev" });
    AWS.config.credentials = credentials;

    const client = new DynamoDBClient({ region: "us-east-1", credentials: credentials});
    const command = new QueryCommand({
        "TableName": "events",
        "KeyConditions": {
            "events_uuid": {
                "AttributeValueList": [
                    {
                        "S": "57c68c45-b68b-4df8-83a7-1ac0f5677077"
                    }
                ],
                "ComparisonOperator": "EQ",
            }
        }
    });
    let responseString = "";
    try {
        const awsResponse = await client.send(command);
        console.log(awsResponse);
        response.send(awsResponse);
    } catch (err) {
        console.error(err)
    }
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