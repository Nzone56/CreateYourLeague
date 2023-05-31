import { Box, Input } from '@mui/material'
import { useContext, useEffect } from 'react'
import { ScheduleContext } from '../../context/schedule/ScheduleProvider'
import { useParams } from 'react-router-dom'

export const MatchResult = ({ theme, result, setResult, matchId }) => {
   const { updateResult } = useContext(ScheduleContext)
   const { id } = useParams()
   const matchweek = id - 1

   useEffect(() => {
      updateResult(matchweek, matchId, result)
   }, [result])

   const handleInputChange = ({ target }) => {
      const inputValue = target.value
      const inputId = target.id
      const isValidInput = /^-?\d*$/.test(inputValue)

      if (isValidInput) {
         if (inputId === 'HomeTeam') {
            setResult([inputValue, result[1]])
         } else if (inputId === 'AwayTeam') {
            setResult([result[0], inputValue])
         }
      }
   }

   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '10%',
         }}
      >
         <Input
            value={result[0]}
            onChange={handleInputChange}
            inputProps={{ maxLength: 2, inputMode: 'numeric' }}
            id="HomeTeam"
            sx={{
               backgroundColor: theme.secondary,
               borderRight: '1px solid white',
               color: theme.Other2,
               maxWidth: '30px',
               '& input': { textAlign: 'center' },
            }}
         />
         <Input
            value={result[1]}
            onChange={handleInputChange}
            inputProps={{ maxLength: 2, inputMode: 'numeric' }}
            id="AwayTeam"
            sx={{
               backgroundColor: theme.secondary,
               color: theme.Other2,
               maxWidth: '30px',
               '& input': { textAlign: 'center' },
            }}
         />
      </Box>
   )
}
