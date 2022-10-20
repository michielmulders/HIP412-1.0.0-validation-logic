# Validation tool for HIP412@1.0.0

Contains all logic to verify your NFT metadata against the HIP412@1.0.0 format. 

## File structure
|
|- examples -> Contains various faulty use cases to test the validation logic
|- schemas -> Contains the HIP412@1.0.0 schema (IPFS link: ipfs://bafkreigvrqi2f2xy642cpokilhqgudh2qoph7vqmywd2muuenk2eimvpiy)
|- validators -> Contains different additional validator helper functions on top of the `jsonschema` validation package

## Run the project with your NFT metadata

To install dependency `jsonschema`, run:

```sh
npm install
```

To run the project:

```sh
node index
```

If you want to add your own example:

1. Add your NFT metadata as a new file in the `/examples` folder.
2. Add a code snippet to the index.js file at the bottom, make sure to update the file import. This snippet will run all the checks against your NFT metadata.

```js
const myexample = require("./examples/myexample.json"); // change import to your example

let result = validator.validate(myexample, schema);
console.log(`\n\n>>> Example`);
if (result.errors.length === 0) console.log("JSON Schema Validation: Success");
if (result.errors.length > 0) errorParser(result.errors);
console.log(attributesValidator(myexample));
console.log(localizationValidator(myexample));
console.log(SHA256Validator(myexample));
```