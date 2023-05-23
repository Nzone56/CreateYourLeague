import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Box,
   Button,
   Grid,
   Input,
   Typography,
} from '@mui/material'
import React, { useContext, useMemo } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'

export const MatchWeek = ({ matchweek, index, theme }) => {
   const { league } = useContext(LeagueContext)
   const handleInputChange = () => {}
   const memorizedSchedules = useMemo(() => {
      return (
         <Box sx={{ width: '100%' }} margin={1}>
            <Accordion>
               <AccordionSummary sx={{ backgroundColor: theme.secondary }}>
                  <Typography
                     align="center"
                     sx={{
                        width: '100%',
                        color: `${theme.Other2}`,
                        fontSize: '20px',
                        fontWeight: 'bold',
                     }}
                  >
                     MatchWeek #{index + 1}
                  </Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <Typography component="ul" sx={{ listStyleType: 'none' }}>
                     {matchweek.map((match) => {
                        const club1 = league.clubs.find(
                           (club) => club.code === match[0]
                        )
                        const club2 = league.clubs.find(
                           (club) => club.code === match[1]
                        )

                        return (
                           <li key={match[0] + match[1]}>
                              {
                                 <Grid
                                    sx={{
                                       borderTop: '0.5px solid #eee',
                                       borderBottom: '0.5px solid #eee',
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
                                          // '& img:first-child': {
                                          //    filter: 'invert(100%)',
                                          //    fill: 'white',
                                          // },
                                       },
                                    }}
                                 >
                                    <Box
                                       sx={{
                                          display: 'flex',
                                          flexDirection: 'row',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          width: '66%',
                                       }}
                                    >
                                       <Box
                                          sx={{
                                             display: 'flex',
                                             alignItems: 'center',
                                             justifyContent: 'flex-end',
                                             width: '28%',
                                          }}
                                       >
                                          <Typography
                                             variant="h6"
                                             component="h6"
                                             mr={1}
                                          >
                                             {club1.short_name}
                                          </Typography>
                                          <img
                                             src={`../src/assets/images/PremierLeague/${club1.logo_url}`}
                                             alt={club1.name}
                                             width="25"
                                             height="25"
                                          />
                                       </Box>

                                       <Box
                                          sx={{
                                             display: 'flex',
                                             justifyContent: 'center',
                                             width: '10%',
                                          }}
                                       >
                                          <Input
                                             value={'-'}
                                             onChange={handleInputChange}
                                             inputProps={{
                                                maxLength: 2,
                                                inputMode: 'numeric',
                                             }}
                                             sx={{
                                                backgroundColor:
                                                   theme.secondary,
                                                borderRight: '1px solid white',
                                                color: theme.Other2,
                                                maxWidth: '30px',
                                                '& input': {
                                                   textAlign: 'center',
                                                },
                                             }}
                                          />
                                          <Input
                                             value={'-'}
                                             onChange={handleInputChange}
                                             inputProps={{
                                                maxLength: 2,
                                                inputMode: 'numeric',
                                             }}
                                             sx={{
                                                backgroundColor:
                                                   theme.secondary,
                                                color: theme.Other2,
                                                maxWidth: '30px',
                                                '& input': {
                                                   textAlign: 'center',
                                                },
                                             }}
                                          />
                                       </Box>
                                       <Box
                                          sx={{
                                             display: 'flex',
                                             alignItems: 'center',
                                             justifyContent: 'flex-start',
                                             width: '28%',
                                          }}
                                       >
                                          <img
                                             src={`../src/assets/images/PremierLeague/${club2.logo_url}`}
                                             alt={club2.short_name}
                                             width="25"
                                             height="25"
                                          />
                                          <Typography
                                             variant="h6"
                                             component="h6"
                                             ml={1}
                                          >
                                             {club2.short_name}
                                          </Typography>
                                       </Box>
                                    </Box>
                                    <Box
                                       sx={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'flex-start',
                                          width: '20%',
                                       }}
                                    >
                                       <img
                                          src={`../src/assets/images/stadium.png`}
                                          alt={club1.name}
                                          width="25"
                                          height="25"
                                       />
                                       <Typography
                                          variant="subtitle1"
                                          component="span"
                                          ml={2}
                                       >
                                          {club1.stadium},
                                       </Typography>
                                       <Typography
                                          variant="subtitle1"
                                          component="span"
                                          sx={{ fontWeight: 'bold' }}
                                       >
                                          {club1.city}
                                       </Typography>
                                    </Box>
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
                              }
                           </li>
                        )
                     })}
                  </Typography>
               </AccordionDetails>
            </Accordion>
         </Box>
      )
   }, [matchweek])

   return memorizedSchedules
}
