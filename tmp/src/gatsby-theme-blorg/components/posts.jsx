/** @jsx jsx */

import { Link, StaticQuery, graphql } from 'gatsby'
import _ from 'lodash/fp'
import { Box, Flex, Heading, jsx, Text, Container } from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'
import SEO from "gatsby-theme-blorg/src/components/seo"
import Tags from 'gatsby-theme-blorg/src/components/tags'
import PostList from 'gatsby-theme-blorg/src/components/post-list'

import { constants } from '../../constants/constants'
import Search from '../../components/search'

const rootPath = `${__PATH_PREFIX__}/`

export const Post = ({ id, date, title, tags, excerpt, slug }) => {
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


const SearchBox = ({columns, allPosts, ...rest}) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <Container {...rest} variant='content'>
        <Search searchIndex={data.siteSearchIndex.index} columns={columns} allPosts={allPosts}/>
      </Container>
    )}
  />
)


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
          <Container pb={2} variant='content'>
            <Heading as='h1'>Blog</Heading>
            <Text pt={4}>{constants.blogText}</Text>
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
        {isBlog && <SearchBox pb={4} pt={3} columns={columns} allPosts={posts}/>}
        { !isBlog && <PostList posts={posts} columns={columns} /> }
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
