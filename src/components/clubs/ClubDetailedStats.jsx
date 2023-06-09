import { Divider, List, ListSubheader, Typography } from '@mui/material'
import { ClubStatItem } from './ClubStatItem'

export const ClubDetailedStats = ({ club, spec }) => {
   const data = {
      Home: club.seasonData.home,
      Away: club.seasonData.away,
      General: club.seasonData,
   }

   const stats = data[spec] || {}
   return (
      <List
         sx={{
            border: '1px solid #eee',
            borderTop: `5px solid ${club.bg_color}`,
            margin: '40px',
         }}
      >
         <ListSubheader>
            <Typography
               variant="subtitle1"
               sx={{ fontWeight: 'bold', color: 'black', fontSize: '18px' }}
            >
               {spec}
            </Typography>
         </ListSubheader>
         <Divider />
         <ClubStatItem label="Games Played" value={stats.games_played} />
         <ClubStatItem label="Wins" value={stats.wins} />
         <ClubStatItem label="Draws" value={stats.draws} />
         <ClubStatItem label="Losses" value={stats.losses} />
         <ClubStatItem label="Goals Scored" value={stats.goals_scored} />
         <ClubStatItem
            label="Goals Scored per Match"
            value={stats.goals_scored / stats.games_played || 0}
         />
         <ClubStatItem label="Goals Conceded" value={stats.goals_conceded} />
         <ClubStatItem
            label="Goals Conceded per Match"
            value={stats.goals_conceded / stats.games_played || 0}
         />
         <ClubStatItem label="Points" value={stats.points} />
      </List>
   )
}
