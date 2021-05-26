import { useStaticQuery, graphql } from 'gatsby'


export const getCategoryFeeds = () => {
  const categories = useStaticQuery(graphql`
query {
    allOrgPost {
        distinct(field: category)
    }
}`).allOrgPost.distinct
  const categoryFeeds = categories.map(category => {
    serialize: () => Object.assign({}, category)
  })
}
