import { Box, Tab, Tabs, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { LeagueContext } from '../../context/league/LeagueProvider'

const generateTabs = (styleTab) => {
   const tabs = []

   for (let i = 1; i <= 38; i++) {
      const label = i.toString()

      tabs.push(
         <Tab
            component={Link}
            to={`/season/schedule/matchweek/${label}`}
            label={label}
            value={`/season/schedule/matchweek/${label}`}
            sx={{
               ...styleTab,
               minWidth: 10,
            }}
            key={label}
         />
      )
   }
   return tabs
}

export const Schedule = () => {
   const { league } = useContext(LeagueContext)
   const [activeTab, setActiveTab] = useState(location.pathname)

   const styleTab = {
      color: league.theme.tertiary,
      padding: '0',
      width: '30px',
      '&.Mui-selected': {
         color: league.theme.Other2,
      },
   }
   const handleTabChange = (event, newValue) => {
      setActiveTab(newValue)
   }
   return (
      <Box>
         <Box
            margin={4}
            sx={{
               display: 'flex',
               alignItems: 'center',
               flexDirection: 'column',
            }}
         >
            <Typography
               variant="h4"
               component="h4"
               sx={{
                  color: `${league.theme.secondary}`,
                  fontWeight: 'bold',
                  fontSize: '40px',
               }}
            >
               {league.competition.toUpperCase() + ' FIXTURES'}
            </Typography>
            <Box
               sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
               <Tabs
                  value={activeTab}
                  onChange={handleTabChange}
                  sx={{
                     backgroundColor: league.theme.secondary,
                     '& .MuiTabs-indicator': {
                        backgroundColor: league.theme.secondary,
                     },
                  }}
                  centered
               >
                  <Tab
                     component={Link}
                     to="/season/schedule"
                     label="HOME"
                     value="/season/schedule"
                     sx={styleTab}
                     key="home"
                  />
                  {generateTabs(styleTab)}
               </Tabs>
            </Box>
         </Box>
      </Box>
   )
}
