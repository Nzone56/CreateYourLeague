import { Box } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faFacebook,
   faYoutube,
   faInstagram,
   faTiktok,
   faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const iconByNetwork = {
   Facebook: faFacebook,
   YouTube: faYoutube,
   Instagram: faInstagram,
   TikTok: faTiktok,
   Twitter: faTwitter,
}

export const SocialMediaIcon = ({ name }) => {
   const icon = iconByNetwork[name]

   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '10px',
            width: '40px',
            height: '40px',
            backgroundColor: 'white',
            borderRadius: '100%',
            boxShadow: '0 1px 3px 0 rgb(0 0 0 / 25%)',
            cursor: 'pointer',
            ':hover': {
               opacity: 0.25,
            },
         }}
      >
         <FontAwesomeIcon icon={icon} />
      </Box>
   )
}
