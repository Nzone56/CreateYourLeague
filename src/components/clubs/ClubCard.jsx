import { Box, Grid, ListItem, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East'

export const ClubCard = ({ club, setSelectedClub }) => {
   return (
      <ListItem
         sx={{
            position: 'relative',
            backgroundColor: club.bg_color,
            margin: '10px',
            width: '250px',
            height: '300px',
            padding: '0',
            overflow: 'hidden',
            '&: hover img': {
               transform: 'scale(1.1)',
            },
         }}
      >
         <a
            href={club.name}
            style={{
               textDecoration: 'none',
               width: '100%',
               height: '100%',
               display: 'block',
            }}
         >
            <Box sx={{ height: '50%', width: '100%' }}>
               <img
                  src={`../../../src/assets/images/PremierLeague/${club.name}/stadiumSmall.jpg`}
                  alt={club.short_name}
                  width="100%"
                  height="100%"
                  key={club.id}
                  style={{ objectFit: 'fill', transition: 'transform 2s' }}
               />
            </Box>
            <Box
               sx={{
                  position: 'absolute',
                  width: '96px',
                  height: '96px',
                  left: '30%',
                  top: '70px',
                  backgroundColor: 'white',
                  borderRadius: '100%',
               }}
            >
               <img
                  src={`../../../src/assets/images/PremierLeague/${club.name}/logo.svg`}
                  alt={club.short_name}
                  width="70"
                  height="70"
                  key={club.id}
                  style={{
                     position: 'absolute',
                     top: '50%',
                     left: '50%',
                     transform: 'translate(-50%, -50%)',
                  }}
               />
            </Box>
            <Box
               sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '50%',
                  width: '100%',
                  color: club.text_color,
               }}
            >
               <Typography m={1} sx={{ fontWeight: 'bold', fontSize: '17px' }}>
                  {club.name}
               </Typography>
               <Typography sx={{ fontWeight: 'semi-bold', fontSize: '13px' }}>
                  {club.stadium}
               </Typography>
               <Box
                  sx={{
                     display: 'flex',
                     marginTop: '20px',
                     '&:hover svg': {
                        transform: 'translateX(5px)',
                     },
                     alignItems: 'center',
                  }}
               >
                  <Typography
                     sx={{
                        fontWeight: 'bold',
                        fontSize: '14px',

                        '&:hover': {
                           textDecoration: 'underline',
                        },
                     }}
                  >
                     Club Profile
                  </Typography>
                  <EastIcon
                     sx={{
                        marginLeft: '5px',
                        transition: 'transform 0.25s',
                        fontSize: '15px',
                     }}
                  />
               </Box>
            </Box>
         </a>
      </ListItem>
   )
}
