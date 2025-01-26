import express, { Request, Response } from 'express';
import { DynamoDBClient, ListTablesCommand, GetItemCommand, QueryCommand } from "@aws-sdk/client-dynamodb";
import AWS from 'aws-sdk';

const router = express.Router();
const client = new DynamoDBClient({ 
    region: "us-east-1", 
    credentials: new AWS.SharedIniFileCredentials({ profile: "tangle-dev" })
});

// list events
router.get('/profiles', (request: Request, response: Response) => {
    response.send('Listing profiles!');
}); 

// get profile
router.get('/profiles/:profileId', async (request: Request, response: Response) => {
    const getCommand = new GetItemCommand({
        TableName: "profiles", 
        Key: {
            profile_uuid: {
                S: request.params.profileId
            }
        }
    });
    console.log(`Retrieving profile [${request.params.profielId}] with command: ${JSON.stringify(getCommand)}`);
    const profile = await client.send(getCommand);
    response.status(200).send(`Profile: ${JSON.stringify(profile.Item)}`);
});

// router.patch('/profiles/:userId', (request, response) => {
//     response.send(`Patching the ${request.params["userId"]} profile!`);
// });

/**
 * {
 *   username: String
 *   
 * }
 */
router.post('/profiles', (request: Request, response: Response) => {
    console.log('request body:', JSON.stringify(request.body));
    response.send('Creating a profile!');
});

// router.delete('/profiles/:eventId', (request, response) => {
//     response.send(`Deleting the ${request.params["userId"]} profile!`);
// });

export const PROFILE_ROUTER = router;