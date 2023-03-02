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
    //console.log("activity :", userActivity)
    return userActivity
  })
}

export function getPerformance(id) {
  return getData(id, "performance").then(function (data) {
    const userPerformance = data.data.data
    // console.log("performance :", userPerformance)
    return userPerformance
  })
}

export function getObjectifs(id) {
  return getData(id).then(function (data) {
    const userInfos = data.data.score
    return userInfos
  })
}


