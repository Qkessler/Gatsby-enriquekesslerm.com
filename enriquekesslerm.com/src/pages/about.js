/** @jsx jsx */

// import React from 'react'
import { Container, Text, Heading, Box, jsx, Link } from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { FaMusic } from 'react-icons/fa'
import { Link as GatsbyLink } from 'gatsby'

import ProjectShow from '../components/project-show'
import MagicRainbowText from '../components/moving-rainbow-text'
import CloudQuestionsLogo from '../../assets/images/cq-logo.svg'

const aboutMeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna lacus, vestibulum at fermentum a, fermentum ut arcu. Phasellus eget velit est. Vivamus id fringilla ligula, quis pulvinar orci. Morbi dignissim dui libero, at varius justo mollis in. Pellentesque suscipit vitae lorem a volutpat. Phasellus mattis sagittis erat quis mollis.'


const whiteColor = {
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
          <Text>{aboutMeText}</Text>
          <StaticImage src="../../assets/images/fotoCV.png"
            alt="Enrique Kessler Martínez"
            placeholder="blurred"
            layout="constrained"
            width={200}
          />
          <Box as='div'>
            <Heading as='h2'>Projects</Heading>
            <Link to='/projects/cloud-questions' variant='project'>
              <ProjectShow name='CloudQuestions web' description='Django Web-App for studying which creates an easier customer experience applying a mix between “Flash Cards” and “Active Recall” studying techniques.'>
                <Box as='div' mr={4} ml={1}>
                  <CloudQuestionsLogo width={50} css={whiteColor} />
                </Box>
              </ProjectShow>
            </Link>
            <ProjectShow name='AppMusic' description='Maven Desktop App created with functionality that allows for xml importing, and implemented with patterns from the GoF Design Patterns book.'>
              <Box as='div' mr={4} ml={1}>
                <FaMusic size={40} color='grey'/>
              </Box>
            </ProjectShow>
          </Box>
          <Box as='div'>
            <Heading as='h2'>Timeline</Heading>
            
          </Box>
        </main>
      </Container>
    </Layout>
  )
}

