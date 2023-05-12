import { useState } from 'react'

export const useSeason = () => {
   const [season, setSeason] = useState('pre-season')

   const startSeason = () => {
      setSeason('started')
   }

   return { season, startSeason }
}
