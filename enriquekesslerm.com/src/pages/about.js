import React from 'react'
import { Container, Text } from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'

export default function AboutPage() {
  return (
    <Layout>
      <Container variant='content'>
        <main sx={{ flex: 1, pb: 4, mx: 'auto'}}>
          <h1 sx={{ pb: 4 }}>About me</h1>
          <Text>Hey, I'm Enrique Kessler Martínez</Text>
        </main>
      </Container>
    </Layout>
  )
}

