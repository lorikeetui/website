import React from 'react'
import styled from 'styled-components'
import background from './assets/hero-background.jpg'
import logo from './assets/logo.svg'

const HeroBox = styled.div`
  width: 100vw;
  height: 500px;
  background-image: url(${background});
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6vw), 0 100%);
`

const Title = styled.div`
  font-weight: 300;
  font-size: 33px;
  color: rgba(255, 255, 255, 0.96);
  letter-spacing: 0.6px;
  margin-left: 15%;
  max-width: 550px;
`

const Logo = styled.img`
  margin-left: 15%;
`

const Hero = () => (
  <HeroBox>
    <div>
      <Logo src={logo} />
      <Title>An open-source design system for the decentralized web</Title>
    </div>
  </HeroBox>
)

export default Hero
