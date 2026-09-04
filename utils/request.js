/*
 * Object containing methods for making HTTP requests (GET, POST, PUT, PATCH, DELETE) to a specified endpoint.
 * Each method returns a promise that resolves to an object containing the response status, headers, and body.
 * The request body is automatically stringified for POST, PUT, and PATCH requests.
 * The base URL for the requests is taken from the environment variable `BASE_URL`.
 */
const request = {
  /*
   * get: async function that sends a GET request to a specified endpoint using the Fetch API.
   */
  get: async (endpoint, options = {}) => {
    return sendRequest('GET', endpoint, options);
  },

  /*
   * post: async function that sends a POST request to a specified endpoint using the Fetch API.
   */
  post: async (endpoint, body = null, options = {}) => {
    return sendRequest('POST', endpoint, {
      ...options,
      body: JSON.stringify(body),
    });
  },

  /*
   * put: async function that sends a PUT request to a specified endpoint using the Fetch API.
   */
  put: async (endpoint, body = null, options = {}) => {
    return sendRequest('PUT', endpoint, {
      ...options,
      body: JSON.stringify(body),
    });
  },

  /*
   * patch: async function that sends a PATCH request to a specified endpoint using the Fetch API.
   */
  patch: async (endpoint, body = null, options = {}) => {
    return sendRequest('PATCH', endpoint, {
      ...options,
      body: JSON.stringify(body),
    });
  },

  /*
   * delete: async function that sends a DELETE request to a specified endpoint using the Fetch API.
   */
  delete: async (endpoint, options = {}) => {
    return sendRequest('DELETE', endpoint, options);
  },
};

/*
 * async function that sends an HTTP request to a specified endpoint using the Fetch API.
 * It takes the HTTP method, endpoint, and an optional options object as parameters.
 * The function constructs the full URL using the base URL from the environment variable `BASE_URL` and the provided endpoint.
 * It sets the request headers to include 'Content-Type': 'application/json' and any additional headers provided in the options object.
 * The function returns a promise that resolves to an object containing the response status, headers, and body (parsed as JSON if possible).
 */
async function sendRequest(method, endpoint, options = {}) {
  const url = `${process.env.BASE_URL}${endpoint}`;

  const requestHeaders = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  /*
   * response: The response from the Fetch API call, which includes the status, headers, and body of the HTTP response.
   */
  const response = await fetch(url, {
    method,
    headers: requestHeaders,
    ...options,
  });

  /*
   * body: The body of the HTTP response, parsed as JSON if possible. If the response body cannot be parsed as JSON, it will be set to null.
   */
  let body;

  /*
   * try-catch block to handle the parsing of the response body as JSON. If the response body is not valid JSON, it will catch the error and set the body to null.
   */
  try {
    body = await response.json();
  } catch {
    body = null;
  }

  /*
   * return: An object containing the response status, headers, and body of the HTTP response. The status is a number representing the HTTP status code, the headers are an object containing the response headers, and the body is the parsed JSON response body or null if it could not be parsed.
   */
  return {
    status: response.status,
    headers: response.headers,
    body,
    requestHeaders,
  };
}

export default request;
