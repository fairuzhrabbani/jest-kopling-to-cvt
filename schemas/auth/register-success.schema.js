export const registerSuccessSchema = {
  type: 'object',
  properties: {
    success: {
      type: 'boolean',
    },
    message: {
      type: 'string',
    },
    data: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
        },
        name: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        role: {
          type: 'string',
        },
        created_at: {
          type: 'string',
        },
        updated_at: {
          type: 'string',
        },
      },
      required: ['id', 'name', 'email', 'role', 'created_at', 'updated_at'],
      additionalProperties: false,
    },
  },
  required: ['success', 'message', 'data'],
  additionalProperties: false,
};
