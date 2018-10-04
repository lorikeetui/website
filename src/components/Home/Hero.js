import React from 'react'
import styled from 'styled-components'
import About from './About.js'
import background from './assets/hero-background.jpg'
import logo from './assets/logo.svg'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);


const OuterContainer = styled.div`
  background-image: linear-gradient(-179deg, #BAE2F0 0%, #F5FCFF 49%, #F7FBFD 97%);
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6vw), 0 100%);
`

const HeroBox = styled.div`
  width: 100vw;
  height: 500px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  font-weight: 300;
  font-size: 20px;
  color: #5e8fbf;
  letter-spacing: 0.6px;
  margin-left: 12%;
  max-width: 80%;
  ${medium('margin-left: 15%; font-size: 33px; max-width: 550px;')};
`

const Logo = styled.img`
  margin-left: 12%;
  ${medium('margin-left: 15%;')};
  max-width: 75%;
`

const Hero = () => (
  <OuterContainer>
    <HeroBox>
      <div>
        <Logo src={logo} />
        <Title>An open-source design system for the decentralized web</Title>
      </div>
    </HeroBox>
    <About/>
  </OuterContainer>
)

export default Hero
