/** @jsx jsx */

import { Box, Link, Text, Container, Heading, jsx } from "theme-ui"
import { Link as GatsbyLink } from 'gatsby'
import Layout from "gatsby-theme-blorg/src/components/layout"

const NotFound = () => (
  <Layout>
    <Container variant='content'>
      <main sx={{ flex: 1, pb: 4, mx: 'auto' }}>
        <Heading as='h1' pb={3}>Oops, not found</Heading>
        <Box>
          <blockquote>
            <p sx={{
              borderLeft: '5px',
              borderTop: '0',
              borderBottom: '0',
              borderRight: '0',
              borderStyle: 'solid',
              borderColor: 'primary',
              pl: 3,
              fontStyle: 'italic',
            }}>
              <q>The HTTP 404, 404 Not Found, 404, 404 Error, Page Not Found, File Not Found, or Server Not Found error message is a Hypertext Transfer Protocol (HTTP) standard response code, in computer network communications, to indicate that the browser was able to communicate with a given server, but the server could not find what was requested. The error may also be used when a server does not wish to disclose whether it has the requested information.
              </q>
            </p>
            <footer>
              <Link href='https://en.wikipedia.org/wiki/HTTP_404'>—Wikipedia</Link>
            </footer>
          </blockquote>
        </Box>
        <Box>
          <Text>
            You might have ended up here because the page that you were looking for no longer exists,
            or because you are trying to access information that is not meant to be accessed.
        </Text>
          <Text> Either way, please, </Text>
          <Link as={GatsbyLink} to='/'>head home</Link>.
        </Box>
      </main>
    </Container>
  </Layout>
)

export default NotFound
