import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)

const Section = ({ className, ...props }) => {
  const containerProps = { className }

  return (
    <section {...containerProps}>
      <StyledContent>
        <div {...props} />
      </StyledContent>
    </section>
  )
}

const StyledContent = styled.div`
  width: 100vw;
`

Section.propTypes = {
  className: PropTypes.string,
}

export default Section
