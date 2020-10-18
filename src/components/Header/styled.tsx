import styled from 'styled-components'

export const HeaderBox = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 auto;
  overflow: hidden;
  border-bottom: 1px solid #e3e4e5;
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
export const HeaderNavgationlist = styled.li`
  margin: 0 50px;
  text-align: center;
  cursor: pointer;
  color: rgba(0, 106, 151, 0.6);
`
export const HeaderMeta = styled.li`
  margin-right: 30px;
`