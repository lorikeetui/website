import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import { Text, breakpoint, BreakPoint, SafeLink } from '@aragon/ui'
import MenuItem from './MenuItem'
import MenuPanel from './MenuPanel'

const LorikeetNavbar = styled.div`
  width: 100%;
  height: 64px;
  background: white;
  display: flex;
  justify-content: space-between;
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
  render() {
    const { menuItems, path } = this.props
    return (
      <LorikeetNavbar>
        <Link to="/" className="brand">
          Lorikeet
        </Link>
        <End>
          <BreakPoint from="large">
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
          <BreakPoint to="large">
            <MenuPanel items={menuItems} renderLink={renderMenuItemLink} />
          </BreakPoint>
        </End>
      </LorikeetNavbar>
    )
  }
}

export default Navbar
