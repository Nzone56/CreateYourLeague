export const GenerateMatchWeek = ({ teams }) => {
   const numberOfTeams = teams.length
   let matchWeek = []
   let match = []
   for (let i = 0; i < numberOfTeams / 2; i++) {
      match = teams.slice(0, 2)
      teams = teams.slice(2)
      matchWeek.push(match)
   }

   return matchWeek
}

export const GenerateSchedule = ({ teams }) => {
   let matchWeek = []
   let matchWeeks = []
   for (let i = 1; i <= 5; i++) {
      matchWeek = GenerateMatchWeek({ teams })
      matchWeeks = matchWeeks.concat([matchWeek])
   }
   return matchWeeks
}
