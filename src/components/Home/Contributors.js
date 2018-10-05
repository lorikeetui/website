import React from 'react'
import styled from 'styled-components'
import image1 from './assets/GithubContributions/1.png'
import image2 from './assets/GithubContributions/2.png'
import image3 from './assets/GithubContributions/3.png'
import image4 from './assets/GithubContributions/4.png'
import image5 from './assets/GithubContributions/5.png'
import image6 from './assets/GithubContributions/6.png'
import image7 from './assets/GithubContributions/7.png'
import image8 from './assets/GithubContributions/8.png'
import image9 from './assets/GithubContributions/9.png'
import image10 from './assets/GithubContributions/10.png'
import image11 from './assets/GithubContributions/11.png'
import image12 from './assets/GithubContributions/12.png'
import image13 from './assets/GithubContributions/13.png'
import image14 from './assets/GithubContributions/14.png'
import image15 from './assets/GithubContributions/15.png'
import image16 from './assets/GithubContributions/16.png'
import image17 from './assets/GithubContributions/17.png'
import image18 from './assets/GithubContributions/18.png'

const Projects = () => (
  <Container href="https://github.com/lorikeetui" target="_blank">
    <Image src={image1} />
    <Image src={image2} />
    <Image src={image3} />
    <Image src={image4} />
    <Image src={image5} />
    <Image src={image6} />
    <Image src={image7} />
    <Image src={image8} />
    <Image src={image9} />
    <Image src={image10} />
    <Image src={image11} />
    <Image src={image12} />
    <Image src={image13} />
    <Image src={image14} />
    <Image src={image15} />
    <Image src={image16} />
    <Image src={image17} />
    <Image src={image18} />
  </Container>
)

const Container = styled.a`
  margin: 20px auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const Image = styled.img`
  margin: 5px 10px;
`

export default Projects
