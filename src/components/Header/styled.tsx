import styled from 'styled-components'

export const HeaderBox = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 auto;
  overflow: hidden;
  border-bottom: 1px solid #e3e4e5;
  background-color: #000;
  color: #fff;
`

export const HeaderPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  line-height: 60px;
  font-size: 20px;
`

export const HeaderLogoBox = styled.div`
  margin-left: 10px;
  font-size: 30px;
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
  margin-right: 30px;
  cursor: pointer;
`
export const HeaderMeta = styled.li`
  margin-right: 30px;
  span {
    margin-left: 20px;
    cursor: pointer;
    i {
      font-size: 12px;
    }
  }
`