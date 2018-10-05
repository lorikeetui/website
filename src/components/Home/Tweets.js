import React from 'react'
import styled from 'styled-components'
import { Tweet } from 'react-twitter-widgets'
import { breakpoint } from '@aragon/ui'
const large = css => breakpoint('large', css);
const medium = css => breakpoint('medium', css);

const Projects = () => (
  <ProjectsBox>
    <OuterContainer>
      <h2>What people are saying</h2>
      <Container>
        <TwitterBox>
          <Tweet tweetId="1045037331923767297" />
        </TwitterBox>
        <TwitterBox>
          <Tweet tweetId="1044624201179553792" />
        </TwitterBox>
        <TwitterBox>
          <Tweet tweetId="1045798807630278656" />
        </TwitterBox>
        <TwitterBox>
          <Tweet tweetId="1047140552137949185" />
        </TwitterBox>
        <TwitterBox>
          <Tweet tweetId="1047131473575337991" />
        </TwitterBox>
        <TwitterBox>
          <Tweet tweetId="1046537615091134464" />
        </TwitterBox>
      </Container>
    </OuterContainer>
  </ProjectsBox>
)

const ProjectsBox = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background: #F7FBFD;
  padding: 50px 10% 100px 10%;
  padding: calc(50px + 12vh) 10% 100px 10%;
  clip-path: polygon(0 12vh, 100% 0, 100% calc(100% - 6vw), 0 100%);
`

const Container = styled.div`
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
`

const TwitterBox = styled.div`
  width: 100%;
  ${medium('width: 50%;')};
  ${large('width: 33%;')};
  padding: 10px;
`
const OuterContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`

export default Projects
