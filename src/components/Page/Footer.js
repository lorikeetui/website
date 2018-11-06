import React from 'react'
import styled from 'styled-components'
import logo from './assets/footer-logo.svg'
import { Link } from 'react-static'
import powered from './assets/powered-by-aragon.svg'
import { breakpoint, SafeLink } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Footer = () => (
  <FooterBox>
    <Container>
      <Box>
        <Logo src={logo} />
        <SafeLink href="https://aragon.org/" target="_blank">
          <Powered src={powered} />
        </SafeLink>
      </Box>
      <LinkBox>
        <Title>Resources</Title>
        <a href="docs.lorikeet.design/principles">Design guidelines</a>
        <a href="docs.lorikeet.design/buttons">Reference</a>
        <a href="docs.lorikeet.design/how-to-contribute">Contributing</a>
        <Link to="/downloads">Downloads</Link>
      </LinkBox>
      <LinkBox>
        <Title>Channels</Title>
        <a href="https://github.com/lorikeetui/lorikeet" target="_blank">Github</a>
        <a href="https://twitter.com/lorikeetui" target="_blank">Twitter</a>
        <a href="https://matrix.to/#/!xXlJVgDUrpIXVQkkrq:matrix.org" target="_blank">Matrix</a>
        <a href="mailto:jouni@aragon.one" target="_blank">Email</a>
      </LinkBox>
    </Container>
  </FooterBox>
)

const FooterBox = styled.div`
  width: 100vw;
  height: auto;
  min-height: 300px;
  background: #333B47;
  padding: 100px 0;
`
const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  max-width: 900px;
  a {
    font-size: 1.7rem;
    color: #FFFFFF;
    line-height: 39px;
    display: block;
    cursor: pointer;
  }
  a:hover {
    opacity: 0.6;
  }
`

const Title = styled.h3`
  opacity: 0.6;
  font-weight: 600;
  font-size: 1.7rem;
  color: #FFFFFF;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  margin-bottom: 15px;
`

const Logo = styled.img`
  margin-top: -19px;
  max-width: 170px;
`

const Powered = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`

const LinkBox = styled.div`
  width: 50%;
  position: relative;
  margin-top: 66px;
  margin-bottom: 50px;
  ${medium('width: 33%; margin-top: 0; margin-bottom: 0;')};
  a {
    text-decoration: none;
  }
`

const Box = styled.div`
  width: auto;
  position: absolute;
  height: 350px;
  ${medium('position: relative; width: 33%; height: 189px;')};
`

export default Footer
