/** @jsx jsx */

import { Container, Heading, jsx } from "theme-ui"
import Layout from "gatsby-theme-blorg/src/components/layout"

const NotFound = () => (
  <Layout>
    <Container variant="content">
      <main sx={{ flex: 1, pb: 4, mx: "auto" }}>
        <Heading as="h1">Not found</Heading>
      </main>
    </Container>
  </Layout>
)

export default NotFound
