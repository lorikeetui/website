import React, { Fragment } from 'react'
import { Page } from '../components'
import { Text } from '@aragon/ui'
import styled from 'styled-components'
import Section from '../components/Page/Section'
import figmaSVG from './assets/figma.svg'
import SketchSVG from './assets/sketch.svg'
import FramerSVG from './assets/framer.svg'
import { breakpoint } from '@aragon/ui'
import DownloadLink from '../components/DownloadLink.js'
const large = css => breakpoint('large', css)
const medium = css => breakpoint('medium', css)

const Downloads = () => (
  <Page path="/downloads">
    <DownloadsSection>
      <Container>
        <div>
          <H1>Downloads</H1>
          <Content>
            <Description>
              <P>Download some goodies to start designing your decentralized apps. This is an ever growing collection of components for Sketch and Figma, and interactive components for Framer X.</P>
              <P>If you would like to contribute to designing new components, please get in touch! The best way is to open an issue on 
                <A href={"https://github.com/lorikeetui/design/issues"}>https://github.com/lorikeetui/design/issues</A>
              </P>
            </Description>
            <DownloadWrapper>
              <DownloadLink src={SketchSVG} text={"Download for Sketch"} href={"#"}/>
              <DownloadLink src={figmaSVG} text={"Download for Figma"} href={"#"}/>
              <DownloadLink src={FramerSVG} text={"Download for Framer X"} href={"#"}/>
            </DownloadWrapper>
          </Content>
        </div>
      </Container>
    </DownloadsSection>
  </Page>
)

const H1 = styled.h1`
  font-size: 46px;
  color: #fff;
`

const Content = styled.div`
  flex-direction: column;
  ${medium('flex-direction: column;')};
  ${large('flex-direction: row;')};
  display: flex;
  margin-top: 40px;
`

const P = styled.p`
  padding-bottom: 30px;
`

const A = styled.a`
  color: #6DCBFE;
  text-decoration: none;
  word-break: break-all;
`

const Description = styled.p`
  font-size: 17px;
  color: #fff;
  width: 100%;
  ${medium('width: 70%; padding-right: 60px;')};
  
`

const DownloadWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
  ${medium('width: 30%')};
`

const Container = styled.div`
  width: 100%
  padding: 87px 38px;
  ${medium('width: 60%; padding: 0;')};
  margin: 0;
  text-align: left;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  div {
    max-width: 100%;
  }

`
const DownloadsSection = styled(Section)`
  background: #333B47;
  min-height: 100vh;
`

export default Downloads
