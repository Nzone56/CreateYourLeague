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
      <Grid m={1}>
         <Card
            sx={{
               width: 230,
               height: 450,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               backgroundColor: isHovered
                  ? `${league.theme.tertiary}`
                  : `${league.theme.primary}`,
            }}
         >
            <CardActionArea
               sx={{
                  width: '100%',
                  height: '100%',
                  transition: 'transform 0.5s ease-in-out',
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)',
               }}
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
            >
               <Box
                  sx={{
                     margin: '10%',
                     height: 'auto',
                  }}
               >
                  {!isHovered ? (
                     <CardMedia
                        component="img"
                        sx={{
                           height: 'auto',
                           width: '100%',
                           objectFit: 'contain',
                        }}
                        image={`/assets/images/leagues/${league.logo_url}`}
                        title="Logo"
                     />
                  ) : (
                     <Box
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'space-between',
                           flexDirection: 'column',
                        }}
                     >
                        <picture>
                           <img
                              style={{
                                 height: '240px',
                                 width: '200px',
                                 objectFit: 'center',
                              }}
                              src={`/assets/images/leagues/${league.logo_url}`}
                              atl="League Logo"
                           />
                        </picture>

                        <CardContent
                           sx={{ display: 'flex', alignItems: 'center' }}
                        >
                           <Typography
                              component="h4"
                              variant="body1"
                              sx={{
                                 color: league.theme.secondary,
                                 fontWeight: 'bold',
                                 padding: '8px',
                              }}
                           >
                              SELECT
                           </Typography>
                           <CardActions>
                              <PlayCircleFilled
                                 onClick={() => handleSelectLeague(league.name)}
                              />
                           </CardActions>
                        </CardContent>
                     </Box>
                  )}
               </Box>
            </CardActionArea>
         </Card>
      </Grid>
   )
}
