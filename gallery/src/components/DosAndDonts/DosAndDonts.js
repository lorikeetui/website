import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Card } from '@aragon/ui'

class DosAndDonts extends React.Component {
  render() {
    const { doTitle, doContent, dontTitle, dontContent } = this.props
    return (
      <Container>
        <OuterContainer>
          <CardContainer height="282px">{doContent}</CardContainer>
          <CardName>Do:</CardName>
          <p>{doTitle}</p>
        </OuterContainer>
        <OuterContainer>
          <CardContainer dont height="282px">
            {dontContent}
          </CardContainer>
          <CardName dont>Dont:</CardName>
          <p>{dontTitle}</p>
        </OuterContainer>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  margin: 0 -30px;
`

const OuterContainer = styled.div`
  width: 282px;
  margin: 30px;
`

const CardName = styled.p`
  font-weight: 900;
  margin: 10px 0 !important;
  line-height: 1 !important;
  ${({ dont }) => (dont ? 'color: #FB7372;' : 'color: #4edda4;')};
`

const CardContainer = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 10px;
  ${({ dont }) => (dont ? 'border-bottom-color: #FB7372;' : 'border-bottom-color: #4edda4;')};
`

DosAndDonts.propTypes = {
  doTitle: PropTypes.string,
  dontTitle: PropTypes.string,
  doContent: PropTypes.node,
  dontContent: PropTypes.node,
}

export default DosAndDonts
