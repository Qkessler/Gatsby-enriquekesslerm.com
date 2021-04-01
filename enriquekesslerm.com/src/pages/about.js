/** @jsx jsx */

// import React from 'react'
import { Container, Text, Heading, Box, jsx } from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { FaMusic } from 'react-icons/fa'
// import { Link as GatsbyLink } from 'gatsby'

import ProjectShow from '../components/project-show'
import Timeline from '../components/timeline'
import MagicRainbowText from '../components/moving-rainbow-text'
import CloudQuestionsLogo from '../../assets/images/cq-logo.svg'

const aboutMeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna lacus, vestibulum at fermentum a, fermentum ut arcu. Phasellus eget velit est. Vivamus id fringilla ligula, quis pulvinar orci. Morbi dignissim dui libero, at varius justo mollis in. Pellentesque suscipit vitae lorem a volutpat. Phasellus mattis sagittis erat quis mollis.'


const whiteFill = {
  fill: 'grey',
}

const cqWebDescription = 'Django Web-App for studying which creates an easier customer experience applying a mix between “Flash Cards” and “Active Recall” studying techniques.'

const appMusicDescription = 'Maven Desktop App created with functionality that allows for xml importing, and implemented with patterns from the GoF Design Patterns book.'

const timelineElements = [
  {
    'year': 2021,
    'events': [
      { 'info': 'this is the info for the 2021 event' },
      { 'info': 'this is the second event for 2021' },
    ],
  },
  {
    'year': 2020,
    'events': [
      { 'info': 'this is the info for the 2020 event' },
      { 'info': 'this is the second event for 2020' },
    ],
  },
]

export default function AboutPage() {
  return (
    <Layout>
      <Container variant='content'>
        <main sx={{ flex: 1, pb: 4, mx: 'auto' }}>
          <Heading as='h1' sx={{ pb: 4, display: 'flex' }}>
            <Text sx={{ paddingRight: 2 }}>Hey, It's</Text>
            <MagicRainbowText intervalDelay={800}>Enrique</MagicRainbowText>
          </Heading>
          <Text>{aboutMeText}</Text>
          <StaticImage src="../../assets/images/fotoCV.png"
            alt="Enrique Kessler Martínez"
            placeholder="blurred"
            layout="constrained"
            width={200}
          />
          <Box as='div' py={4}>
            <Heading as='h2' pb={2}>Projects</Heading>
            <ProjectShow to='/projects/cloud-questions' name='CloudQuestions web' description={cqWebDescription}>
              <Box as='div' mr={4} ml={1}>
                <CloudQuestionsLogo width={50} css={whiteFill} />
              </Box>
            </ProjectShow>
            <ProjectShow to='/projects/app-music' name='AppMusic' description={appMusicDescription}>
              <Box as='div' mr={4} ml={1}>
                <FaMusic size={40} color='grey' />
              </Box>
            </ProjectShow>
          </Box>
          <Box as='div'>
            <Heading as='h2'>Timeline</Heading>
            <Timeline elements={timelineElements} />
          </Box>
        </main>
      </Container>
    </Layout>
  )
}

