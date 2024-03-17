// Basecode taken from Algolia JavaScript repository (simple.js)

// Install the API client: https://www.algolia.com/doc/api-client/getting-started/install/javascript/?client=javascript
const algoliasearch = require("algoliasearch");
const dotenv = require("dotenv");
const fs = require("fs/promises");

dotenv.config();

// Get your Algolia Application ID and (admin) API key from the dashboard: https://www.algolia.com/account/api-keys
// and choose a name for your index. Add these environment variables to a `.env` file:
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;

// Start the API client
// https://www.algolia.com/doc/api-client/getting-started/instantiate-client-index/
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

// Create an index (or connect to it, if an index with the name `ALGOLIA_INDEX_NAME` already exists)
// https://www.algolia.com/doc/api-client/getting-started/instantiate-client-index/#initialize-an-index
const index = client.initIndex(ALGOLIA_INDEX_NAME);

// Load the expected algolia payload from a json file
// Written asynchronously since in theory multiple sources could be taken to create the final json
const payload = fs.readFile("./data/payload.json")
    .then((data) => JSON.parse(data))
    .then((data) => data)
    .catch((error) => config.log(error));

// Upload the Data from the JSON File to Algolia
const uploadDataToAlgolia = async () => {
    //Awaiting result from single promise. In theory, multiple sources could be bound together here
    const algoliaPayload = await payload;
    // Add new objects to the index
    // https://www.algolia.com/doc/api-reference/api-methods/add-objects/
    // This method automatically splits the 10k object JSON into 10 tasks with 1k objects each. 
    // No need to increase the batch size for a payload this small
    index
        .saveObjects(algoliaPayload)
        // Wait for the indexing task to complete
        // https://www.algolia.com/doc/api-reference/api-methods/wait-task/
        .wait()
        .then((response) => {
            console.log(response);
        });
}

uploadDataToAlgolia();

/*
// used to check search
index.search('Amazon').then(({ hits }) => {
    console.log(hits[0]);
});*/