import styled from 'styled-components'
import React from 'react'
import DownloadIconSVG from '../pages/assets/downloadicon.svg'

const DownloadLink = (props) =>
  <LinkWrapper>
    <IconContainer><Icon src={props.src} /></IconContainer>
    <DownLink href={props.href}><InsideLinkWarpper><LinkText>{props.text}</LinkText><DownloadIcon src={DownloadIconSVG}/></InsideLinkWarpper></DownLink>
  </LinkWrapper>

export default DownloadLink

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

const DownLink = styled.a`
  display: flex;
  text-decoration: none;
`

const InsideLinkWarpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LinkText = styled.p`
  font-size: 17px;
  color: #6DCBFE;
  padding-left: 20px;
  padding-right: 7px;
  white-space: nowrap;
`

const Icon =styled.img`
  display: flex;
  margin: 9px 0;
`

const DownloadIcon = styled.img`
  width: 20px;
  height: 20px;
`
