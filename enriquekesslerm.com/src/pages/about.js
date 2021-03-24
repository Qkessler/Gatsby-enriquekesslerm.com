import React from 'react'
import { Container } from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'

export default function AboutPage() {
  return (
    <Layout>
      <Container variant='content'>
        <main sx={{ flex: 1, pb: 4, mx: 'auto'}}>
          <h1>About page</h1>
        </main>
      </Container>
    </Layout>
  )
}

