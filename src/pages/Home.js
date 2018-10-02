import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Projects from '../components/Home/Projects'

const Home = () => (
  <Page path="/">
    <Hero />
    <About />
    <Projects />
  </Page>
)

export default Home
