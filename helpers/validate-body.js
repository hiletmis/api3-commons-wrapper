import { Validator } from "jsonschema";

export function validateBody(body, schema) {
  const v = new Validator();
  const result = v.validate(body, schema);
  if (result.errors.length > 0) {
    throw result.errors[0].stack;
  }
  return result.valid;
}
