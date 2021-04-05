/** @jsx jsx */

import { Container, Text, Heading, Box, jsx } from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { FaMusic } from 'react-icons/fa'

import ProjectShow from '../components/project-show'
import Timeline from '../components/timeline'
import MagicRainbowText from '../components/moving-rainbow-text'
import TravelMap from '../components/travel-map'
import CloudQuestionsLogo from '../../assets/svg/cq-logo.svg'
import { constants } from '../constants/constants'

const whiteFill = {
  fill: 'grey',
}

export default function AboutPage() {
  return (
    <Layout>
      <Container variant='content'>
        <main sx={{ flex: 1, pb: 4, mx: 'auto' }}>
          <Heading as='h1' sx={{ pb: 4, display: 'flex' }}>
            <Text sx={{ paddingRight: 2 }}>Hey, It's</Text>
            <MagicRainbowText intervalDelay={800}>Enrique</MagicRainbowText>
          </Heading>
          <Box sx={{ display: 'flex' }}>
            <Text pr={4} sx={{width: '75%'}}>{constants.aboutMeText}</Text>
            <StaticImage src="../../assets/images/fotoCV.png"
              alt="Enrique Kessler Martínez"
              placeholder="blurred"
              layout="constrained"
              width={200}
            />
          </Box>
          <Box as='div' py={4}>
            <Heading as='h2' pb={2}>Projects</Heading>
            <ProjectShow to='/projects/cloud-questions' name='CloudQuestions web' description={constants.cqWebDescription}>
              <Box as='div' mr={4} ml={1}>
                <CloudQuestionsLogo width={50} css={whiteFill} />
              </Box>
            </ProjectShow>
            <ProjectShow to='/projects/app-music' name='AppMusic' description={constants.appMusicDescription}>
              <Box as='div' mr={4} ml={1}>
                <FaMusic size={40} color='grey' />
              </Box>
            </ProjectShow>
          </Box>
          <Box as='div'>
            <Heading as='h2'>Timeline</Heading>
            <Timeline elements={constants.timelineElements} />
          </Box>
          <Box as='div'>
            <Heading as='h2' py={4}>Travel map</Heading>
            <TravelMap center={[37.607152579659946, -0.9878845758906367]} zoom={2} markers={constants.markers}/>
          </Box>
        </main>
      </Container>
    </Layout>
  )
}

