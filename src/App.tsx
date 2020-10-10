import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css'
import Routers from './routes'

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const Theme = {
  light: 'daylight', // day-light theme
  dark: 'NIGHT' // day-night theme
}

const App = () => {
  return (
    <ThemeProvider theme={ Theme }>
      <AppDiv>
        <Routers />
      </AppDiv>
    </ThemeProvider>
  )
}

export default App
