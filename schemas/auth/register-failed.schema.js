export const registerErrorSchema = {
  type: 'object',
  required: ['success', 'message'],
  properties: {
    success: {
      type: 'boolean',
      const: false,
    },

    message: {
      type: 'string',
      minLength: 1,
    },
  },

  additionalProperties: false,
};
