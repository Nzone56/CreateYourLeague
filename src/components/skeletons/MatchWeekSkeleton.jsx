import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Box,
   Skeleton,
   Typography,
} from '@mui/material'

export default function MatchWeekSkeleton({ schedules, theme }) {
   return (
      <Box sx={{ width: '100%' }}>
         {schedules.map((matchweek, index) => (
            <Box sx={{ width: '100%' }} margin={1} key={index}>
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
                        ...
                     </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography component="ul" sx={{ listStyleType: 'none' }}>
                        {matchweek.map((match) => (
                           <Skeleton variant="text" key={match[0] + match[1]} />
                        ))}
                     </Typography>
                  </AccordionDetails>
               </Accordion>
            </Box>
         ))}
      </Box>
   )
}
