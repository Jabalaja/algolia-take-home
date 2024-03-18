# Platform Configuration

This Node.js project uses the [Simple.js file](https://github.com/algolia-samples/api-clients-quickstarts/blob/master/javascript/simple.js) from the Algolia JavaScript QuickStart.

# Node.JS Index demo

[![Edit the data upload script](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/Jabalaja/algolia-take-home)

## Features

This sample showcase the following features:

- Loading a JSON-file asynchronously locally (can be switched with remote file later): [Algolia Expected Payload](./data/payload.json)
- Uploading the contents of a JSON-file asynchronously to a search Index in Algolia

## How to run this sample locally

### 1. Clone this repository

```
git clone git@github.com:Jabalaja/algolia-take-home.git
```

### 2. Navigate to this folder

```
cd platform_config/upload_data
```

### 3. Install the dependencies and run the server

```
npm install
npm start
```

The console should log a truncated view of the uploaded objects as well as an Array with 10 task ID's.
Each task uploaded 1000 objects.
