import React from 'react'
import styled from 'styled-components'
import { Text, theme } from '@aragon/ui'
import MenuItem from './MenuItem'

class Sidebar extends React.PureComponent {
  handleHomeClick = event => {
    event.preventDefault()
    this.props.onOpen(this.props.root)
  }
  render() {
    const { title, root, pages, activePage, groups, onOpen } = this.props
    return (
      <Main>
        <StyledSidebar>
          <nav>
            <ul>
              {groups.map(({ name, pages }) => (
                <li key={name}>
                  <SidebarTitle smallcaps color={theme.textSecondary}>
                    {name}
                  </SidebarTitle>
                  <GroupLinks>
                    <ul>
                      {pages
                        .map((page, i) => (
                          <MenuItem
                            key={page.path}
                            active={page === activePage}
                            path={page.path}
                            name={page.name}
                            onOpen={onOpen}
                          />
                        ))}
                    </ul>
                  </GroupLinks>
                </li>
              ))}
            </ul>
          </nav>
        </StyledSidebar>
      </Main>
    )
  }
}

const Main = styled.div`
  width: 232px;
  flex-shrink: 0;
`

const StyledSidebar = styled.section`
  overflow-y: auto;
  height: 100vh;
  padding: 40px;
  padding-top: 104px;
  li {
    list-style: none;
  }
`

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
  a {
    text-decoration: none;
  }
`

const GroupLinks = styled.h2`
  margin-bottom: 30px;
`

const SidebarTitle = styled(Text)`
  font-weight: 600;
`

export default Sidebar
