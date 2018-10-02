import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'

const Home = () => (
  <Page path="/">
    <Hero />
    <About />
  </Page>
)

export default Home
