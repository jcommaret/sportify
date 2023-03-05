import { getData } from "."

export function getUser(id) {
  return getData(id).then(function (data) {
    const userInfos = data.data.userInfos
    return userInfos
  })
}

export function getSessions(id) {
  return getData(id, "average-sessions").then(function (data) {
    const userSessions = data.data.sessions
    return userSessions
  })
}

export function getActivity(id) {
  return getData(id, "activity").then(function (data) {
    const userActivity = data.data.sessions
    return userActivity
  })
}

export function getPerformance(id) {
  return getData(id, "performance").then(function (data) {
    const userPerformance = data.data.data
    return userPerformance
  })
}

export function getObjectifs(id) {
  return getData(id).then(function (data) {
    const userObjectifs = data.data
    console.log("UserObjectifs :", userObjectifs)
    return userObjectifs
  })
}

export function getKeyFigures(id) {
  return getData(id).then(function (data) {
    const userKeyFigures = data.data.keyData
    return userKeyFigures
  })
}
