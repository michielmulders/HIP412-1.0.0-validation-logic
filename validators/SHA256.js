/*
 * @desc: SHA256 validator -> verifies all hashes to have the correct format
 */
const SHA256Validator = (instance) => {
  const sha256Regex = /^[0-9a-f]{64}$/i;
  const errors = [];

  if (instance.checksum && !sha256Regex.test(instance.checksum)) {
    errors.push(
      `SHA256 error (checksum): Not a SHA256 hash, got: ${instance.checksum}`
    );
  }

  if (instance.files) {
    instance.files.map((file) => {
      if (file.hasOwnProperty("checksum") && !sha256Regex.test(file.checksum)) {
        errors.push(
          `SHA256 error (files): Not a SHA256 hash, got: ${file.checksum}`
        );
      }
    });
  }

  return errors;
};

module.exports = {
  SHA256Validator
};
