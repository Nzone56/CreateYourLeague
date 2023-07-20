import { Box, Typography } from '@mui/material'
import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { ChampionsTable } from './ChampionsTable'
import { MoreInfo } from './MoreInfo'
import { Title } from './Title'
import { CurrentChampion } from './CurrentChampion'
import { StandingsPrev } from './StandingsPrev'
import { TableHeaderTitle } from './TableHeaderTitle'

export const LeagueHome = () => {
   const { league } = useContext(LeagueContext)
   console.log(league.clubs)
   return (
      <Box
         sx={{
            width: '100%',
            background: `${league.theme.Other2}`,
            display: 'flex',
            flexDirection: 'column',
         }}
      >
         <Title />
         <Box
            sx={{
               width: '100%',
               display: 'flex',
            }}
         >
            <Box
               m={2}
               sx={{
                  width: '50%',
               }}
            >
               <TableHeaderTitle title={'CURRENT TABLE'} />
               <StandingsPrev />
               <MoreInfo />
            </Box>

            <Box
               m={2}
               sx={{
                  width: '50%',
               }}
            >
               <TableHeaderTitle title={'HISTORIC TABLE'} />
               <ChampionsTable />
               <CurrentChampion />
            </Box>
         </Box>
      </Box>
   )
}
