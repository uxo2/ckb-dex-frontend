import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderPanel = styled.div`
  width: 100%;
  min-height: 64px;
  background-color: #040607;
  position: fixed;
  position: -webkit-fixed;
  overflow: visible;
  top: ${(props: { isNotTop?: boolean }) => (props.isNotTop ? '48px' : '0')};
  z-index: 10;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px 120px;

  @media (max-width: 1440px) {
    padding: 0px 100px;
  }

  @media (max-width: 1200px) {
    padding: 0px 45px;
    top: ${(props: { isNotTop?: boolean }) => (props.isNotTop ? '64px' : '0')};
  }

  @media (max-width: 750px) {
    padding: 0px 18px;
    top: ${(props: { isNotTop?: boolean; isEn: boolean }) => (props.isNotTop ? (props.isEn ? '120px' : '100px') : '0')};
  }
`

export const HeaderLogoPanel = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 2px;

  > img {
    width: 114px;
    height: 30px;
  }
`

export const HeaderEmptyPanel = styled.div`
  flex: 1;
`
