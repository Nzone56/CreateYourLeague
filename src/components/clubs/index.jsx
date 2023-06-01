import { useContext, useState } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { Box, Grid, List } from '@mui/material'
import { ClubCard } from './ClubCard'

export const Clubs = () => {
   const { league } = useContext(LeagueContext)
   const [selectedClub, setSelectedClub] = useState(league.clubs[0])
   return (
      <Box
         sx={{
            display: 'flex',
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            mx: '10%',
            my: '5%',
         }}
      >
         <List
            sx={{
               display: 'flex',
               width: '100%',
               justifyContent: 'center',
               alignItems: 'center',
               height: '100%',
               flexWrap: 'wrap',
            }}
         >
            {league.clubs.map((club) => (
               <ClubCard
                  club={club}
                  setSelectedClub={setSelectedClub}
                  key={club.id}
               />
            ))}
         </List>
      </Box>
   )
}
