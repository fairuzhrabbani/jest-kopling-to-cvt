import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ajv = new Ajv({
  allErrors: true,
});

addFormats(ajv);

export const expectSchema = (responseBody, schema) => {
  const validate = ajv.compile(schema);
  const valid = validate(responseBody);

  if (!valid) {
    console.error('AJV Validation Errors:');
    console.error(validate.errors);
  }

  expect(valid).toBe(true);
};
