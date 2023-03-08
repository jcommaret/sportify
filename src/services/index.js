/** This file is used to define all the services that will be used in the application**/

/** API_URL LOCALHOST, chande this when in production */
const API_URL = "http://localhost:3000/user"

/**
 * This function is used to get data from the API
 * @param {*} id from useParam
 * @param {string} API_URL api public url
 * @param {string} url service defined routes
 * @returns data from API
 */

export function getData(id, url) {
  if (url) {
    return fetch(`${API_URL}/${id}/${url}`).then(
      async (res) => await res.json()
    )
  } else {
    return fetch(`${API_URL}/${id}`).then(async (res) => await res.json())
  }
}
