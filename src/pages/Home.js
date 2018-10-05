import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Examples from '../components/Home/Examples'
import Tweets from '../components/Home/Tweets'
import Contributions from '../components/Home/Contributions'
import Footer from '../components/Page/Footer'

const Home = () => (
  <Page path="/">
    <Hero />
    <Examples />
    <Tweets />
    <Contributions />
    <Footer />
  </Page>
)

export default Home
