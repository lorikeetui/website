import React, { Fragment } from 'react'
import styled from 'styled-components'
import { SafeLink } from '@aragon/ui'

class Projects extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      items: [],
      loading: true
    }
  }

  componentDidMount(){
    fetch('https://api.github.com/repos/aragon/aragon-ui/contributors')
    .then(res => res.json())
    .then(json => {
      console.log(json)
      this.setState({
        items: json,
        loading: false
      })
    })
    .catch(err => console.log(err))
  };

  render() {
    return (
        <Container href="https://github.com/lorikeetui/lorikeet/graphs/contributors"
        target="_blank">
          {this.state.items.map(item => <Image key={item.id} src={item.avatar_url} />)}
        </Container>
    )}
}

const Container = styled(SafeLink)`
  margin: 20px auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const Image = styled.img`
  margin: 5px 10px;
  height: 70px;
  border-radius: 50%;
  border: solid 1px #6691bd;
  padding: 3px;
  width: 70px;
}
`

export default Projects
