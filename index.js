const schema = require("./schemas/HIP412@1.0.0.json");

/* Validators */
const { attributesValidator } = require("./validators/attributes");
const { localizationValidator } = require("./validators/localization");
const { SHA256Validator } = require("./validators/SHA256");
const { schemaValidator } = require("./validators/schema");

/*
Example error for JSON schema validator NPM package:

[
  ValidationError {
    path: [],
    property: 'instance',
    message: 'requires property "type"',
    schema: {
      '$schema': 'http://json-schema.org/draft-07/schema#',
      type: 'object',
      version: '1.0.0',
      additionalProperties: false,
      properties: [Object],
      required: [Array]
    },
    instance: {
      name: 'Example NFT 001',
      creator: 'Jane Doe, John Doe',
      description: 'This describes my NFT',
      image: 'https://myserver.com/preview-image-nft-001.png'
    },
    name: 'required',
    argument: 'type',
    stack: 'instance requires property "type"'
  }
]
*/

/* TEST CASES */

/*
 * @name: example-001.json
 * @desc: Correct instance from HIP
 * @link: https://github.com/hashgraph/hedera-improvement-proposal/blob/main/HIP/hip-412.md#default-schema-collectibe-hedera-nfts-format-hip412100
 * @output: success
 */
const example001 = require("./examples/example-001.json");

console.log(`\n\n>>> Example 1`);
console.log(schemaValidator(example001));
console.log(attributesValidator(example001));
console.log(localizationValidator(example001));
console.log(SHA256Validator(example001));

/*
 * @name: example-002.json
 * @desc: Correct instance with no files, attributes, localization, or properties
 * @output: success
 */
const example002 = require("./examples/example-002.json");

console.log(`\n\n>>> Example 2`);
console.log(schemaValidator(example002));
console.log(attributesValidator(example002));
console.log(localizationValidator(example002));
console.log(SHA256Validator(example002));

/*
 * @name: example-003.json
 * @desc: Correct instance with no files, attributes, localization, properties, or format - removed required field "type"
 * @output: requires property "type"
 */
const example003 = require("./examples/example-003.json");

console.log(`\n\n>>> Example 3`);
console.log(schemaValidator(example003));
console.log(attributesValidator(example003));
console.log(localizationValidator(example003));
console.log(SHA256Validator(example003));

/*
 * @name: example-004.json
 * @desc: Correct instance with no files, attributes, localization, properties, or format - removed required field "type" and "image"
 */
const example004 = require("./examples/example-004.json");

console.log(`\n\n>>> Example 4`);
console.log(schemaValidator(example004));
console.log(attributesValidator(example004));
console.log(localizationValidator(example004));
console.log(SHA256Validator(example004));

/*
 * @name: example-005.json
 * @desc: Display type = boost and value is string ("10") while it expects integer or number
 */
const example005 = require("./examples/example-005.json");

console.log(`\n\n>>> Example 5`);
console.log(schemaValidator(example005));
console.log(attributesValidator(example005));
console.log(localizationValidator(example005));
console.log(SHA256Validator(example005));

/*
 * @name: example-006.json
 * @desc: Display type = color and value is incorrect rgb string (255,0,0) - expected: rgb(255,0,0)
 */
const example006 = require("./examples/example-006.json");

console.log(`\n\n>>> Example 6`);
console.log(schemaValidator(example006));
console.log(attributesValidator(example006));
console.log(localizationValidator(example006));
console.log(SHA256Validator(example006));

/*
 * @name: example-007.json
 * @desc: Display type = percentage and value is string instead of number and percentage outside [0-100] range
 */
const example007 = require("./examples/example-007.json");

console.log(`\n\n>>> Example 7`);
console.log(schemaValidator(example007));
console.log(attributesValidator(example007));
console.log(localizationValidator(example007));
console.log(SHA256Validator(example007));

/*
 * @name: example-008.json
 * @desc: Display type = datetime and value should be integer but got string
 */
const example008 = require("./examples/example-008.json");

console.log(`\n\n>>> Example 8`);
console.log(schemaValidator(example008));
console.log(attributesValidator(example008));
console.log(localizationValidator(example008));
console.log(SHA256Validator(example008));

/*
 * @name: example-009.json
 * @desc: Localization.default should be two-letter language code and for localization.locales as well, default locale should not appear in "locales"
 */
const example009 = require("./examples/example-009.json");

console.log(`\n\n>>> Example 9`);
console.log(schemaValidator(example009));
console.log(attributesValidator(example009));
console.log(localizationValidator(example009));
console.log(SHA256Validator(example009));

/*
 * @name: example-010.json
 * @desc: Localization.uri should be of format "<protocol>://<hash>/{locale}.json"
 */
const example010 = require("./examples/example-010.json");

console.log(`\n\n>>> Example 10`);
console.log(schemaValidator(example010));
console.log(attributesValidator(example010));
console.log(localizationValidator(example010));
console.log(SHA256Validator(example010));

/*
 * @name: example-011.json
 * @desc: Verify SHA256 hashes - one faulty hash
 */
const example011 = require("./examples/example-011.json");

console.log(`\n\n>>> Example 11`);
console.log(schemaValidator(example011));
console.log(attributesValidator(example011));
console.log(localizationValidator(example011));
console.log(SHA256Validator(example011));

/* Count errors for example011 */
console.log(
  `--> Found ${
    schemaValidator(example011).length +
    attributesValidator(example011).length +
    localizationValidator(example011).length +
    SHA256Validator(example011).length
  } validation error(s)`
);
