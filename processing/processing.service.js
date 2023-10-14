import {
  postProcessApiCallResponse,
  preProcessApiCallParameters,
} from "@api3/commons/processing";
import { validateBody } from "../helpers/validate-body.js";
import { endpointSchema } from "../helpers/endpoint.schema.js";

/*
 * This is a wrapper for the processing functions in commons/processing.js
 *
 * @param {Object} body - The body of the request
 * @param {Object} body.endpoint - The endpoint of the API call
 * @param {Object} body.apiCallParameters - The parameters of the API call
 * @param {Object} body.apiCallResponse - The response of the API call
 *
 * @returns {Object} - The response of the API call
 */
export async function preProcess(body) {
  const endpoint = body.endpoint;
  const apiCallParameters = body.apiCallParameters;

  validateBody(body.endpoint, endpointSchema);

  return await preProcessApiCallParameters(endpoint, apiCallParameters);
}

/*
 * This is a wrapper for the processing functions in commons/processing.js
 *
 * @param {Object} body - The body of the request
 * @param {Object} body.endpoint - The endpoint of the API call
 * @param {Object} body.apiCallParameters - The parameters of the API call
 * @param {Object} body.apiCallResponse - The response of the API call
 *
 * @returns {Object} - The response of the API call
 */
export async function postProcess(body) {
  const apiCallResponse = body.apiCallResponse;
  const endpoint = body.endpoint;
  const apiCallParameters = body.apiCallParameters;

  validateBody(body.endpoint, endpointSchema);

  return await postProcessApiCallResponse(
    apiCallResponse,
    endpoint,
    apiCallParameters,
  );
}
