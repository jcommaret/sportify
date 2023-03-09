/** This file is used to define all services that will be used in the application**/

/** API_URL LOCALHOST, change this when in production */
const API_URL = "http://localhost:3000/user"

/**
 * This function to create a fetch request to the API and return the data in json format
 * @param {string} API_URL api public url
 * @param {number} id from useParam
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
