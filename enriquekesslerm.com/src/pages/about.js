import React from 'react'
import { Container, Text, Heading, Box } from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'
import { StaticImage } from 'gatsby-plugin-image'

import ProjectShow from '../components/project-show'
import MagicRainbowText from '../components/moving-rainbow-text'


const aboutMeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna lacus, vestibulum at fermentum a, fermentum ut arcu. Phasellus eget velit est. Vivamus id fringilla ligula, quis pulvinar orci. Morbi dignissim dui libero, at varius justo mollis in. Pellentesque suscipit vitae lorem a volutpat. Phasellus mattis sagittis erat quis mollis.'

export default function AboutPage() {
  return (
    <Layout>
      <Container variant='content'>
        <main sx={{ flex: 1, pb: 4, mx: 'auto' }}>
          <Heading as='h1' sx={{ pb: 4, display: 'flex'}}>
            <Text sx={{ paddingRight: 2 }}>Hey, It's</Text>
            <MagicRainbowText>Enrique</MagicRainbowText>
          </Heading>
          <Text>{aboutMeText}</Text>
          <StaticImage src="../images/fotoCV.png"
            alt="Enrique Kessler Martínez"
            placeholder="blurred"
            layout="constrained"
            width={200}
          />
          <Box as='div'>
            <Heading as='h2'>Projects</Heading>
            <ProjectShow name='testing' description='This is the first project' />
          </Box>
        </main>
      </Container>
    </Layout>
  )
}

