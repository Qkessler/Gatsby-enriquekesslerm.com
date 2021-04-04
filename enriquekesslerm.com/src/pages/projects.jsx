/** @jsx jsx */

import { Container, Heading, jsx } from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'

export default function ProjectsPage() {
  return (
    <Layout>
      <Container variant='content'>
        <main sx={{ flex: 1, pb: 4, mx: 'auto' }}>
          <Heading as='h1'>Projects</Heading>
        </main>
      </Container>
    </Layout>
  )
}
