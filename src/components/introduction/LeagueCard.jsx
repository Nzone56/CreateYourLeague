import { PlayCircleFilled } from '@mui/icons-material'
import {
   Box,
   Card,
   CardActionArea,
   CardActions,
   CardContent,
   CardMedia,
   Grid,
   Typography,
} from '@mui/material'
import { useState } from 'react'

export const LeagueCard = ({ league, handleSelectLeague }) => {
   const [isHovered, setIsHovered] = useState(false)

   const handleMouseEnter = () => {
      setIsHovered(true)
   }

   const handleMouseLeave = () => {
      setIsHovered(false)
   }

   return (
      <Grid
         m={1}
         sx={{
            flexDirection: 'row',
            display: 'flex',
         }}
      >
         <Card
            sx={{
               height: 700,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               backgroundColor: isHovered
                  ? `${league.theme.secondary}`
                  : `${league.theme.primary}`,
            }}
         >
            <CardActionArea
               sx={{
                  width: '100%',
                  height: '100%',
               }}
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
            >
               <Box
                  sx={{
                     margin: '10%',
                  }}
               >
                  {' '}
                  {!isHovered ? (
                     <CardMedia
                        component="img"
                        sx={{
                           height: 'auto',
                           width: '100%',
                           objectFit: 'contain',
                        }}
                        image={`../src/assets/images/${league.logo_url}`}
                        title="Logo"
                     />
                  ) : (
                     <Box
                        sx={{
                           margin: '10%',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           flexDirection: 'row',
                           backgroundImage: `../src/assets/images/${league.cardBg_url}`,
                           backgroundSize: 'cover',
                           backgroundPosition: 'center',
                        }}
                     >
                        <CardMedia
                           component="img"
                           sx={{
                              height: 'auto',
                              width: isHovered ? '25%' : '100%',
                              objectFit: 'contain',
                           }}
                           image={`../src/assets/images/${league.logo_url}`}
                           title="Logo"
                        />
                        <CardContent>
                           <Typography> {league.competition} </Typography>
                        </CardContent>
                        <CardActions>
                           <PlayCircleFilled
                              onClick={() => handleSelectLeague(league.name)}
                           />
                        </CardActions>
                     </Box>
                  )}
               </Box>
            </CardActionArea>
         </Card>
      </Grid>
   )
}
