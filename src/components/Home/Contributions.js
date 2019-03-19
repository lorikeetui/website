import React from 'react'
import styled from 'styled-components'
import Contributors from './Contributors'
import { Button, breakpoint, SafeLink } from '@aragon/ui'

const medium = css => breakpoint('medium', css)
import github from './assets/github.svg'

const Projects = () => (
  <ProjectsBox>
    <OuterContainer>
      <h2>Open source contributions</h2>
      <Container>
        <Subtitle>
          Lorikeet is licensed with MIT License. Maintained by <SafeLink href="https://github.com/bpierre" target="_blank">@bpierre</SafeLink>{' '}
          and <SafeLink href="https://github.com/dharmaone" target="_blank">@dharmaone</SafeLink> and backed by <SafeLink href="https://github.com/aragon" target="_blank">@AragonProject</SafeLink>, it is a
          community project with many amazing contributors from around the
          world. Thank you to everyone, and a warm welcome to new contributors
        </Subtitle>
        <Contributors />
        <ButtonsBox>
          <StyledBlackButton href="https://github.com/lorikeetui/lorikeet" target="_blank"><img src={github}/>View on github</StyledBlackButton>
          <StyledBlueButton href="https://github.com/lorikeetui/docs" target="_blank">Check the docs</StyledBlueButton>
        </ButtonsBox>
      </Container>
    </OuterContainer>
  </ProjectsBox>
)

const OuterContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`

const ProjectsBox = styled.div`
  width: 100vw;
  height: auto;
  padding: 66px 15% 100px 15%;
`

const Container = styled.div`
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
`
const Box = styled.div`
  width: 33%;
  padding: 10px;
`

const Subtitle = styled.p`
  font-weight: 300;
  font-size: 1.7rem;
  color: #424770;
  letter-spacing: 0;
  text-align: center;
  line-height: 27px;
  margin: 20px 0 50px 0;
  a {
    color: #67b0d7;
    cursor: pointer;
    text-decoration: none;
  }
`
const ButtonsBox = styled.div`
  margin: 50px auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const StyledBlackButton = styled(Button.Anchor)`
  background: black;
  color: white;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.26px;
  text-transform: uppercase;
  padding: 8px 45px;
  ${medium('margin: 0 20px;')};
  margin: 10px 20px;
  width: 235px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-right: 5px;
  }
`

const StyledBlueButton = styled(Button.Anchor)`
  background-image: linear-gradient(-141deg, #6993fb 0%, #6dcbfe 100%);
  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0.26px;
  text-transform: uppercase;
  padding: 8px 45px;
  ${medium('margin: 0 20px;')};
  margin: 10px 20px;
  height: 40.5px;
  width: 235px;
  text-align: center;
`

export default Projects
