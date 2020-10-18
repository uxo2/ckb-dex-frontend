import React from 'react'
import { HeaderNavgationLists } from '../../utils/const'
import { Button, Popover } from 'antd'
import popoverContent from './HeaderPopoverContent'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18n from '../../utils/i18n'
import { 
  HeaderBox,
  HeaderPanel, 
  HeaderLogoBox, 
  HeaderNavgationBox,
  HeaderNavgationlist,
  HeaderMeta,
} from './styled'

export default () => { 
  const [t] = useTranslation()
  return ( 
    <HeaderBox className="header-box">
      <HeaderPanel>
        <HeaderLogoBox>CKB DEX</HeaderLogoBox>
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
          <Popover placement="bottomRight" title="" trigger="click" content={ popoverContent }>
            <Button style={{ "background": "#006A97", "color": "#fff" }} shape="round">
              {i18n.t('header.wallet')}
            </Button>
          </Popover>
        </HeaderMeta>
      </HeaderPanel>
    </HeaderBox>
  )
}
