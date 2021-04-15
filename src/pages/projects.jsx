/** @jsx jsx */

import { Container, Heading, jsx, Text, Box, Link } from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'
import SEO from 'gatsby-theme-blorg/src/components/seo'
import { GrLinkedin } from 'react-icons/gr'
import { FaGithub } from 'react-icons/fa'

import Projects from '../components/projects'
import { constants } from '../constants/constants'

const SocialItem = ({ text, to, children }) => (
  <Box pb={2} sx={{ display: 'flex' }}>
    {children}
    <a href={to}>
      <Box as='div' sx={{ color: 'text', fontWeight: '600' }}>
        <Text pl={2}>{text}</Text>
      </Box>
    </a>
  </Box>
)

export default function ProjectsPage() {
  return (
    <Layout>
      <Container variant='content'>
        <SEO title='Projects'></SEO>
        <main sx={{ flex: 1, pb: 4, mx: 'auto' }}>
          <Heading as='h1' pb={3}>Projects</Heading>
          <Text>{constants.projectsText1}</Text>
          <Link href={constants.githubLink}>
            Github
          </Link>
          <Text> {constants.projectsText2}</Text>
          <Box pt={2}>
            <Text> {constants.projectsText3}</Text>
            <Link href={constants.linkedinLink}>LinkedIn</Link>
            <Text> and </Text>
            <Link href={constants.twitterLink}>Twitter</Link>.
          </Box>
          <Projects timeline />
        </main>
      </Container>
    </Layout>
  )
}
