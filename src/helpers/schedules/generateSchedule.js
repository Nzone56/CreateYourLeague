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
         let homeTeam, awayTeam
         if (i % 2 === 0) {
            homeTeam = team1
            awayTeam = team2
         } else {
            homeTeam = team2
            awayTeam = team1
         }

         // Check if the home or away team has played their maximum consecutive matches
         const prevMatch = matchDay[j - 1]
         const prevHomeTeam = prevMatch ? prevMatch[0] : null
         const prevAwayTeam = prevMatch ? prevMatch[1] : null

         if (
            (prevHomeTeam === homeTeam && prevHomeTeam !== null) ||
            (prevAwayTeam === awayTeam && prevAwayTeam !== null)
         ) {
            // Rotate the teams for this matchweek
            ;[homeTeam, awayTeam] = [awayTeam, homeTeam]
         }

         matchDay.push([homeTeam, awayTeam])
      }

      matchSchedule.push(matchDay)

      // Rotate the teams for the next matchweek
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
         let homeTeam, awayTeam
         if (i % 2 === 0) {
            homeTeam = team1
            awayTeam = team2
         } else {
            homeTeam = team2
            awayTeam = team1
         }

         // Check if the home or away team has played their maximum consecutive matches
         const prevMatch = matchDay[j - 1]
         const prevHomeTeam = prevMatch ? prevMatch[0] : null
         const prevAwayTeam = prevMatch ? prevMatch[1] : null

         if (
            (prevHomeTeam === homeTeam && prevHomeTeam !== null) ||
            (prevAwayTeam === awayTeam && prevAwayTeam !== null)
         ) {
            // Rotate the teams for this matchweek
            ;[homeTeam, awayTeam] = [awayTeam, homeTeam]
         }

         matchDay.push([homeTeam, awayTeam])
      }

      matchSchedule.push(matchDay)

      // Rotate the teams for the next matchweek
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
