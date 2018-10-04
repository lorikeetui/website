import React from 'react'
import styled from 'styled-components'

const ProjectsBox = styled.div`
  width: 100vw;
  height: auto;
  padding: 50px 20% 100px 20%;
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

const Projects = () => (
  <ProjectsBox>
    <div>
      <h2>View examples</h2>
      <Container />
    </div>
  </ProjectsBox>
)

export default Projects
