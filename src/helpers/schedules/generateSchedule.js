export const generateSchedule = ({ teams }) => {
   const numberOfTeams = teams.length
   const matchSchedule = []

   // Shuffle the array for aleatority
   teams = shuffleArray(teams)

   // Generate first 19 matchweeks
   for (let i = 0; i < numberOfTeams - 1; i++) {
      const matchDay = []

      // For each matchweek
      for (let j = 0; j < numberOfTeams / 2; j++) {
         const team1 = teams[j]
         const team2 = teams[numberOfTeams - 1 - j]

         // Home and away restrictions
         const prevMatch = matchDay[j - 1]
         const prevTeam = prevMatch ? prevMatch[0] : null

         // Alternate the order of teams each matchweek
         if (j % 2 === 0) {
            matchDay.push([team1, team2])
         } else {
            matchDay.push([team2, team1])
         }
      }

      matchSchedule.push(matchDay)

      // Rotation of teams
      teams.splice(1, 0, teams.pop())
   }

   // Generate last 19 matchweeks
   for (let i = 0; i < numberOfTeams - 1; i++) {
      const matchDay = []

      // For each matchweek
      for (let j = 0; j < numberOfTeams / 2; j++) {
         const team1 = teams[numberOfTeams - 1 - j]
         const team2 = teams[j]

         // Home and away restrictions
         const prevMatch = matchDay[j - 1]
         const prevTeam = prevMatch ? prevMatch[0] : null

         // Alternate the order of teams each matchweek
         if (j % 2 === 0) {
            matchDay.push([team1, team2])
         } else {
            matchDay.push([team2, team1])
         }
      }

      matchSchedule.push(matchDay)

      // Rotation of teams
      teams.splice(1, 0, teams.pop())
   }

   return matchSchedule
}

const shuffleArray = (array) => {
   const shuffledArray = array.slice()
   for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledArray[i], shuffledArray[j]] = [
         shuffledArray[j],
         shuffledArray[i],
      ]
   }
   return shuffledArray
}
