/** @jsx jsx */

import { Box, Container, Heading, Text, jsx, Link } from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'
import SEO from 'gatsby-theme-blorg/src/components/seo'
import PostList from 'gatsby-theme-blorg/src/components/post-list'
import { StaticQuery, graphql, Link as GatsbyLink } from 'gatsby'

import MagicRainbowText from '../components/moving-rainbow-text'
import { constants } from '../constants/constants'
import Projects from '../components/projects'

const LatestPosts = () => (
  <StaticQuery
    query={graphql
      `
      query LatestPostsQuery {
         allOrgPost(limit: 3, sort: {fields: date, order: DESC}) {
            nodes {
               id
               date
               title
               tags
               excerpt
               slug
           }
        }
     }
      `}
    render={data => {
      const posts = data.allOrgPost.nodes
      posts.forEach(post => {
        const date = post.date
        const moment = require("moment")
        post.date = moment(date).add(-1, "d").format(`MMMM DD, YYYY`)
      })
      return (
        <Box as='div' mt={2} mb={3}>
          <PostList posts={posts} />
        </Box>
      )
    }}
  />
)

export default function IndexPage() {
  return (
    <Layout>
      <Container variant='content'>
        <SEO title='Home'></SEO>
        <main sx={{ flex: 1, pb: 4, mx: 'auto' }}>
          <Heading as='h1' sx={{ pb: 4, display: 'flex' }}>
            <Text sx={{ paddingRight: 2 }}>Hey, It's</Text>
            <MagicRainbowText intervalDelay={800}>Enrique</MagicRainbowText>
          </Heading>
          <Text mb={5}>I am a Software Engineering student at
            <Link href='http://www.um.es/' sx={{ paddingLeft: 1, paddingRight: 1 }}>
              University of Murcia (UMU)
            </Link>
            and an
            <Link href='https://github.com/Qkessler' sx={{ paddingLeft: 1, paddingRight: 1 }}>
              OpenSource
            </Link>
            lover. This web has been created to share some of my findings and
            opening myself up to the world.
            </Text>
          <Box as='div' py={4}>
            <Heading as='h2' pb={2}>Latest posts</Heading>
            <LatestPosts />
            <Text my={4}>You can find the rest
              <Link as={GatsbyLink} to='/blog' sx={{ paddingLeft: 1 }}>here.</Link>
            </Text>
          </Box>
          <Box as='div' py={4}>
            <Heading as='h2' pb={2}>Latest Projects</Heading>
            <Projects number={3} />
            <Text>You can find the rest of the projects
              <Link as={GatsbyLink} to='/projects' sx={{ paddingLeft: 1 }}>here.</Link>
            </Text>
          </Box>
        </main>
      </Container>
    </Layout>
  )
}
