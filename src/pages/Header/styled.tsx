import styled from 'styled-components'

export const HeaderPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  border-bottom: 1px solid #e3e4e5;
`

export const HeaderLogoBox = styled.div`
  margin-left: 10px;
`

export const HeaderLogo = styled.img`
  width: 70px;
  height: 50px;
`
export const HeaderNavgationBox = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex: 1;
  align-items: center;
  margin-left: 50px;
`
export const HeaderNavgationlist = styled.li`
  color: #333;
  margin-right: 30px;
  cursor: pointer;
`
export const HeaderMeta = styled.li`
  color: #333;
  margin-right: 30px;
  span {
    margin-left: 20px;
    cursor: pointer;
  }
`