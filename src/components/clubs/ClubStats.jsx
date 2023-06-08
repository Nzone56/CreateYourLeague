import { Box, List, ListItem } from '@mui/material'

export const ClubStats = ({ club }) => {
   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <List>
            <ListItem> Matchs Played </ListItem>
         </List>
      </Box>
   )
}
