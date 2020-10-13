import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css'
import './utils/i18n'
import Routers from './routes'

const Theme = {
  light: 'daylight', // day-light theme
  dark: 'NIGHT' // day-night theme
}

const App = () => {
  return (
    <ThemeProvider theme={ Theme }>
      <Routers />
    </ThemeProvider>
  )
}

export default App
