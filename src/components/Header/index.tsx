import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import logo from '../../assets/img/ckb_dark.png'
import { HeaderNavgationLists } from '../../utils/const'
import { DownOutlined } from '@ant-design/icons'
import { Button, Popover } from 'antd'
import popoverContent from './HeaderPopoverContent'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18n from '../../utils/i18n'
import { 
  HeaderBox,
  HeaderPanel, 
  HeaderLogoBox, 
  HeaderLogo,
  HeaderNavgationBox,
  HeaderNavgationlist,
  HeaderMeta,
} from './styled'

export default () => { 
  const [t] = useTranslation()
  return ( 
    <Router>
      <HeaderBox className="header-box">
        <HeaderPanel>
          <HeaderLogoBox>  
            <Link to="/" style={{textDecoration: 'none', color: '#fff'}}>
              {/* <HeaderLogo src={logo}></HeaderLogo> */}
              CKB  DEX
            </Link>
          </HeaderLogoBox>
          <HeaderNavgationBox>
            {
              HeaderNavgationLists.map(link => (
                <HeaderNavgationlist key={link.name}>
                  <Link to={link.path}>{i18n.t(`header.${link.name}`)}</Link>
                </HeaderNavgationlist>
              ))
            }     
          </HeaderNavgationBox>
          <HeaderMeta>
            <span>En/<i>中文</i></span>
            <Popover placement="bottomRight" title="" trigger="click" content={ popoverContent }>
              <Button type="text" style={{color: '#fff' }}>
                {i18n.t('header.wallet')}
                <DownOutlined />
              </Button>
            </Popover>
          </HeaderMeta>
        </HeaderPanel>
      </HeaderBox>
    </Router>
  )
}
