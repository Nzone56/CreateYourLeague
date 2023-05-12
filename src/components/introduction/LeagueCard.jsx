import {
   Autocomplete,
   Box,
   Card,
   CardContent,
   CardMedia,
   Grid,
   Typography,
} from '@mui/material'

export const LeagueCard = ({ league, handleSelectLeague }) => {
   return (
      <Grid
         m={1}
         sx={{
            flexDirection: 'row',
            display: 'flex',
         }}
         onClick={() => handleSelectLeague(league.name)}
         key={league.id}
      >
         <Card
            sx={{
               maxWidth: 290,
               height: 700,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               backgroundColor: `${league.theme.primary}`,
            }}
         >
            <Box
               sx={{
                  margin: '10%',
               }}
            >
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
            </Box>
            {/* <CardContent>
               <Typography>{league.competition}</Typography>
            </CardContent> */}
         </Card>
      </Grid>
   )
}
