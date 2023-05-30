// Method that depending on league poijnts / Goal Diff / Goals favor / Goals Against manage league clubs positions
export const getUpdatedTeams = (teams) => {
   let sortedTeams = sortTeams(teams)
   for (let i = 0; i < sortedTeams.length; i++) {
      sortedTeams[i].position = i + 1
   }
   return sortedTeams
}

const sortTeams = (teams) => {
   let sortedTeams = [...teams]
   let isSorted = false

   while (!isSorted) {
      isSorted = true

      for (let i = 0; i < sortedTeams.length - 1; i++) {
         const currentTeam = sortedTeams[i]
         const nextTeam = sortedTeams[i + 1]

         if (compareTeams(currentTeam, nextTeam) > 0) {
            sortedTeams[i] = nextTeam
            sortedTeams[i + 1] = currentTeam
            isSorted = false
         }
      }
   }

   return sortedTeams
}

const compareTeams = (a, b) => {
   // compare by points
   if (a.seasonData.points !== b.seasonData.points) {
      return b.seasonData.points - a.seasonData.points
   }

   // compare by goals-difference
   if (a.seasonData.goals_difference !== b.seasonData.goals_difference) {
      return b.seasonData.goals_difference - a.seasonData.goals_difference
   }

   // compare by goals-scored
   if (a.seasonData.goals_scored !== b.seasonData.goals_scored) {
      return b.seasonData.goals_scored - a.seasonData.goals_scored
   }

   // Compare by goals_conceded
   if (a.seasonData.goals_conceded !== b.seasonData.goals_conceded) {
      return a.seasonData.goals_conceded - b.seasonData.goals_conceded
   }

   // sort alfabetical by name
   return a.name.localeCompare(b.name)
}
