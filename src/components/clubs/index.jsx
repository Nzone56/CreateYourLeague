import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { Box, List } from '@mui/material'
import { ClubCard } from './ClubCard'

export const Clubs = () => {
   const { league } = useContext(LeagueContext)
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
               <ClubCard club={club} key={club.id} />
            ))}
         </List>
      </Box>
   )
}
