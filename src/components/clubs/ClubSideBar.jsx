import { Box } from '@mui/material'

export const ClubSideBar = ({ clubs, theme }) => {
   return (
      <Box
         sx={{ backgroundColor: theme.secondary, width: '25%', height: 'auto' }}
      >
         {clubs.map((club) => (
            <Box m={2} sx={{ display: 'flex', flexDirection: 'row' }}>
               <img
                  src={`../../../src/assets/images/PremierLeague/${club.name}/logo.svg`}
                  alt={club.short_name}
                  width="75"
                  height="75"
                  key={club.id}
               />
            </Box>
         ))}
      </Box>
   )
}
