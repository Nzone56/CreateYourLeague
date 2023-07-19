import { Box } from '@mui/material'

export const ClubCell = ({ clubName }) => {
   return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
         <img
            src={`/assets/images/PremierLeague/${clubName}/logo.svg`}
            alt="Club Logo"
            width="30"
            height="30"
            style={{ marginRight: '10px' }}
         />
         {clubName}
      </Box>
   )
}
