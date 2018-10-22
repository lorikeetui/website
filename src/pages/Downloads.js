import React, { Fragment } from 'react'
import { Page } from '../components'
import { Text } from '@aragon/ui'
import styled from 'styled-components'
import Section from '../components/Page/Section'
import figmaSVG from './assets/figma.svg'
import SketchSVG from './assets/sketch.svg'
import FramerSVG from './assets/framer.svg'
import DownloadIconSVG from './assets/downloadicon.svg'

const Downloads = () => (
  <Page path="/downloads">
    <Section>
      <Container>
        <PageWrapper>
          <H1>Downloads</H1>
          <Content>
            <Description><P>Download some goodies to start designing your decentralized apps. This is an ever growing collection of components for Sketch and Figma, and interactive components for Framer X.</P><P>If you would like to contribute to designing new components, please get in touch! The best way is to open an issue on <A href={"https://github.com/lorikeetui/design/issues"}>https://github.com/lorikeetui/design/issues</A></P></Description>
            <DownloadWrapper>
              <DownloadLink src={SketchSVG} text={"Download for Sketch"} href={"#"}/>
              <DownloadLink src={figmaSVG} text={"Download for Figma"} href={"#"}/>
              <DownloadLink src={FramerSVG} text={"Download for Framer X"} href={"#"}/>
            </DownloadWrapper>
          </Content>
        </PageWrapper>
      </Container>
    </Section>
  </Page>
)

const DownloadLink = (props) =>
  <LinkWrapper>
    <IconContainer><Icon src={props.src} /></IconContainer>
    <DownLink href={props.href}><InsideLinkWarpper><LinkText>{props.text}</LinkText><DownloadIcon src={DownloadIconSVG}/></InsideLinkWarpper></DownLink>
  </LinkWrapper>

const H1 = styled.h1`
  font-size: 46px;
  color: #fff;
`

const Content = styled.div`
  display: flex;
  margin-top: 40px;
`

const P = styled.p`
  padding-bottom: 30px;
`

const A = styled.a`
  color: #6DCBFE;
  text-decoration: none;
`

const Description = styled.p`
  font-size: 17px;
  width: 466px;
  color: #fff;

`

const DownloadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 70px;
  
`

const Icon =styled.img`
  display: flex;
  margin: 9px 0;
`

const DownloadIcon = styled.img`
  width: 20px;
  height: 20px;
`

const DownLink = styled.a`
  display: flex;
  text-decoration: none;

`

const LinkText = styled.p`
  font-size: 17px;
  color: #6DCBFE;
  padding-left: 20px;
  padding-right: 20px;
`

const LinkWrapper = styled.div`
  display: flex;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`

const InsideLinkWarpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const PageWrapper =styled.div`
  margin: 125px 134px ;
`

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: #333B47;
  text-align: left;
  min-height: 100vh;
`

export default Downloads
