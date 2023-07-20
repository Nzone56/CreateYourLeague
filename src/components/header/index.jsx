import { AppBar, Box, CardMedia, Tab, Tabs, Toolbar } from '@mui/material'
import { useContext, useState } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { Link, useLocation } from 'react-router-dom'
import { ImageAspectRatio } from '@mui/icons-material'

export const Header = () => {
   const { league } = useContext(LeagueContext)
   const location = useLocation()
   const [activeTab, setActiveTab] = useState(location.pathname)
   const styleTab = {
      color: league.theme.Other2,
      '&.Mui-selected': {
         color: league.theme.primary,
      },
   }
   const handleTabChange = (event, newValue) => {
      setActiveTab(newValue)
   }
   return (
      <>
         <AppBar
            style={{ backgroundColor: league.theme.secondary }}
            position="sticky"
         >
            <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
               <img
                  src={`/assets/images/leagues/${league.logo_url}`}
                  alt="League Logo"
                  style={{
                     maxWidth: '100%',
                     maxHeight: '100%',
                     objectFit: 'contain',
                     height: '50px',
                     width: '50px',
                     filter:
                        league.name === 'PremierLeague'
                           ? 'invert(100%) sepia(100%) saturate(0%) hue-rotate(131deg) brightness(102%) contrast(101%)'
                           : 'none',
                  }}
               />
            </Toolbar>
         </AppBar>
         <Box>
            <Tabs
               value={activeTab}
               onChange={handleTabChange}
               sx={{
                  backgroundColor: league.theme.secondary,
                  '& .MuiTabs-indicator': {
                     backgroundColor: league.theme.primary,
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
