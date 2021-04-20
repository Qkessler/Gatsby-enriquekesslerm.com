/** @jsx jsx */

import { graphql, Link } from 'gatsby'
import { Box, Heading, Container, jsx } from 'theme-ui'
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

const YearlyPosts = ({ nodes }) => {
  const postsByYearList = getPostsByYear(nodes)
  return (
    <Box as='div'>
      {Object.entries(postsByYearList)
        .reverse()
        .map(([year, posts]) => (
          <Box key={`year-${year}`}>
            <Heading as='h3'>{year}</Heading>
            <ul>
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
         <YearlyPosts nodes={nodes} />
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
