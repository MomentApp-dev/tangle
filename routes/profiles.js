const express = require('express');
const { DynamoDBClient, ListTablesCommand, GetItemCommand, QueryCommand } = require("@aws-sdk/client-dynamodb");
const AWS = require('aws-sdk');

const router = express.Router();
const client = new DynamoDBClient({ 
    region: "us-east-1", 
    credentials: new AWS.SharedIniFileCredentials({ profile: "tangle-dev" })
});

// list events
router.get('/profiles', (request, response) => {
    response.send('Listing profiles!');
}); 

// get profile
router.get('/profiles/:profileId', async (request, response) => {
    const getCommand = new GetItemCommand({
        TableName: "profiles", 
        Key: {
            profile_uuid: {
                S: request.params.profileId
            }
        }
    });
    const profile = await client.send(getCommand);
    response.status(200).send(`Profile: ${JSON.stringify(profile.Item)}`);
});

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