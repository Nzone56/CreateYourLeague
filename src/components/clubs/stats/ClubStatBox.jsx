import { Box, Typography } from '@mui/material'

export const ClubStatBox = ({ stat, name, color, textColor }) => {
   const boxStyle = {
      border: '1px solid #eee',
      borderTop: `1px solid ${color}`,
      padding: '',
   }

   if (name === 'Position') {
      boxStyle.backgroundColor = color
      boxStyle.color = textColor
   }
   return (
      <Box sx={boxStyle}>
         <Typography
            m={1}
            sx={{
               textAlign: 'center',
               fontSize: '16px',
               fontWeight: 'bold',
            }}
         >
            {name}
         </Typography>
         <Typography
            m={1}
            sx={{
               textAlign: 'center',
               fontSize: '30px',
               fontWeight: 'bold',
            }}
         >
            {stat}
         </Typography>
      </Box>
   )
}
