import { Box, Typography } from '@mui/material'
export const Team = ({ club, reverseOrder }) => {
   return (
      <>
         {reverseOrder ? (
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  width: '23%',
               }}
            >
               <Typography
                  variant="h6"
                  component="h6"
                  mr={1}
                  sx={{ fontSize: '18px' }}
               >
                  {club.short_name}
               </Typography>
               <img
                  src={`../../../src/assets/images/PremierLeague/${club.name}/logo.svg`}
                  alt={club.short_name}
                  width="25"
                  height="25"
               />
            </Box>
         ) : (
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: '23%',
               }}
            >
               <img
                  src={`../../../src/assets/images/PremierLeague/${club.name}/logo.svg`}
                  alt={club.short_name}
                  width="25"
                  height="25"
               />
               <Typography
                  variant="h6"
                  component="h6"
                  ml={1}
                  sx={{ fontSize: '18px' }}
               >
                  {club.short_name}
               </Typography>
            </Box>
         )}
      </>
   )
}
