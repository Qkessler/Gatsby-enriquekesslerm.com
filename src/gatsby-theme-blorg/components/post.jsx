/** @jsx jsx */
import { Link } from 'gatsby'
import { Box, Container, Divider, Flex, jsx, Text } from 'theme-ui'
import { FaTags as TagsIcon } from 'react-icons/fa'
import HTML from 'gatsby-theme-blorg/src/components/html'
import Layout from 'gatsby-theme-blorg/src/components/layout'
import PostHero from 'gatsby-theme-blorg/src/components/post-hero'
import PostTitle from 'gatsby-theme-blorg/src/components/post-title'
import SEO from 'gatsby-theme-blorg/src/components/seo'

import PostMeta from './post-meta'
import Bio from './bio'
import PostShare from './post-share'
import Tags from './tags'


export default ({ data }) => {

  const post = data.orgPost

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.excerpt}
        imageSource={post.image?.childImageSharp?.fluid.src}
        keywords={[post.category, ...(post.tags || [])]} />
      <Container variant='content'>
        <main sx={{ flex: 1, pb: 4, mx: 'auto' }}>
          <article>
            <header sx={{ pb: 1 }}>
              <PostHero post={post} />
              <PostTitle>{post.title}</PostTitle>
              <Flex sx={{ alignItems: 'center', mt: -4, mb: 3 }}>
                <Box sx={{ pr: 3 }}>
                  <PostMeta post={post} />
                </Box>
              </Flex>
            </header>
            <section>
              <HTML raw={post.html} />
            </section>
          </article>
        </main>
        <Box>
          <Flex sx={{ alignItems: 'center', verticalAlign: 'center', justifyContent: 'flex-end' }}>
            <Link to={`/${post.category}`} sx={{ pr: 1 }}>
              <Text sx={{ p: 2, textAlign: 'right' }}>
                {post.category}
              </Text>
            </Link>
            {post.tags.length > 0 && <TagsIcon sx={{ mr: 2 }} />}
            <Tags tags={post.tags} />
          </Flex>
          <Divider />
          <PostShare post={post} />
          <Divider />
          <Bio />
        </Box>

      </Container>
    </Layout>
  )
}
