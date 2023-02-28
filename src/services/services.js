import { getData } from "."

export function getUser(id) {
  return getData(id)
}

export function getSessions(id) {
  return getData(id, "average-sessions")
}

export function getActivity(id) {
  return getData(id, "activity")
}

export function getPerformance(id) {
  return getData(id, "performance")
}


