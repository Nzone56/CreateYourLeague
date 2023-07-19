import { Box, Typography } from '@mui/material'

export const Stadium = ({ club }) => {
   return (
      <Box
         sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '25%',
         }}
      >
         <img
            src={`/assets/images/stadium.png`}
            alt={'Stadium-icon'}
            width="25"
            height="25"
         />
         <Typography
            variant="subtitle1"
            component="span"
            ml={2}
            sx={{ fontSize: '15px' }}
         >
            {club.stadium},
         </Typography>
         <Typography
            variant="subtitle1"
            component="span"
            sx={{ fontWeight: 'bold', fontSize: '15px' }}
         >
            {club.city}
         </Typography>
      </Box>
   )
}
