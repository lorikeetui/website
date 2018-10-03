import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, SafeLink } from '@aragon/ui'

const MenuItem = ({ url, label, active, renderLink }) => (
  <StyledMenuItem>
    <span className={active ? 'active' : undefined}>{renderLink({ url, children: label})}</span>
  </StyledMenuItem>
)

const StyledMenuItem = styled.li`
  display: flex;
  align-items: stretch;
  white-space: nowrap;
  > span {
    display: flex;
    align-items: center;
    padding: 0 15px;
    font-size: 15px;
    color: ${({ active }) => (active ? theme.positiveText : theme.textSecondary)};
  }
  a {
    text-decoration: none;
    padding: 0 10px;
    span {
      color: ${theme.textSecondary};
      font-size: 17px;
      padding: 7px 0;
    }
    span:hover {
      color: ${theme.textPrimary};
    }
  }
  .active a {
    span {
      color: ${theme.textPrimary};
      border-bottom: solid 2px black;

    }
  }
`;

MenuItem.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
  active: PropTypes.bool,
  renderLink: PropTypes.func,
};

MenuItem.defaultProps = {
  active: false,
  renderLink: ({ url, children }) => <SafeLink href={url}>{children}</SafeLink>,
};

export default MenuItem
