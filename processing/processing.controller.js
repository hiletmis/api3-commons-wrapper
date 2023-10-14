import express from 'express';
import * as processing from './processing.service.js';

const router = express.Router();

router.post('/post', postProcess);
router.post('/pre', preProcess);

function postProcess(req, res, next) {
    processing.postProcess(req.body)
        .then(function (result) { res.json(result) })
        .catch(err => next(err));
}

function preProcess(req, res, next) {
    processing.preProcess(req.body)
        .then(function (result) { res.json(result) })
        .catch(err => next(err));
}

export default router;
