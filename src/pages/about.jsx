/** @jsx jsx */

import { Container, Text, Heading, Box, jsx, Link } from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'
import SEO from 'gatsby-theme-blorg/src/components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import { Link as GatsbyLink } from 'gatsby'

import Timeline from '../components/timeline'
import TravelMap from '../components/travel-map'
import { constants } from '../constants/constants'

export default function AboutPage() {
  return (
    <Layout>
      <Container variant='content'>
        <SEO title='About' />
        <main sx={{ flex: 1, pb: 4, mx: 'auto' }}>
          <Heading as='h1' sx={{ pb: 3 }}> About me
          </Heading>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Box sx={{ flexGrow: 1, flexBasis: 500, pb: 4, pr: 4 }}>
              <Box pb={2} as='div'>
                <Text>{constants.aboutMeText1}</Text>
                <Link href={constants.umuLink}> University of Murcia</Link>
                <Text>, on my fourth year!</Text>
              </Box>
              <Box pb={2} as='div'>
                <Text>{constants.aboutMeText2}</Text>
              </Box>
              <Box pb={2} as='div'>
                <Text>{constants.aboutMeText3}</Text>
                <Link as={GatsbyLink} to='/projects'>open source personal projects </Link>
                <Text>{constants.aboutMeText4}</Text>
              </Box>
              <Box pb={2}>
                <Text>{constants.aboutMeText5}</Text>
              </Box>
              <Link href='#footer'>Connect with me</Link>
            </Box>
            <StaticImage src="../../assets/images/fotoCV.png"
              alt="Enrique Kessler Martínez"
              placeholder="blurred"
              layout="constrained"
              sx={{ flexGrow: 1, flexBasis: 0, minWidth: 200, maxWidth: 250, margin: 'auto' }}
            />
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

