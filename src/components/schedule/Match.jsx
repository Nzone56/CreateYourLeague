import { Box, Button, Grid } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { Team } from './Team'
import { Stadium } from './Stadium'
import { MatchResult } from './MatchResult'

export const Match = ({ match, theme, id }) => {
   const { league } = useContext(LeagueContext)
   const [result, setResult] = useState([match[1], match[2]])
   const club1 = league.clubs.find((club) => club.code === match[0])
   const club2 = league.clubs.find((club) => club.code === match[3])

   return (
      <li>
         <Grid
            sx={{
               borderBottom: '2px solid #eee',
               display: 'flex',
               flexDirection: 'row',
               alignItems: 'center',
               justifyContent: 'space-between',
               width: '100%',
               minHeight: '55px',
               '&:hover': {
                  backgroundColor: theme.tertiary,
                  '& *': {
                     color: theme.Other2,
                  },
               },
            }}
         >
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56%',
               }}
            >
               <Team club={club1} reverseOrder={true} />

               <MatchResult
                  theme={theme}
                  result={result}
                  setResult={setResult}
                  matchId={id}
               />
               <Team club={club2} reverseOrder={false} />
            </Box>
            <Stadium club={club1} />
            <Button
               sx={{
                  margin: '5px',
                  height: '35px',
                  color: theme.Other2,
                  backgroundColor: theme.secondary,
                  '&:hover': {
                     backgroundColor: theme.secondary,
                  },
               }}
            >
               More
            </Button>
         </Grid>
      </li>
   )
}
