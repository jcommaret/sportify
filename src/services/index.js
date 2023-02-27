const API_URL = "http://localhost:3000/user"

// Routes
export function getData(id, url) {
  if (url) {
    return fetch(`${API_URL}/${id}/${url}`).then((res) => res.json())
  } else {
    return fetch(`${API_URL}/${id}`).then((res) => res.json())
  }
}

/// user/:id
// Infos utilisateur

// user/:id
// l’objectif de la journée

// user/:id/activity
// DailyWork

// /user/:id/activity
// Proteines / Glucides / Lipides / Calories

// user/:id/average-sessions
// Infos sessions

// /user/:id/performance
// Infos Activity
