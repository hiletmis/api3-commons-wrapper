# api3-commons-wrapper

# Introduction

Welcome to the @api3/commons wrapper API! This API is designed to be utilize @api3/commons repository to evaluate post and pre processing of data.


# API Calls


## POST /pre
Preprocesses data before sending to API call

## Example body parameters

```json
{
    "endpoint": {
        ...
    }
    "apiCallParameters": {
        "fsyms": "ALGO",
        "tsyms": "USD"
    }

}
```

## POST /post
Postprocesses data after receiving from API call

## Example body parameters

```json
{
    "apiCallResponse": {
        "ALGO": {
        "USD": 0.09495
        }
    },
    "endpoint": {
        ...
    },
    "apiCallParameters": {
        "fsyms": "ALGO",
        "tsyms": "USD"
    }

}
```
