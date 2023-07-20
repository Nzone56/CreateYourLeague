import { Box, Typography } from '@mui/material'
import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'

export const Title = () => {
   const { league } = useContext(LeagueContext)
   return (
      <Box
         sx={{
            maxWidth: '100%',
            height: '100px',
            display: 'flex',
            margin: '1% 5%',
            justifyContent: 'center',
         }}
      >
         <picture
            sx={{
               width: '100%',
               height: '100%',
            }}
         >
            <img
               src={`/assets/images/leagues/${league.logo_url}`}
               alt="League logo"
               style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
               }}
            />
         </picture>
         <Typography
            component="h2"
            variant="h2"
            sx={{
               display: 'flex',
               alignItems: 'center',
               color: `${league.theme.secondary}`,
               margin: '0% 2%',
            }}
         >
            {league.competition} {league.season}
         </Typography>
      </Box>
   )
}
