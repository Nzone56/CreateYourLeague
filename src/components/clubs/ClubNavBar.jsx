import { Tab, Tabs } from '@mui/material'
import { useContext, useState } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'

export const ClubNavBar = ({ club, handleTabChange }) => {
   const { league } = useContext(LeagueContext)
   const [activeTab, setActiveTab] = useState('overview')
   const styleTab = {
      color: '#6c6c6c',
      backgroundColor: '#ebebe6',
      textAlign: 'center',
      '&:hover': {
         color: league.theme.Other2,
         backgroundColor: league.theme.tertiary,
         fontWeight: 'bolder',
      },
      '&.Mui-selected': {
         backgroundColor: league.theme.Other2,
         color: league.theme.secondary,
      },
   }

   const handleChange = (event, newValue) => {
      setActiveTab(newValue)
      handleTabChange(newValue)
   }

   return (
      <Tabs
         value={activeTab}
         onChange={handleChange}
         centered
         sx={{ marginTop: '-48px' }}
      >
         <Tab value="overview" label="Overview" sx={styleTab} />
         <Tab value="squad" label="Squad" sx={styleTab} />
         <Tab value="fixtures" label="Fixtures" sx={styleTab} />
         <Tab value="results" label="Results" sx={styleTab} />
         <Tab value="stats" label="Stats" sx={styleTab} />
      </Tabs>
   )
}
