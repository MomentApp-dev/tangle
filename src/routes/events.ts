import express, { Request, Response } from 'express';
import { DynamoDBClient, ScanCommand, GetItemCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
const client = new DynamoDBClient({ 
    region: "us-east-1", 
    credentials: new AWS.SharedIniFileCredentials({ profile: "tangle-dev" })
});

router.get('/events', async (request: Request, response: Response) => {
    // unused for now -- TODO: implement pagination
    const pageSize = (request.query['page_size']);
    const scanInput = {
        TableName: "events"
    }

    const command = new ScanCommand(scanInput);
    try{
        const scanResponse = await client.send(command);
        console.log(scanResponse);
        response.status(200).send(`Event: ${JSON.stringify(scanResponse)}`);
    } catch (err) {
        response.status(400).send();
        console.log(err);
    }
});

router.get('/events/:eventId', async (request: Request, response: Response) => {
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
        response.status(400).send();
        console.error(err);
    }
});

// router.patch('/events/:eventId', (request, response) => {
//     response.send(`Patching the ${request.params["eventId"]} event!`);
// });

router.post('/events', async (request, response) => {
    // creates new Item with random ID
    // TODO: validate for valid input body for event creation
    const itemToPut =  {
        // PUTs event item with random UID and empty attributes
        // TODO: implement attribute specification in request body + validate above
        "events_uuid": {
            "S": uuidv4(),
        },
    }
    const putItemInput = {
        "TableName": "events",
        "Item": itemToPut,
    }
    const command = new PutItemCommand(putItemInput);
    console.log(command)

    try {
        const putItemResponse = await client.send(command);
        console.log(putItemResponse);
        response.status(200).send(`Event: ${JSON.stringify(putItemResponse)}`);
    } catch (err) {
        response.status(400).send();
        console.error(err);
    }
});

// router.delete('/events/:eventId', (request, response) => {
//     response.send(`Deleting the ${request.params["eventId"]} event!`);
// });

export const EVENTS_ROUTER = router;