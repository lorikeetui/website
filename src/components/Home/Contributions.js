import React from 'react'
import styled from 'styled-components'
import Contributors from './Contributors'
import { Button, breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)

const Projects = () => (
  <ProjectsBox>
    <div>
      <h2>Open source contributions</h2>
      <Container>
        <Subtitle>
          Lorikeet is licensed with MIT License. Maintained by <a>@bpierre</a>{' '}
          and <a>@dharmaone</a> and backed by <a>@AragonProject</a>, it is a
          community project with many amazing contributors from around the
          world. Thank you to everyone, and a warm welcome to new contributors
        </Subtitle>
        <Contributors />
        <ButtonsBox>
          <StyledBlackButton>View on github</StyledBlackButton>
          <StyledBLueButton>Check the docs</StyledBLueButton>
        </ButtonsBox>
      </Container>
    </div>
  </ProjectsBox>
)

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
  font-size: 16px;
  color: #424770;
  letter-spacing: 0;
  text-align: center;
  line-height: 27px;
  margin: 20px 0 50px 0;
  a {
    color: #67b0d7;
    cursor: pointer;
  }
`
const ButtonsBox = styled.div`
  margin: 50px auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const StyledBlackButton = styled(Button)`
  background: black;
  color: white;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.26px;
  text-transform: uppercase;
  padding: 5px 30px;
  ${medium('margin: 0 20px;')};
  margin: 10px 20px;
`

const StyledBLueButton = styled(Button)`
  background-image: linear-gradient(-141deg, #6993fb 0%, #6dcbfe 100%);
  border-radius: 4px;
  font-weight: 700;
  font-size: 13px;
  color: #ffffff;
  letter-spacing: 0.26px;
  text-transform: uppercase;
  padding: 5px 30px;
  ${medium('margin: 0 20px;')};
  margin: 10px 20px;
`

export default Projects
