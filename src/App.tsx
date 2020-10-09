import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css'
import Routers from './routes'

const AppDiv = styled.div`
width: 100vw;
height: 100vh;
`

const App = () => {
  return (
    <AppDiv>
      <Routers />
    </AppDiv>
  )
}

export default App;
