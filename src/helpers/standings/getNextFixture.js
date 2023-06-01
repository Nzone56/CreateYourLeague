const getNextFixture = (club, matchweek, schedules) => {
   // TODO: CHANGE THE LOGIC TO SEARCH THE NEXT NOT PLAYED MATCH INSTEAD OF COUNTING MATCHSPLAYED
   if (!schedules) return null

   const matches = schedules[matchweek]

   const nextMatch = matches.find((match) => {
      return match[0] === club.code || match[3] === club.code
   })

   if (nextMatch) {
      return nextMatch[0] === club.code ? nextMatch[3] : nextMatch[0]
   }

   return null // UNREACHEABLE CODE
}
export const getLogoNextFixture = (club, schedules, teams) => {
   const nextCode = getNextFixture(
      club,
      club.seasonData.games_played,
      schedules
   )

   const nextFixture = teams.find((club) => {
      return club.code === nextCode
   })

   return nextFixture?.name
}
