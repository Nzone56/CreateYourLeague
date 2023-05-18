import {
   Accordion,
   AccordionSummary,
   Box,
   Grid,
   Typography,
} from '@mui/material'
import React, { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'

export const MatchWeek = ({ matchweek, index }) => {
   const { league } = useContext(LeagueContext)
   return (
      <Accordion mt={2}>
         <AccordionSummary>
            <Typography> MatchWeek {index + 1} </Typography>
         </AccordionSummary>
         {matchweek.map((match) => {
            const club1 = league.clubs.find((club) => club.code === match[0])
            const club2 = league.clubs.find((club) => club.code === match[1])

            return (
               <Grid
                  container
                  key={match[0] + match[1]}
                  sx={{
                     justifyContent: 'space-between',
                  }}
               >
                  <Grid item>
                     {
                        <Grid
                           m={2}
                           sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              width: '100%',
                           }}
                        >
                           <Typography variant="body1">{club1.name}</Typography>
                           <img
                              src={`../src/assets/images/PremierLeague/${club1.logo_url}`}
                              alt={club1.name}
                              width="20"
                              height="20"
                           />
                           <Typography variant="body1"> 0-0 </Typography>
                           <img
                              src={`../src/assets/images/PremierLeague/${club2.logo_url}`}
                              alt={club2.name}
                              width="20"
                              height="20"
                           />
                           <Typography variant="body1">{club2.name}</Typography>
                        </Grid>
                     }
                  </Grid>
               </Grid>
            )
         })}
      </Accordion>
   )
}
