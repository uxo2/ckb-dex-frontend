import React from 'react'
import { Button, Popover, Menu } from 'antd'
import popoverContent from './HeaderPopoverContent'
import { useTranslation } from 'react-i18next'
import i18n from '../../utils/i18n'
import {
  AppstoreOutlined,
  MailOutlined
} from '@ant-design/icons'
import { 
  HeaderBox,
  HeaderPanel,
  HeaderLogoBox, 
  MenuLiText,
  HeaderMeta,
} from './styled'

export default () => { 
  return ( 
    <HeaderBox className="header-box">
      <HeaderPanel>
        <HeaderLogoBox>CKB DEX</HeaderLogoBox>
        <Menu mode="horizontal">
          <Menu.Item key="trade">
            <MenuLiText>{i18n.t(`header.Trade`)}</MenuLiText>
          </Menu.Item>
          <Menu.Item key="pool">
            <MenuLiText>{i18n.t(`header.Pool`)}</MenuLiText>
          </Menu.Item>
          <Menu.Item key="match">
            <MenuLiText>{i18n.t(`header.Match`)}</MenuLiText>
          </Menu.Item>
        </Menu>
        <HeaderMeta>
          <Popover placement="bottomRight" title="" trigger="click" content={ popoverContent }>
            <Button className="collect-btn" shape="round">
              {i18n.t('header.wallet')}
            </Button>
          </Popover>
        </HeaderMeta>
      </HeaderPanel>
    </HeaderBox>
  )
}
