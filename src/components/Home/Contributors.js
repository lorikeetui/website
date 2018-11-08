import React from 'react'
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
    fetch('https://api.github.com/repos/aragon/aragon/contributors')
    .then(res => res.json())
    .then(json => {
      console.log(json)
      this.setState({
        items: json,
        loading: false
      })
    })
    .catch(console.log('erro'))
  };

  render() {
    return <Contributors data={this.state.items}/>
  }
}
const Contributors = ({ data }) => (
  <Container
    href="https://github.com/lorikeetui/lorikeet/graphs/contributors"
    target="_blank"
  >
  {data.map(item =>  <Image src={item.avatar_url} />)}

  </Container>
)

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
  height: 52px;
  border-radius: 50%;
`

export default Projects