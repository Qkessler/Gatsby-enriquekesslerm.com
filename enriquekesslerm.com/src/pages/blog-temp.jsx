/** @jsx jsx */

import { Container, Text, Heading, jsx} from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'

export default function AboutPage() {
  return (
    <Layout>
      <Container variant='content'>
        <main sx={{ flex: 1, pb: 4, mx: 'auto' }}>
          <Heading as='h1' sx={{ pb: 4, display: 'flex' }}>
            <Text sx={{ paddingRight: 2 }}>Blog page</Text>
          </Heading> 
        </main>
      </Container>
    </Layout>
  )
}

