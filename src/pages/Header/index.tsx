import React from 'react'
import { 
  HeaderPanel, 
  HeaderLogoBox, 
  HeaderLogo,
  HeaderNavgationBox,
  HeaderNavgationlist,
  HeaderMeta
} from './styled'
import logo from '../../assets/img/ckb_dark.png'
import { HeaderNavgationLists } from '../../utils/const'

export default () => { 
  return ( 
    <HeaderPanel>
      <HeaderLogoBox>
      <HeaderLogo src={logo}></HeaderLogo>
      </HeaderLogoBox>
      <HeaderNavgationBox>
        {
          HeaderNavgationLists.map(navList => (
            <HeaderNavgationlist key={navList}>{navList}</HeaderNavgationlist>
          ))     
        }         
      </HeaderNavgationBox>
      <HeaderMeta>
        <span>钱包</span>
        <span>更多</span>
      </HeaderMeta>
    </HeaderPanel>
  )
}
