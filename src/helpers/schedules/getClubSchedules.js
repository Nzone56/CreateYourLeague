export const getClubSchedules = (schedules, club, isPlayed) => {
   const playedMatches = []
   const upcomingMatches = []

   schedules.forEach((matchweek, matchweekIndex) => {
      matchweek.forEach((match, matchIndex) => {
         if (match[0] === club.code || match[3] === club.code) {
            if (match[1] !== '-' && match[2] !== '-') {
               playedMatches.push({
                  match,
                  matchweekIndex,
                  matchIndex,
               })
            } else {
               upcomingMatches.push({
                  match,
                  matchweekIndex,
                  matchIndex,
               })
            }
         }
      })
   })

   return isPlayed ? playedMatches : upcomingMatches
}
