export const Api = {
  baseUrl: "http://localhost:3000",

  // Endpoint - Login

  loginUrl: () => Api.baseUrl + "/login",

  // Endpoint - Product

  readAllUrl: () => Api.baseUrl + "/game",

  readByIdUrl: (id) => Api.baseUrl + "/game/" + id,

  createGameUrl: () => Api.baseUrl + "/game",

  updateUrl: (id) => Api.baseUrl + "/game/" + id,

  deleteUrl: (id) => Api.baseUrl + "/game/" + id,

  // Auth Header

  authHeader: () => ({
    Authorization: "Bearer " + localStorage.getItem("JWT"),
  }),

  // GET
  buildApiGetRequest: (url, auth) =>
    fetch(url, {
      method: "GET",
      headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),

  // POST
  buildApiPostRequest: (url, body, auth) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  // PATCH
  buildApiPatchRequest: (url, body, auth) =>
    fetch(url, {
      method: "PATCH",
      headers: new Headers({
        "Content-type": "application/json",
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  // DELETE
  buildApiDeleteRequest: (url, auth) =>
    fetch(url, {
      method: "DELETE",
      headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),
};