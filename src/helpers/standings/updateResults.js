import { ClubStatsTemplate } from '../../assets/data'
import { getLogoNextFixture } from './getNextFixture'
import { createForm } from './limitedStack'

export const updateResults = (schedules, teams) => {
   teams = resetSeasonData(teams, schedules)
   searchResults(schedules, teams)
   return teams
}

const resetSeasonData = (teams, schedules) => {
   return teams.map((team) => {
      return {
         ...team,
         seasonData: {
            ...ClubStatsTemplate,
            form: createForm(),
            next_fixture: getLogoNextFixture(team, schedules, teams),
         },
      }
   })
}
const searchResults = (schedules, teams) => {
   let club1 = []
   let club2 = []
   for (let i = 0; i < 38; i++) {
      for (let j = 0; j < 10; j++) {
         // Match was played
         if (schedules[i][j][1] !== '-' && schedules[i][j][2] !== '-') {
            club1 = teams.find((team) => {
               return team.code === schedules[i][j][0]
            }) // Get club 1
            club2 = teams.find((team) => {
               return team.code === schedules[i][j][3]
            }) // Get club 2
            updateSeasonData(
               club1,
               club2,
               { match: schedules[i][j] },
               schedules,
               teams
            )
         }
      }
   }
}

const updateSeasonData = (club1, club2, { match }, schedules, teams) => {
   //Club1 update
   club1.seasonData.games_played++
   club1.seasonData.home_games_played++
   club1.seasonData.next_fixture = getLogoNextFixture(club1, schedules, teams)

   //Club2 update
   club2.seasonData.games_played++
   club2.seasonData.away_games_played++
   club2.seasonData.next_fixture = getLogoNextFixture(club2, schedules, teams)

   //Club1 won the match
   if (match[1] > match[2]) {
      console.log('uwu?')
      //Club1 update [WINNER]
      club1.seasonData.wins++
      club1.seasonData.home_wins++

      club1.seasonData.goals_scored += parseInt(match[1])
      club1.seasonData.home_goals_scored += parseInt(match[1])

      club1.seasonData.goals_conceded += parseInt(match[2])
      club1.seasonData.home_goals_conceded += parseInt(match[2])

      club1.seasonData.goals_difference =
         club1.seasonData.goals_scored - club1.seasonData.goals_conceded

      club1.seasonData.points += 3
      club1.seasonData.home_points += 3
      club1.seasonData.form.push('W')
      //Club2 update [LOOSER]
      club2.seasonData.losses++
      club2.seasonData.away_losses++

      club2.seasonData.goals_scored += parseInt(match[2])
      club2.seasonData.away_goals_scored += parseInt(match[2])

      club2.seasonData.goals_conceded += parseInt(match[1])
      club2.seasonData.away_goals_conceded += parseInt(match[1])

      club2.seasonData.goals_difference =
         club2.seasonData.goals_scored - club2.seasonData.goals_conceded
      club2.seasonData.form.push('L')

      if (match[2] === 0) {
         club1.seasonData.clean_sheet++
      }
   }
   //Club2 won the match
   if (match[2] > match[1]) {
      //Club2 update [WINNER]
      club2.seasonData.wins++
      club2.seasonData.away_wins++

      club2.seasonData.goals_scored += parseInt(match[2])
      club2.seasonData.away_goals_scored += parseInt(match[2])

      club2.seasonData.goals_conceded += parseInt(match[1])
      club2.seasonData.away_goals_conceded += parseInt(match[1])

      club2.seasonData.goals_difference =
         club2.seasonData.goals_scored - club2.seasonData.goals_conceded

      club2.seasonData.points += 3
      club2.seasonData.away_points += 3
      club2.seasonData.form.push('W')
      //Club1 update [LOOSER]

      club1.seasonData.losses++
      club1.seasonData.home_losses++

      club1.seasonData.goals_scored += parseInt(match[1])
      club1.seasonData.home_goals_scored += parseInt(match[1])

      club1.seasonData.goals_conceded += parseInt(match[2])
      club1.seasonData.home_goals_conceded += parseInt(match[2])

      club1.seasonData.goals_difference =
         club1.seasonData.goals_scored - club1.seasonData.goals_conceded

      club1.seasonData.form.push('L')

      if (match[1] === 0) {
         club2.seasonData.clean_sheet++
      }
   }
   // TIE
   if (match[1] === match[2]) {
      //Club2 update [TIE]
      club2.seasonData.draws++
      club2.seasonData.away_draws++

      club2.seasonData.goals_scored += parseInt(match[2])
      club2.seasonData.away_goals_scored += parseInt(match[2])

      club2.seasonData.goals_conceded += parseInt(match[1])
      club2.seasonData.away_goals_conceded += parseInt(match[1])

      club2.seasonData.goals_difference =
         club2.seasonData.goals_scored - club2.seasonData.goals_conceded

      club2.seasonData.points += 1
      club2.seasonData.away_points += 1
      club2.seasonData.form.push('D')

      //Club1 update [TIE]

      club1.seasonData.draws++
      club1.seasonData.home_draws++

      club1.seasonData.goals_scored += parseInt(match[1])
      club1.seasonData.home_goals_scored += parseInt(match[1])

      club1.seasonData.goals_conceded += parseInt(match[2])
      club1.seasonData.home_goals_conceded += parseInt(match[2])

      club1.seasonData.goals_difference =
         club1.seasonData.goals_scored - club1.seasonData.goals_conceded

      club1.seasonData.points += 1
      club1.seasonData.home_points += 1
      club1.seasonData.form.push('D')

      if (match[2] === 0) {
         club1.seasonData.clean_sheet++
      }
      if (match[1] === 0) {
         club2.seasonData.clean_sheet++
      }
   }
}
