import { createForm } from '../../helpers/standings/limitedStack'

export const ClubStatsTemplate = {
   games_played: 0,
   wins: 0,
   draws: 0,
   losses: 0,
   goals_scored: 0,
   goals_conceded: 0,
   goals_difference: 0,
   clean_sheets: 0,
   points: 0,
   next_fixture: '(H/A)',
   form: createForm(),
   home: {
      games_played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goals_scored: 0,
      goals_conceded: 0,
      points: 0,
   },
   away: {
      games_played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goals_scored: 0,
      goals_conceded: 0,
      points: 0,
   },
}
