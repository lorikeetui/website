import React from 'react'
import styled from 'styled-components'
import { Tweet } from 'react-twitter-widgets'

const ProjectsBox = styled.div`
  width: 100vw;
  height: auto;
  background: #F7FBFD;
  padding: 50px 10% 100px 10%;
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

const TwitterBox = styled.div`
  width: 33%;
  padding: 10px;
`

const Projects = () => (
  <ProjectsBox>
    <div>
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
    </div>
  </ProjectsBox>
)

export default Projects
