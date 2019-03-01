import React from 'react'
import styled from 'styled-components'
import About from './About.js'
import container from './assets/hero-container.svg'
import image from './assets/hero-placeholder.jpg'
import logo from './assets/logo.svg'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Hero = () => (
  <OuterContainer>
    <HeroBox>
      <div>
        <Logo src={logo} />
        <Title>A design system for the decentralized web</Title>
      </div>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
    </HeroBox>
    <About />
  </OuterContainer>
)

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
  max-width: 1200px;
  margin: auto;
  min-height: 500px;
  height: auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  ${large('flex-direction: row; justify-content: space-between;')};
  width: 80%;
  margin: auto;
  padding: 50px 0;
  ${medium('padding: 150px 0;')};
`

const Title = styled.h1`
  font-weight: 400;
  font-size: 3.5rem;
  color: #5e8fbf;
  letter-spacing: 0.6px;
  max-width: 80%;
  ${medium('font-size: 46px; max-width: 550px;')};
`

const Logo = styled.img`
  max-width: 344px;
  min-width: 225px;
  width: 75%;
  margin-bottom: 20px;
`
const ImageContainer = styled.div`
  position: relative;
  max-width: 565px;
  height: auto;
  background-image: url(${container});
  background-position: top;
  background-size: contain;

`
const Image = styled.img`
  max-width: 100%;
  margin-top: 28px;
  margin-bottom: -10px;
`

export default Hero
