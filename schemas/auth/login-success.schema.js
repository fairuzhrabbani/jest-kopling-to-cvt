export const loginSuccessSchema = {
  type: 'object',
  required: ['success', 'message', 'data'],
  properties: {
    success: {
      type: 'boolean',
    },

    message: {
      type: 'string',
    },

    data: {
      type: 'object',
      required: ['accessToken', 'user'],
      properties: {
        accessToken: {
          type: 'string',
          minLength: 1,
        },

        user: {
          type: 'object',
          required: ['id', 'name', 'email'],
          properties: {
            id: {
              type: 'integer',
            },

            name: {
              type: 'string',
            },

            email: {
              type: 'string',
              format: 'email',
            },
          },

          additionalProperties: false,
        },
      },

      additionalProperties: false,
    },
  },

  additionalProperties: false,
};
