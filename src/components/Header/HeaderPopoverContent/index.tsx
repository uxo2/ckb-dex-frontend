import React from 'react'
import {
  PopoverBox,
  ConnectList
} from './styled'
import { 
  ConnectLists
} from '../../../utils/const'

export default () => { 
  const handleConnect = () => {}
  return ( 
    <PopoverBox>
      {
        ConnectLists.map(way => (
          <ConnectList onClick={() => handleConnect()}>
            <img src={way.logo}></img>
            {way.name}
          </ConnectList>
        ))
      }
    </PopoverBox>
  )
}