const API_URL = "http://localhost:3000/user"

// Routes
export function getData(id, url) {
  if (url) {
    return fetch(`${API_URL}/${id}/${url}`).then((res) => res.json())
  } else {
    return fetch(`${API_URL}/${id}`).then((res) => res.json())
  }
}
