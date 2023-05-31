export const createRows = (teams) => {
   const rows = teams.map((team) => {
      return createData(
         team.id,
         team.logo_url,
         team.position,
         team.name,
         team.seasonData.games_played,
         team.seasonData.wins,
         team.seasonData.draws,
         team.seasonData.losses,
         team.seasonData.goals_scored,
         team.seasonData.goals_conceded,
         team.seasonData.goals_difference,
         team.seasonData.points,
         team.seasonData.form.stack,
         team.seasonData.next_fixture
      )
   })

   return rows
}
export const createData = (
   id,
   logo,
   Position,
   Club,
   Played,
   Won,
   Draw,
   Lost,
   GF,
   GA,
   GD,
   Points,
   Form,
   Next
) => {
   return {
      id,
      logo,
      Position,
      Club,
      Played,
      Won,
      Draw,
      Lost,
      GF,
      GA,
      GD,
      Points,
      Form,
      Next,
   }
}

export const headers = [
   'Position',
   'Club',
   'Played',
   'Won',
   'Draw',
   'Lost',
   'GF',
   'GA',
   'GD',
   'Points',
   'Form',
   'Next',
]
