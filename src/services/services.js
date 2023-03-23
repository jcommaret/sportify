import { getData } from "."

/**
* function to get user data from API
* @param {number} id 
* @returns userInfos
*/
export function getUser(id) {
  return getData(id).then(function (data) {
    const userInfos = data.data.userInfos
    return userInfos
  })
}

/**
* Function to get sessions data from API
* @param {number} id 
* @param {string} url
* Also add a letter to each day of the week
* @param {array} jourLetter using the index of the jourletter Array  to get the letter
* @returns userSessions
*/
export function getSessions(id) {
  const jourLetter = ["L", "M", "M", "J", "V", "S", "D"]
  return getData(id, "average-sessions").then(function (data) {
    const userSessions = data.data.sessions.map((item, index) => {
      return { ...item, jourLetter: jourLetter[index] }
    })
    return userSessions
  })
}

/**
* Function to get Activity data from API
* @param {number} id 
* @param {string} url
* Also add a letter to each day of the week
* @param {array} jourNumber using the item.day to get the number of the day
* @returns userActivity
*/
export function getActivity(id) {
  return getData(id, "activity").then(function (data) {
    const userActivity = data.data.sessions.map((item) => {
      return {
        ...item,
        jourNumber: new Date(item.day).getDate(),
        Kilograms: item.kilogram,
        Calories: item.calories,
      }
    })
    return userActivity
  })
}

/**
 * Function to get Performance data from API
 * @param {number} id 
 * @param {string} url
 * @param {array} kindActivity using item.kind correspondance to get the kind of activity related to the data corresponding index
 * @returns userPergormance
 */
export function getPerformance(id) {
  return getData(id, "performance").then(function (data) {
    const userPerformance = data.data.data.map((item) => {
      return { ...item, kindActivity: getKind(data.data.kind[item.kind]) }
    })
    return userPerformance
  })
}

function getKind(kind) {
  switch (kind) {
    case "cardio":
      return "Cardio"
    case "energy":
      return "Energie"
    case "endurance":
      return "Endurance"
    case "strength":
      return "Force"
    case "speed":
      return "Vitesse"
    case "intensity":
      return "Intensité"
    default:
  }
} 

/**
 * Function to get Objectif data from API
 * @param {number} id 
 * @param {string} url
 * @returns userScore
 * Then, check if score is defined or todayScore is defined, and if score is defined, return score, else return todayScore (to fix api problem)
 */

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

/**
 * Function to get Performance data from API
 * @param {number} id
 * @returns userKeyFigures
 * get the keyData from the API using user id as parameter
 */
export function getKeyFigures(id) {
  return getData(id).then(function (data) {
    const userKeyFigures = data.data.keyData
    return userKeyFigures
  })
}
