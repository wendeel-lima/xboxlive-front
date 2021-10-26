export const Api = {
  baseUrl: "https://xboxlive-backend.herokuapp.com",

  // Endpoint - Login

  loginUrl: () => Api.baseUrl + "/login",

  // Endpoint - Game

  readAllGameUrl: () => Api.baseUrl + "/game",

  readByIdGameUrl: (id) => Api.baseUrl + "/game/" + id,

  createGameUrl: () => Api.baseUrl + "/game",

  updateGameUrl: (id) => Api.baseUrl + "/game/" + id,

  deleteGameUrl: (id) => Api.baseUrl + "/game/" + id,

  // Endpoint - User

  readAllUserUrl: () => Api.baseUrl + "/user",

  readByIdUserUrl: (id) => Api.baseUrl + "/user/" + id,

  createUserUrl: () => Api.baseUrl + "/user",

  updateUserUrl: (id) => Api.baseUrl + "/user/" + id,

  deleteUserUrl: (id) => Api.baseUrl + "/user/" + id,

  // Endpoint - Genre

  readAllGenreUrl: () => Api.baseUrl + "/genre",

  readByIdGenreUrl: (id) => Api.baseUrl + "/genre/" + id,

  createGenreUrl: () => Api.baseUrl + "/genre",

  updateGenreUrl: (id) => Api.baseUrl + "/genre/" + id,

  deleteGenreUrl: (id) => Api.baseUrl + "/genre/" + id,

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
        ...true(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  // PATCH
  buildApiPatchRequest: (url, body, auth) =>
    fetch(url, {
      method: "PATCH",
      headers: new Headers({
        "Content-type": "application/json",
        ...true(auth ? Api.authHeader() : {}),
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
