import { Tab, Tabs } from '@mui/material'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { LeagueContext } from '../../context/league/LeagueProvider'

export const ClubNavBar = ({ club }) => {
   const { league } = useContext(LeagueContext)
   const [activeTab, setActiveTab] = useState(`${location.pathname}`)
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
   const handleTabChange = (event, newValue) => {
      setActiveTab(newValue)
   }
   return (
      <Tabs
         value={activeTab}
         onChange={handleTabChange}
         centered
         sx={{ marginTop: '-48px' }}
      >
         <Tab
            component={Link}
            to={`/season/clubs/${club.name.toLowerCase()}/overview`}
            value={`/season/clubs/${club.name.toLowerCase()}/overview`}
            label="Overview"
            sx={styleTab}
            key="overview"
         />
         <Tab
            component={Link}
            to={`/season/clubs/${club.name.toLowerCase()}/squad`}
            value={`/season/clubs/${club.name.toLowerCase()}/squad`}
            label="Squad"
            sx={styleTab}
            key="squad"
         />
         <Tab
            component={Link}
            to={`/season/clubs/${club.name.toLowerCase()}/fixtures`}
            value={`/season/clubs/${club.name.toLowerCase()}/fixtures`}
            label="Fixtures"
            sx={styleTab}
            key="fixtures"
         />
         <Tab
            component={Link}
            to={`/season/clubs/${club.name.toLowerCase()}/results`}
            value={`/season/clubs/${club.name.toLowerCase()}/results`}
            label="Results"
            sx={styleTab}
            key="results"
         />
         <Tab
            component={Link}
            to={`/season/clubs/${club.name.toLowerCase()}/stats`}
            value={`/season/clubs/${club.name.toLowerCase()}/stats`}
            label="Stats"
            sx={styleTab}
            key="stats"
         />
      </Tabs>
   )
}
