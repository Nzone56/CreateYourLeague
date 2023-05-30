import { Box } from '@mui/material'

export const ClubCell = ({ logo, clubName }) => {
   return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
         <img
            src={`../src/assets/images/PremierLeague/${logo}`}
            alt="Club Logo"
            width="30"
            height="30"
            style={{ marginRight: '10px' }}
         />
         {clubName}
      </Box>
   )
}
