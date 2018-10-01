import React from 'react'
import { Page } from '../components'
import { Text } from '@aragon/ui'
import styled from 'styled-components'
import Section from '../components/Page/Section'

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: white;
  text-align: left;
`;

const NotFound = () => (
  <Page>
  	<Section>
  		<Container>
		    <Text>
          <h1>Page not found</h1>
		    </Text>
		    <br/>
		    <p>The page you are trying to access could not be found.</p>
		  </Container>
    </Section>
  </Page>
);

export default NotFound
