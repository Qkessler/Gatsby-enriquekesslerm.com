import React from 'react'
import { Container, Text, Heading, Box } from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import ProjectShow from '../components/project-show'

export default function AboutPage() {
  return (
    <Layout>
      <Container variant='content'>
        <main sx={{ flex: 1, pb: 4, mx: 'auto' }}>
          TODO: Will have to change the Enrique part to gradient.
          <Heading as='h1' sx={{ pb: 4 }}>Hey, It's Enrique</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna lacus, vestibulum at fermentum a, fermentum ut arcu. Phasellus eget velit est. Vivamus id fringilla ligula, quis pulvinar orci. Morbi dignissim dui libero, at varius justo mollis in. Pellentesque suscipit vitae lorem a volutpat. Phasellus mattis sagittis erat quis mollis.</Text>
          <StaticImage src="../images/fotoCV.png"
            alt="Enrique Kessler Martínez"
            placeholder="blurred"
            layout="constrained"
                       width={200}
                       sx={{ float: 'right'}}
          />
          <Box as='div'>
            <Heading as='h2'>Projects</Heading>
            <ProjectShow name='testing' description='This is the first project'/>
          </Box>
        </main>
      </Container>
    </Layout>
  )
}

