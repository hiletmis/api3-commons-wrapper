
import express from 'express';
import cors from 'cors';
import { postProcessApiCallResponse, preProcessApiCallParameters } from '@api3/commons/processing';

const app = express();

app.use(express.json({ limit: "1MB" }));
app.use(cors());

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        return res.status(400).json({ message: err });
    }

    if (err.name === 'ValidationError') {
        return res.status(400).json({ message: err.message });
    }

    return res.status(500).json({ message: err.message });
}

async function preProcess(body) {

    const endpoint = body.endpoint;
    const apiCallParameters = body.apiCallParameters;

    return await preProcessApiCallParameters(endpoint, apiCallParameters);
}

async function postProcess(body) {

    const apiCallResponse = body.apiCallResponse;
    const endpoint = body.endpoint;
    const apiCallParameters = body.apiCallParameters;

    return await postProcessApiCallResponse(apiCallResponse, endpoint, apiCallParameters);
}

app.post('/post', async (req, res, next) => {
    postProcess(req.body)
        .then(function (result) { res.json(result) })
        .catch(err => next(err));
});

app.post('/pre', async (req, res, next) => {
    preProcess(req.body)
        .then(function (result) { res.json(result) })
        .catch(err => next(err));
});

app.use(errorHandler);

app.listen(3057, () =>
    console.log(`API3 Commons listening on port 3057!`),
);
