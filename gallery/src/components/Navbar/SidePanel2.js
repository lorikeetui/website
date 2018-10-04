import React, { Fragment } from 'react'
import { Keyframes, animated, config } from 'react-spring'

const fast = { ...config.stiff, restSpeedThreshold: 1, restDisplacementThreshold: 0.01 }

// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
  // Slots can take arrays/chains,
  peek: [
    { from: { x: -100 }, to: { x: 0 }, config: fast },
    { to: { x: -100 }, config: config.slow }
  ],
  // single items,
  open: { to: { x: 0 }, config: config.default },
  // or async functions with side-effects
  close: async call => {
    await call({ to: { x: -100 }, config: config.gentle })
  }
})

// Creates a keyframed trail
const Content = Keyframes.Trail({
  peek: [{ from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1 } }, { to: { x: -100, opacity: 0 } }],
  open: { to: { x: 0, opacity: 1 } },
  close: { to: { x: -100, opacity: 0 } }
})

const items = [
<Fragment>
  holaaa
  </Fragment>
]

class SidePanel extends React.PureComponent {
  state = { open: undefined }
  toggle = () => this.setState(state => ({ open: !state.open }))
  render() {
    const state = this.state.open === undefined ? 'peek' : this.state.open ? 'open' : 'close'
    const icon = this.state.open ? 'fold' : 'unfold'
    const { open } = this.props
    return (
      <Sidebar native state={state}>
          {({ x }) => (
            <animated.div className="sidebar" style={{ transform: x.interpolate(x => `translate3d(${x}%,0,0)`) }}>
              <Content native keys={items.map((_, i) => i)} config={{ tension: 200, friction: 20 }} state={state}>
                <animated.div
                    style={{
                      transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                      ...props
                    }}>
                    hola
                </animated.div>
              </Content>
            </animated.div>
          )}
        </Sidebar>
    )
  }
}

export default SidePanel;
