import styled from '@emotion/styled'
import { Box, Button, ButtonGroup } from '@mui/material'
import React from 'react'
const ButtonStyle= styled(Button)({
    border:"50%"
})
const GroupedButton = () => {
  return (
   <>
   <ButtonGroup>
    <ButtonStyle>+</ButtonStyle>
    <ButtonStyle>-</ButtonStyle>
    <ButtonStyle>+</ButtonStyle>
   </ButtonGroup>
   </>
  )
}

export default GroupedButton
