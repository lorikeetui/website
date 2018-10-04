import React from 'react'
import styled from 'styled-components'

const AboutBox = styled.div`
  width: 100vw;
  height: auto;
  padding: calc(100px + 6vh) 20% calc(100px + 6vh) 20%;
`

const Subtitle = styled.p`
  font-weight: 300;
  font-size: 22px;
  color: #424770;
  letter-spacing: 0;
  text-align: center;
  line-height: 27px;
  margin: 20px 0 50px 0;
`

const Container = styled.div`
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
`
const Box = styled.div`
  width: 33%;
  padding: 10px;
  h3 {
    font-weight: 700;
    font-size: 15px;
    color: #32325d;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  p {
    font-size: 15px;
    color: #535f80;
    line-height: 28px;
  }
`

const About = () => (
  <AboutBox>
    <div>
      <h2>Build great decentralized user experiences</h2>
      <Subtitle>
        Lorikeet is a design system with React components, UI/UX guidelines and
        motion tools for building pleasant and performant interfaces. While the
        UI components can be used on any React app, we are focused on improving
        the UX challenges of the decentralized web.
      </Subtitle>
      <Container>
        <Box>
          <h3>Modular component library</h3>
          <p>Pick what you want to use without bloating your codebase</p>
        </Box>
        <Box>
          <h3>Modular component library</h3>
          <p>Pick what you want to use without bloating your codebase</p>
        </Box>
        <Box>
          <h3>Modular component library</h3>
          <p>Pick what you want to use without bloating your codebase</p>
        </Box>
        <Box>
          <h3>Modular component library</h3>
          <p>Pick what you want to use without bloating your codebase</p>
        </Box>
        <Box>
          <h3>Modular component library</h3>
          <p>Pick what you want to use without bloating your codebase</p>
        </Box>
        <Box>
          <h3>Modular component library</h3>
          <p>Pick what you want to use without bloating your codebase</p>
        </Box>
      </Container>
    </div>
  </AboutBox>
)

export default About
