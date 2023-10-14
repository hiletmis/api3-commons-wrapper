export const endpointSchema = {
  $schema: "http://json-schema.org/draft-06/schema#",
  $ref: "#/definitions/Endpoint",
  definitions: {
    Endpoint: {
      type: "object",
      additionalProperties: false,
      properties: {
        fixedOperationParameters: {
          type: "array",
          items: {},
        },
        name: {
          type: "string",
        },
        operation: {
          $ref: "#/definitions/Operation",
        },
        parameters: {
          type: "array",
          items: {
            $ref: "#/definitions/Parameter",
          },
        },
        reservedParameters: {
          type: "array",
          items: {
            $ref: "#/definitions/ReservedParameter",
          },
        },
        preProcessingSpecifications: {
          type: "array",
          items: {
            $ref: "#/definitions/ProcessingSpecification",
          },
        },
        postProcessingSpecifications: {
          type: "array",
          items: {
            $ref: "#/definitions/ProcessingSpecification",
          },
        },
      },
      required: [
        "fixedOperationParameters",
        "name",
        "operation",
        "parameters",
        "postProcessingSpecifications",
        "preProcessingSpecifications",
        "reservedParameters",
      ],
      title: "Endpoint",
    },
    Operation: {
      type: "object",
      additionalProperties: false,
      properties: {
        method: {
          type: "string",
        },
        path: {
          type: "string",
        },
      },
      required: ["method", "path"],
      title: "Operation",
    },
    Parameter: {
      type: "object",
      additionalProperties: false,
      properties: {
        name: {
          type: "string",
        },
        required: {
          type: "boolean",
        },
        operationParameter: {
          $ref: "#/definitions/OperationParameter",
        },
      },
      required: ["name", "required"],
      title: "Parameter",
    },
    OperationParameter: {
      type: "object",
      additionalProperties: false,
      properties: {
        in: {
          type: "string",
        },
        name: {
          type: "string",
        },
      },
      required: ["in", "name"],
      title: "OperationParameter",
    },
    ProcessingSpecification: {
      type: "object",
      additionalProperties: false,
      properties: {
        environment: {
          type: "string",
        },
        value: {
          type: "string",
        },
        timeoutMs: {
          type: "integer",
        },
      },
      required: ["environment", "timeoutMs", "value"],
      title: "ProcessingSpecification",
    },
    ReservedParameter: {
      type: "object",
      additionalProperties: false,
      properties: {
        name: {
          type: "string",
        },
        fixed: {
          type: "string",
        },
      },
      required: ["fixed", "name"],
      title: "ReservedParameter",
    },
  },
};
