import React from 'react'
import styled from 'styled-components'
import About from './About.js'
import image from './assets/hero-image.svg'
import logo from './assets/logo.svg'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)

const OuterContainer = styled.div`
  padding-top: 64px;
  background-image: linear-gradient(
    -179deg,
    #bae2f0 0%,
    #f5fcff 49%,
    #f7fbfd 97%
  );
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6vw), 0 100%);
`

const HeroBox = styled.div`
  width: 100vw;
  min-height: 500px;
  height: auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  ${medium('flex-direction: row; justify-content: space-between;')};

  width: 80%;
  margin: auto;
  padding: 150px 0;
`

const Title = styled.h1`
  font-weight: 300;
  font-size: 20px;
  color: #5e8fbf;
  letter-spacing: 0.6px;
  max-width: 80%;
  ${medium('font-size: 33px; max-width: 550px;')};
`

const Logo = styled.img`
  max-width: 75%;
`

const Hero = () => (
  <OuterContainer>
    <HeroBox>
      <div>
        <Logo src={logo} />
        <Title>An open-source design system for the decentralized web</Title>
      </div>
      <img src={image} />
    </HeroBox>
    <About />
  </OuterContainer>
)

export default Hero
