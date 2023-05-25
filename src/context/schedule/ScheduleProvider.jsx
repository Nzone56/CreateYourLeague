import { createContext, useContext, useEffect, useState } from 'react'
import { LeagueContext } from '../league/LeagueProvider'
import { generateSchedule } from '../../helpers/schedules/generateSchedule'

const ScheduleContext = createContext()

const ScheduleProvider = ({ children }) => {
   const { league } = useContext(LeagueContext)
   const [schedules, setSchedules] = useState([])

   useEffect(() => {
      if (league && league.clubs) {
         const teamsCode = league.clubs.map((club) => club.code)
         const generatedSchedule = generateSchedule({ teams: teamsCode })
         setSchedules(generatedSchedule)
      }
   }, [league])

   return (
      <ScheduleContext.Provider value={{ schedules }}>
         {children}
      </ScheduleContext.Provider>
   )
}

export { ScheduleContext, ScheduleProvider }
