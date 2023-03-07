import { getData } from "."

export function getUser(id) {
  return getData(id).then(function (data) {
    const userInfos = data.data.userInfos
    return userInfos
  })
}

export function getSessions(id) {
  const jourLetter = ["L", "M", "M", "J", "V", "S", "D"]
  return getData(id, "average-sessions").then(function (data) {
    const userSessions = data.data.sessions.map((item, index) => {
      return { ...item, jourLetter: jourLetter[index] }
    })
    return userSessions
  })
}

export function getActivity(id) {
  return getData(id, "activity").then(function (data) {
    const userActivity = data.data.sessions.map((item) => {
      return { ...item, jourNumber: new Date(item.day).getDate() }
    })
    return userActivity
  })
}

export function getPerformance(id) {
  const userPerformanceKind = [
    "Cardio",
    "Energie",
    "Endurance",
    "Force",
    "Vitesse",
    "Intensité",
  ]

  return getData(id, "performance").then(function (data) {
    const userPerformance = data.data.data.map((item, index) => {
      return { ...item, kindActivity: userPerformanceKind[index] }
    })
    return userPerformance
  })
}

export function getObjectifs(id) {
  return getData(id).then(function (data) {
    if (data.data.score !== undefined) {
      const userScore = data.data.score
      return userScore
    } else if (data.data.todayScore !== undefined) {
      const userScore = data.data.todayScore
      return userScore
    }
  })
}

export function getKeyFigures(id) {
  return getData(id).then(function (data) {
    const userKeyFigures = data.data.keyData
    return userKeyFigures
  })
}
