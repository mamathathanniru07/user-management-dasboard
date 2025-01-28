const baseUrl = "https://jsonplaceholder.typicode.com";

export const ApiRequest = async ({ path, options }, onSucess, onFailure) => {
  let headers = { "Content-Type": "application/json" };
  try {
    if (options?.headers) {
      headers = { ...headers, ...options.headers };
    }
    if (options?.body) {
      options.body = JSON.stringify(options.body);
    }
    options.headers = headers;

    const res = await fetch(baseUrl + path, options);
    onSucess(res);
  } catch (e) {
    onFailure(e);
  }
};

export const ApiMethods = {
  get: "GET",
  put: "PUT",
  post: "POST",
  delete: "DELETE",
};

export const ApiStatusCodes = {
  success: 200,
  created: 201,
};
