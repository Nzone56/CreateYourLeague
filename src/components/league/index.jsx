import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { Box, Typography } from '@mui/material'
import { InfoItem } from './infoItem'

export const League = () => {
   const { league } = useContext(LeagueContext)

   return (
      <Box m={4} sx={{ display: 'flex', height: '100%', alignItems: 'center' }}>
         <Box sx={{ width: '50%' }}>
            <img
               src={`/assets/images/leagues/${league.cardBg_url}`}
               alt="Currents league champions"
               style={{
                  objectFit: 'contain',
                  maxWidth: '100%',
                  display: 'block',
               }}
            />
         </Box>
         <Box m={4} sx={{ width: '50%' }}>
            <Typography
               component="h3"
               variant="h3"
               sx={{
                  textAlign: 'center',
                  color: league.theme.secondary,
                  fontWeight: 'bold',
               }}
            >
               {league.competition}
            </Typography>
            <Box m={4} sx={{ color: league.theme.secondary }}>
               <Typography sx={{ fontWeight: 'bold' }}>
                  LOCATION:
                  <span
                     style={{
                        color: 'black',
                        fontWeight: 'normal',
                        marginLeft: '5px',
                     }}
                  >
                     {league.location}
                  </span>
               </Typography>
               <Typography sx={{ fontWeight: 'bold' }}>
                  SEASON:
                  <span
                     style={{
                        color: 'black',
                        fontWeight: 'normal',
                        marginLeft: '5px',
                     }}
                  >
                     {league.season}
                  </span>
               </Typography>
               <Typography sx={{ fontWeight: 'bold' }}>
                  STARTING DATE:
                  <span
                     style={{
                        color: 'black',
                        fontWeight: 'normal',
                        marginLeft: '5px',
                     }}
                  >
                     {league.starting_date}
                  </span>
               </Typography>
               <Typography sx={{ fontWeight: 'bold' }}>
                  ENDING DATE :
                  <span
                     style={{
                        color: 'black',
                        fontWeight: 'normal',
                        marginLeft: '5px',
                     }}
                  >
                     {league.ending_date}
                  </span>
               </Typography>
               <InfoItem
                  title={'CURRENT CHAMPION'}
                  description={league.current_champion}
               />
               <InfoItem
                  title={'TOTAL MATCHDAYS'}
                  description={league.total_matchdays}
               />
               <InfoItem
                  title={'TOTAL MATCHES'}
                  description={league.total_matches}
               />
               <InfoItem
                  title={'NUMBER OF CLUBS'}
                  description={league.number_of_participating_clubs}
               />
            </Box>
         </Box>
      </Box>
   )
}
