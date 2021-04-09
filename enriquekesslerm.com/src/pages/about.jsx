/** @jsx jsx */

import { Container, Text, Heading, Box, jsx, Link } from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'
import SEO from 'gatsby-theme-blorg/src/components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import { Link as GatsbyLink } from 'gatsby'

import Projects from '../components/projects'
import Timeline from '../components/timeline'
import MagicRainbowText from '../components/moving-rainbow-text'
import TravelMap from '../components/travel-map'
import { constants } from '../constants/constants'

export default function AboutPage() {
  return (
    <Layout>
      <Container variant='content'>
        <SEO title='About' />
        <main sx={{ flex: 1, pb: 4, mx: 'auto' }}>
          <Heading as='h1' sx={{ pb: 4, display: 'flex' }}>
            <Text sx={{ paddingRight: 2 }}>Hey, It's</Text>
            <MagicRainbowText intervalDelay={800}>Enrique</MagicRainbowText>
          </Heading>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Text pb={4} pr={4} sx={{ flexGrow: 1, flexBasis: 500 }}>{constants.aboutMeText}</Text>
            <StaticImage src="../../assets/images/fotoCV.png"
              alt="Enrique Kessler Martínez"
              placeholder="blurred"
              layout="constrained"
              sx={{ flexGrow: 1, flexBasis: 0, minWidth: 200, maxWidth: 250, margin: 'auto' }}
            />
          </Box>
          <Box as='div' py={4}>
            <Heading as='h2' pb={2}>Latest Projects</Heading>
            <Projects number={3} />
            <Text>You can find the rest of the projects
              <Link as={GatsbyLink} to='/projects' sx={{ paddingLeft: 1 }}>here.</Link>
            </Text>
          </Box>
          <Box as='div'>
            <Heading as='h2'>Timeline</Heading>
            <Timeline elements={constants.timelineElements} />
          </Box>
          <Box as='div'>
            <Heading as='h2' py={4}>Travel map</Heading>
            <TravelMap center={[37.607152579659946, -0.9878845758906367]} zoom={2} markers={constants.markers} />
          </Box>
        </main>
      </Container>
    </Layout>
  )
}

