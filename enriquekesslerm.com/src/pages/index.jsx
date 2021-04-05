/** @jsx jsx */

import { Container, Heading, jsx } from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'

export default function IndexPage() {
  return (
    <Layout>
      <Container variant='content'>
        <main sx={{ flex: 1, pb: 4, mx: 'auto' }}>
          <Heading as='h1' pb={2}>Index page</Heading>
        </main>
      </Container>
    </Layout>
  )
}
