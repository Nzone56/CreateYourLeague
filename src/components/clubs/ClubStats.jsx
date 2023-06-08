import { Box } from '@mui/material'
import { ClubStatBox } from './ClubStatBox'
import { ClubDetailedStats } from './ClubDetailedStats'

export const ClubStats = ({ club }) => {
   const statBoxes = [
      { name: 'Position', stat: club.position, textColor: club.text_color },
      { name: 'Matches played', stat: club.seasonData.games_played },
      { name: 'Points', stat: club.seasonData.points },
      { name: 'Wins', stat: club.seasonData.wins },
      { name: 'Draws', stat: club.seasonData.draws },
      { name: 'Losses', stat: club.seasonData.losses },
      { name: 'Goals', stat: club.seasonData.goals_scored },
      { name: 'Goals Conceded', stat: club.seasonData.goals_conceded },
      { name: 'Clean sheets', stat: club.seasonData.clean_sheets },
   ]
   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
         }}
      >
         <Box m={2} sx={{ display: 'flex' }}>
            {statBoxes.map((box, index) => (
               <ClubStatBox
                  key={index}
                  name={box.name}
                  stat={box.stat}
                  color={club.bg_color}
                  textColor={box.textColor}
               />
            ))}
         </Box>
         <Box sx={{ display: 'flex' }}>
            <ClubDetailedStats />
            <ClubDetailedStats />
         </Box>
      </Box>
   )
}
