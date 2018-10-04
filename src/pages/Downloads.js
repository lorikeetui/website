import React from 'react'
import { Page } from '../components'
import { Text } from '@aragon/ui'
import styled from 'styled-components'
import Section from '../components/Page/Section'

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: #F7FBFD;
  text-align: left;
  min-height: 100vh;
`;

const Downloads = () => (
  <Page path="/downloads">
  	<Section>
  		<Container>
		  </Container>
    </Section>
  </Page>
);

export default Downloads
