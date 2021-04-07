/** @jsx jsx */

import { Link } from 'gatsby'
import _ from 'lodash/fp'
import { Box, Flex, Heading, jsx, Text, Container } from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'
import PostList from 'gatsby-theme-blorg/src/components/post-list'
import SEO from "gatsby-theme-blorg/src/components/seo"
import Tags from 'gatsby-theme-blorg/src/components/tags'

import { constants } from '../../constants/constants'

const rootPath = `${__PATH_PREFIX__}/`

export const Post = ({ id, date, title, category, tags, excerpt, slug }) => {
  return (
    <Flex key={`p-${id}`} sx={{
      bg: 'surface',
      px: 3,
      py: 2,
      borderRadius: 6,
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: '0.3s',
      '&:hover': { bg: 'highlight' },
    }}>
      <Link href={`${slug}`}>
        <Box py={2}>
          <Text variant='caption' color='gray'>{date}</Text>
          <Heading as='h1' color='primary'>{title}</Heading>
          <Text color='text'>{excerpt}</Text>
        </Box>
      </Link>
      <Tags tags={tags} />
    </Flex>
  )
}

const PaginationLink = ({ url, children }) => {
  if (!url) return <div></div>
  return (
    <Link to={url}>{children}</Link>
  )
}

export default ({ data, location, pageContext }) => {
  const posts = data.allOrgPost.nodes
  const category = location.pathname.replace(new RegExp(`^${rootPath}`), '')
  const keywords = _.flow(
    _.reduce((all, p) => [...all, p.category, ...(p.tags || [])], []),
    _.uniq,
    _.compact,
  )(posts)

  const { next, prev, columns } = pageContext

  // As I use /blog as Index path for the posts, I need to use the header
  // category if the category is not 'blog'.
  const isBlog = category === `blog`

  return (
    <Layout>
      <SEO title='Blog' keywords={keywords} />
      <main sx={{ flex: 1 }}>
        {isBlog && (
          <Container pb={4} variant='content'>
            <Heading as='h1'>Blog</Heading>
            <Text pt={4} pb={2}>{constants.blogText}</Text>
          </Container>
        )}
        {category && category.length > 0 && isNaN(category) &&
          !isBlog && (
            <Heading as='h1' sx={{
              pt: 4, pb: 4,
              textTransform: 'capitalize',
              textAlign: 'center',
              letterSpacing: '0.1em'
            }}>{category}</Heading>
          )}
        <PostList posts={posts} columns={columns} />
      </main>
      <Flex sx={{ justifyContent: 'space-between', width: '100%' }}>
        <PaginationLink url={prev}>
          ◄ more recent posts
        </PaginationLink>
        <PaginationLink url={next}>
          older posts ►
        </PaginationLink>
      </Flex>
    </Layout>
  )
}
