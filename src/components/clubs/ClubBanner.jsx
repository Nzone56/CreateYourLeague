import { Box, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import WestIcon from '@mui/icons-material/West'
import LaunchIcon from '@mui/icons-material/Launch'
import WebIcon from '@mui/icons-material/Web'
import ShareIcon from '@mui/icons-material/Share'
import { SocialMediaIcon } from './SocialMediaIcon'
import StadiumIcon from '@mui/icons-material/Stadium'
export const ClubBanner = ({ club }) => {
   console.log(club)
   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '350px',
            backgroundColor: club.bg_color,
         }}
      >
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
            }}
         >
            <Box
               component={Link}
               to="/season/clubs/"
               sx={{ marginLeft: '50px' }}
            >
               <WestIcon sx={{ color: club.text_color, fontSize: '40px' }} />
            </Box>
            <Box
               m={2}
               sx={{
                  marginLeft: '50px',
                  width: '180px',
                  height: '180px',
                  backgroundColor: 'white',
                  borderRadius: '100%',
                  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 25%)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            >
               <img
                  src={`../../../src/assets/images/PremierLeague/${club.name}/logo.svg`}
                  alt={club.short_name}
                  width="135"
                  height="135"
               />
            </Box>
            <Box
               m={2}
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
               }}
            >
               <Typography
                  variant={'h1'}
                  component={'h1'}
                  sx={{
                     fontSize: '50px',
                     fontWeight: 'bold',
                     marginBottom: '10px',
                     color: club.text_color,
                  }}
               >
                  {club.name}
               </Typography>
               <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <StadiumIcon
                     sx={{
                        marginLeft: '3px',
                        color: club.text_color,
                        fontSize: '15px',
                     }}
                  />
                  <Typography
                     variant={'body2'}
                     component={'span'}
                     sx={{
                        marginLeft: '10px',
                        color: club.text_color,
                     }}
                  >
                     {club.stadium}
                  </Typography>
               </Box>
               <Box mt={2} sx={{ display: 'flex', alignItems: 'center' }}>
                  <WebIcon
                     sx={{
                        marginLeft: '3px',
                        color: club.text_color,
                        fontSize: '15px',
                     }}
                  />
                  <Typography
                     variant={'body2'}
                     component={'span'}
                     sx={{
                        marginLeft: '10px',
                        color: club.text_color,
                        fontWeight: 'bold',
                     }}
                  >
                     Official Website:
                  </Typography>
                  <Typography
                     variant={'body2'}
                     component={'span'}
                     sx={{
                        marginLeft: '10px',
                        color: club.text_color,
                        textDecoration: 'underline',
                        textTransform: 'lowercase',
                        cursor: 'pointer',
                     }}
                  >
                     {`www.${club.short_name}.com`}
                  </Typography>
                  <LaunchIcon
                     sx={{
                        marginLeft: '10px',
                        color: club.text_color,
                        fontSize: '10px',
                     }}
                  />
               </Box>
               <Box mt={3} sx={{ display: 'flex', alignItems: 'center' }}>
                  <ShareIcon
                     sx={{
                        marginLeft: '3px',
                        color: club.text_color,
                        fontSize: '17px',
                     }}
                  />
                  <SocialMediaIcon name={'Facebook'} />
                  <SocialMediaIcon name={'Twitter'} />
                  <SocialMediaIcon name={'YouTube'} />
                  <SocialMediaIcon name={'Instagram'} />
                  <SocialMediaIcon name={'TikTok'} />
               </Box>
            </Box>
         </Box>
         <Box sx={{ height: '100%', width: '50%' }}>
            <img
               src={`../../../src/assets/images/PremierLeague/${club.name}/stadiumBig.jpg`}
               alt={`${club.short_name} stadium `}
               width="100%"
               height="100%"
               key={club.id}
               style={{ objectFit: 'fill', transition: 'transform 2s' }}
            />
         </Box>
      </Box>
   )
}
