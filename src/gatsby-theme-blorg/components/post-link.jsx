/** @jsx jsx */
import { Link } from 'gatsby'
import { FaCalendar as DateIcon } from 'react-icons/fa'
import { Box, Flex, Heading, jsx, Text } from 'theme-ui'
import Tags from 'gatsby-theme-blorg/src/components/tags'

const postStyle = {
  padding: 3,
  maxWidth: 700,
  // bg: 'muted',
  borderRadius: '1em',
  borderWidth: 1,
  borderColor: 'definition',
  borderStyle: 'solid',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  '&:hover': {
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
  },
}

const PostLink = ({ title, category, slug, date, excerpt, tags }) => (
  <Box sx={{ mx: 'auto', width: '100%', ...postStyle }}>
    <article sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}>
      <Link to={`/${category}`}>
        <Text sx={{ fontStyle: 'italic' }}>{category}</Text>
      </Link>
      <header>
        <Link to={slug}>
          <Heading as='h3'>{title}</Heading>
        </Link>
        <time sx={{ color: 'gray', fontSize: 'small' }}>
          <DateIcon sx={{ mr: 1 }} />
          {date}
        </time>
      </header>
      <section sx={{ pb: 2, flex: 1 }}>
        <Text color='text'>{excerpt}</Text>
      </section>
      <Flex sx={{ justifyContent: 'flex-end', px: 1 }}>
        <Tags tags={tags} />
      </Flex>
    </article>
  </Box>
)

export default PostLink
