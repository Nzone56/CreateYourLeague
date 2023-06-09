import { Divider, ListItem, Typography } from '@mui/material'

export const ClubStatItem = ({ label, value }) => {
   return (
      <>
         <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>{label}</Typography>
            <Typography ml={12} sx={{ fontWeight: 'bold' }}>
               {value}
            </Typography>
         </ListItem>
         <Divider />
      </>
   )
}
