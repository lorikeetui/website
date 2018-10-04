import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, SafeLink } from '@aragon/ui'
import Menu from './assets/menu.svg'
import SidePanel from './SidePanel'
import Sidebar from '../Sidebar/Sidebar'
import { PAGE_GROUPS, PAGES } from '../../routes'
import createHistory from 'history/createBrowserHistory'
import initGlobalStyles from '../../global-styles'
import Logo from './assets/lorikeet-logo.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: auto;
  a {
    text-decoration: none;
  }
  ul {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  section {
    padding: 5px !important;
    height: auto;
  }
`;

const NavbarLink = styled(SafeLink)`
  color: #4A90E2;
  padding: 10px 0px;
  text-decoration: none;

  &:hover {
    color: black;
  }
`

class Panel extends React.Component {
  state = {
    opened: false,
    pages: PAGES,
    activePage: null,
  };

  componentDidMount() {
    this.history = createHistory()
    this.unlistenHistory = this.history.listen(this.handleLocationUpdate)
    this.handleLocationUpdate(this.history.location, true)
    initGlobalStyles()
  }

  componentWillUnmount() {
    this.unlistenHistory()
  }

  handleOpenPage = page => {
    this.setState({ opened: false })
    this.props.onOpen(page)
  }

  handleLocationUpdate = location => {
    const { pages } = this.state
    const page = pages.find(page => page.path === location.pathname)
    if (page) {
      this.setState({ activePage: page })
    }
  }

  render() {
    const { items } = this.props;
    const { pages, activePage, opened } = this.state
    const Page = activePage && activePage.comp
    return (
      <div>
        <Button mode="text" onClick={() => this.setState({ opened: true })}>
          <img src={Menu}/>
        </Button>
        <SidePanel title="" opened={opened} onClose={() => this.setState({ opened: false })}>
          <Container>
            {items.map((item, i) => (
              item[0].startsWith('/') ? (
                <NavbarLink href={item[0]} key={i}>{item[1]}</NavbarLink>
              ) : (
                <NavbarLink href={item[0]} key={i} target="_blank">
                  {item[1]}
                </NavbarLink>
              )
            ))}
            <Sidebar
              title={pages[0].name}
              root={pages[0].path}
              groups={PAGE_GROUPS}
              activePage={activePage}
              onOpen={this.handleOpenPage}
            />
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
