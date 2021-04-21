/** @jsx jsx */

import { graphql, Link } from 'gatsby'
import { Box, Text, Heading, Container, jsx } from 'theme-ui'
import Layout from 'gatsby-theme-blorg/src/components/layout'
import SEO from 'gatsby-theme-blorg/src/components/seo'

function getPostsByYear(nodes) {
  var postsByYear = {}
  for (var post of nodes) {
    if (!(post.date in postsByYear)) {
      postsByYear[post.date] = []
    }
    postsByYear[post.date].push(post)
  }
  return postsByYear
}

const YearlyPosts = ({ nodes, ...props }) => {
  const postsByYearList = getPostsByYear(nodes)
  return (
    <Box {...props} as='div'>
      {Object.entries(postsByYearList)
        .reverse()
        .map(([year, posts]) => (
          <Box key={`year-${year}`}>
            <Heading as='h3'>{year}</Heading>
            <ul sx={{ ml: 3 }}>
              {posts.map(post =>
                (
                  <li key={`post-${post.slug}`}>
                    <Link to={post.slug}>{post.title}</Link>
                  </li>
                )
              )}
              </ul>
          </Box>
        )
        )
      }
    </Box>
  )
}

const ArchivePage = ({ data }) => {
  const { nodes } = data.allOrgPost
  return (
    <Layout>
       <Container variant='content'>
         <SEO title='Archive' />
         <Heading as='h1' sx={{ pb: 3 }}> Archive </Heading>
         <Text> Welcome to the Archive. All the posts are ordered by publish date.</Text>
         <YearlyPosts pt={4} nodes={nodes} />
       </Container>
     </Layout>
  )
}

export default ArchivePage

export const query = graphql`
query ArchiveQuery {
  allOrgPost(sort: {fields: date, order: DESC}) {
    nodes {
      title
      date(formatString: "YYYY")
      slug
    }
  }
}
`
