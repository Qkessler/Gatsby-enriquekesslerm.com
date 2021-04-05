/** @jsx jsx */

import { Container, Heading, jsx, Text, Box, Link } from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'
import { GrLinkedin } from 'react-icons/gr'
import { FaGithub, FaMusic } from 'react-icons/fa'
import { Link as GatsbyLink } from 'gatsby'

import ProjectShow from '../components/project-show'
import CloudQuestionsLogo from '../../assets/svg/cq-logo.svg'
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

const greyFill = {
  fill: '#cbcdd1',
}

const projects = [
  (
    <ProjectShow to='/projects/enriquekesslerm' name='enriquekesslerm.com' description={constants.webDescription}>
    </ProjectShow>
  ),
  (
    <ProjectShow to='/projects/cq-app' name='CloudQuestions App' description={constants.cqAppDescription}>
      <Box as='div' sx={{ width: '100%', maxWidth: 60 }}>
        <CloudQuestionsLogo width='100%' css={greyFill} />
      </Box>
    </ProjectShow>
  ),
  (
    <ProjectShow to='/projects/app-music' name='AppMusic' description={constants.appMusicDescription}>
      <Box as='div' sx={{ width: '100%', maxWidth: 50, marginX: 1 }}>
        <FaMusic size='100%' color='#cbcdd1' />
      </Box>
    </ProjectShow>
  ),
  (
    <ProjectShow to='/projects/cloud-questions' name='CloudQuestions web' description={constants.cqWebDescription}>
      <Box as='div' sx={{ width: '100%', maxWidth: 60 }}>
        <CloudQuestionsLogo width='100%' css={greyFill} />
      </Box>
    </ProjectShow>
  ),
]



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
          {projects.slice(0,).map((p) => (p))}
        </main>
      </Container>
    </Layout>
  )
}
