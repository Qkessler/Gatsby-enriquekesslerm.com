/** @jsx jsx */

import { Container, Heading, jsx, Text, Box, Link } from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'
import { GrLinkedin } from 'react-icons/gr'
import { FaGithub } from 'react-icons/fa'
import { Link as GatsbyLink } from 'gatsby'

import Projects from '../components/projects'
import { constants } from '../constants/constants'

const SocialItem = ({ text, to, children }) => (
  <Box pb={2} sx={{ display: 'flex' }}>
    {children}
    <Link as={GatsbyLink} to={to}>
      <Box as='div' sx={{ color: 'text', fontWeight: '600' }}>
        <Text pl={2}>{text}</Text>
      </Box>
    </Link>
  </Box>
)

export default function ProjectsPage() {
  return (
    <Layout>
      <Container variant='content'>
        <main sx={{ flex: 1, pb: 4, mx: 'auto' }}>
          <Heading as='h1'>Projects</Heading>
          <Text pt={4} pb={2}>{constants.projectsText}</Text>
          <ul>
            <li key='linkedin'>
              <SocialItem text='/enrique-kessler-martinez' to={constants.linkedinLink}>
                <GrLinkedin size={22} sx={{ color: 'text' }} />
              </SocialItem>
            </li>
            <li key='github'>
              <SocialItem text='/Qkessler' to={constants.githubLink}>
                <FaGithub size={22} sx={{ color: 'text' }} />
              </SocialItem>
            </li>
          </ul>
          <Projects/>
        </main>
      </Container>
    </Layout>
  )
}
