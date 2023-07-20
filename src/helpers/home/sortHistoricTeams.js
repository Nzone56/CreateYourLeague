export const sortHistoricTeams = (clubs) => {
   const teams = [...clubs]
   return teams.sort((a, b) => {
      return b.titles === a.titles
         ? b.subtitles - a.subtitles
         : b.titles - a.titles
   })
}
