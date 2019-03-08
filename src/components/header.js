import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  grid-area: header;
  align-self: top;
`
const Logo = styled.div`
  font-family: var(--logo);
  font-weight: bold;
  padding: 30px 0;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: -.5px;
`

const Header = () => (
  <HeaderWrapper>
    <Logo>Darkness.</Logo>
  </HeaderWrapper>
)

export default Header
