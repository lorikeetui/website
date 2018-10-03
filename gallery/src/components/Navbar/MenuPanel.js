import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, SidePanel, SafeLink } from '@aragon/ui'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  a {
    padding: 10px 30px;
    text-decoration: none;
  }
`;

class Panel extends React.Component {
  state = {
    opened: false,
  };
  render() {
    const { items } = this.props;
    const { opened } = this.state;
    return (
      <div>
        <Button mode="text" onClick={() => this.setState({ opened: true })}>
          close
        </Button>
        <SidePanel title="" opened={opened} onClose={() => this.setState({ opened: false })}>
          <Container>
          <SafeLink to="localhost:3000">Home</SafeLink>
          {items.map((item, i) => (
            item[0].startsWith('/') ? (
              <SafeLink href={item[0]} key={i}>{item[1]}</SafeLink>
            ) : (
              <SafeLink href={item[0]} key={i} target="_blank">
                {item[1]}
              </SafeLink>
            )
          ))}
          </Container>
        </SidePanel>
      </div>
    )
  }
}

Panel.propTypes = {
  items: PropTypes.array,
}

export default Panel
