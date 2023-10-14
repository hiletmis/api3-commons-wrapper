
import { postProcessApiCallResponse, preProcessApiCallParameters } from '@api3/commons/processing';

export async function preProcess(body) {

    const endpoint = body.endpoint;
    const apiCallParameters = body.apiCallParameters;

    return await preProcessApiCallParameters(endpoint, apiCallParameters);
}

export async function postProcess(body) {

    const apiCallResponse = body.apiCallResponse;
    const endpoint = body.endpoint;
    const apiCallParameters = body.apiCallParameters;

    return await postProcessApiCallResponse(apiCallResponse, endpoint, apiCallParameters);
}