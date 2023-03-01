const API_URL = "http://localhost:3000/user"

// Routes
export function getData(id, url) {
  if (url) {
    return fetch(`${API_URL}/${id}/${url}`).then(
      async (res) => await res.json()
    )
  } else {
    return fetch(`${API_URL}/${id}`).then(async (res) => await res.json())
  }
}
