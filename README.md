# algolia-take-home

## General Information

The [data upload script](./platform_config/upload_data/) as well as the [UI demo](./UI/) have been set up as Node.js projects and were developed/tested with the current [LTS version of Node (20.11.1)](https://nodejs.org/en/download/) which is needed to run the projects.

Alternatively you can visit the [code sandbox](https://codesandbox.io/p/github/Jabalaja/algolia-take-home) to run both projects in a browser IDE.

See the READMEs in the respective folders for installation and run instructions of the specific projects.

## Notes on the take home tasks

### Platform configuration

- The Simple.js file from the quickstart proved to be sufficient to the task. A one-time payload upload should not care too much complicated setups. It should be easy to read and understand so that this can be handed over to customers to implement.
- Nevertheless, I chose to load the file asynchronously. The hiring test gave an overview of the customers architecture and it will be likely that they will need to grab data from multiple remote locations which could be sped up by running requests to these locations asynchronously.

### UI

- I went with the e-commerce sample app from the [Algolia doc-code-samples repository](https://github.com/algolia/doc-code-samples).
  - The search is meant for products from an e-commerce website so this demo provides me with a fitting UI out-of-the-box
  - Since there was no information about the customers desired frontend integration, I went with an Angular example as it looked a bit nicer than the plain InstantSearch.js example from the onboarding folder
- I kept the Algolia branding as I don't know which customer/brand I'm dealing with right now so modifying a perfectly fine UI would have been a waste of efforts. For other customers, I would rebrand the demo so they would feel more "at home"
- I modified the UI a bit and added a new refinement (types) to show my ability to add custom attributes specific to the customer
- Very basic click and conversion events were added. Click is tracked with any click on a product tile, conversion when clicking "buy"
