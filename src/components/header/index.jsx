import { AppBar, Box, CardMedia, Tab, Tabs, Toolbar } from '@mui/material'
import { useContext, useState } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
   const { league } = useContext(LeagueContext)
   const location = useLocation()
   const [activeTab, setActiveTab] = useState(location.pathname)

   const styleTab = {
      color: league.theme.secondary,
      '&.Mui-selected': {
         color: league.theme.Other2,
      },
   }
   const handleTabChange = (event, newValue) => {
      setActiveTab(newValue)
   }
   return (
      <>
         <AppBar
            style={{ backgroundColor: league.theme.primary }}
            position="sticky"
         >
            <Toolbar>
               <CardMedia
                  component="img"
                  src={`../src/assets/images/${league.logo_url}`}
                  alt="League Logo"
                  height="50"
                  sx={{
                     maxWidth: '100%',
                     maxHeight: '100%',
                     objectFit: 'contain',
                  }}
               />
            </Toolbar>
         </AppBar>
         <Box>
            <Tabs
               value={activeTab}
               onChange={handleTabChange}
               sx={{
                  backgroundColor: league.theme.primary,
                  '& .MuiTabs-indicator': {
                     backgroundColor: league.theme.secondary,
                  },
               }}
               centered
            >
               <Tab
                  component={Link}
                  to="/season/home"
                  label="Home"
                  value="/season/home"
                  sx={styleTab}
               />
               <Tab
                  component={Link}
                  to="/season/standings"
                  label="Standings"
                  value="/season/standings"
                  sx={styleTab}
               />
               <Tab
                  component={Link}
                  to="/season/schedule"
                  label="Schedule"
                  value="/season/schedule"
                  sx={styleTab}
               />
               <Tab
                  component={Link}
                  to="/season/league"
                  label="League"
                  value="/season/league"
                  sx={styleTab}
               />
               <Tab
                  component={Link}
                  to="/season/clubs"
                  label="Clubs"
                  value="/season/clubs"
                  sx={styleTab}
               />
            </Tabs>
         </Box>
      </>
   )
}
