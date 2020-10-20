import styled from 'styled-components'

export const HeaderBox = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 auto;
  overflow: hidden;
  border-bottom: 1px solid #e3e4e5;
`
export const MenuLiText = styled.span`
  font-weight: bolder;
  fobt-size: 16px;
`

export const HeaderPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  padding: 0 120px;
  box-size: border-box;
  line-height: 60px;
  font-size: 20px;
  .ant-menu-horizontal {
    line-height: 56px;
    border-bottom: none;
  }
`

export const HeaderLogoBox = styled.div`
  margin-left: 10px;
  font-weight: 900;
  font-size: 26px;
  color: #517788;
`
export const HeaderNavgationBox = styled.ul`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  margin-left: 50px;
`

export const HeaderMeta = styled.div`
  margin-right: 30px;
  .collect-btn {
    color: #006A97;
    font-weight: 500;
    border-color: #006A97;
  }
`