import { Typography } from '@mui/material'

export const InfoItem = ({ title, description }) => {
   return (
      <Typography sx={{ fontWeight: 'bold' }}>
         {title}:
         <span
            style={{
               color: 'black',
               fontWeight: 'normal',
               marginLeft: '5px',
            }}
         >
            {description}
         </span>
      </Typography>
   )
}
