import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import { Text, breakpoint, BreakPoint, SafeLink } from '@aragon/ui'
import MenuItem from './MenuItem'
import MenuPanel from './MenuPanel'
import { Spring } from 'react-spring'

const LorikeetNavbar = styled.div`
  width: 100%;
  height: 64px;
  background: rgba(255, 255, 255, 0);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  z-index: 5;
  .brand {
    display: flex;
  }
`

const End = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ul {
    display: flex;
  }
  button {
    margin: 0 0 0 10px;
  }
`

const renderMenuItemLink = ({ url, children }) =>
  url.startsWith('/') ? (
    <Link to={url}>
      <Text size="xlarge">{children}</Text>
    </Link>
  ) : (
    <SafeLink href={url} target="_blank">
      <Text size="xlarge">{children}</Text>
    </SafeLink>
  )

class Navbar extends React.Component {
  state = {
    scroll: 0,
  };
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = event => {
    const scroll = (document.scrollingElement.scrollTop*2)/1000;
    this.setState({ scroll: scroll })
  }
  renderIn = ({ x, menuItems, path }) => {
    return(
      <LorikeetNavbar style={{background: `rgba(255, 255, 255, ${x._value})`}}>
        <End>
          <BreakPoint from="medium">
            <ul>
              {menuItems.map((item, i) => (
                <MenuItem
                  key={i}
                  url={item[0]}
                  label={item[1]}
                  active={item[2]}
                  renderLink={renderMenuItemLink}
                />
              ))}
            </ul>
          </BreakPoint>
          <BreakPoint to="medium">
            <MenuPanel items={menuItems} renderLink={renderMenuItemLink} />
          </BreakPoint>
        </End>
      </LorikeetNavbar>
    )
  }
  render() {
    const { menuItems, path } = this.props
    return (
      <Spring
        from={{ x: 0 }}
        to={{ x: this.state.scroll }}
        menuItems={menuItems}
        path={path}
        native
      >
        {this.renderIn}
      </Spring>

    )
  }
}

export default Navbar
