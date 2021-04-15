/** @jsx jsx */
import { Link } from 'gatsby'
import { FaCalendar as DateIcon } from 'react-icons/fa'
import { Box, Flex, Heading, jsx, Text } from 'theme-ui'
import Tags from 'gatsby-theme-blorg/src/components/tags'

const postStyle = {
  padding: 3,
  maxWidth: 700,
  borderRadius: '1em',
  borderWidth: 1,
  borderColor: 'definition',
  borderStyle: 'solid',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  position: 'relative',
  '&:hover': {
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
  },
}

const PostLink = ({ title, category, slug, date, excerpt, tags, children }) => (
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
          <Heading as='h3' sx={{ color: 'text'}}>{title}</Heading>
        </Link>
        <Flex sx={{ verticalAlign: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <time sx={{ color: 'gray', fontSize: 'small', pr: 2 }}>
            <DateIcon sx={{ mr: 1 }} />
            {date}
          </time>
          <Tags tags={tags} />
        </Flex>
      </header>
      <section sx={{ pb: 2, flex: 1 }}>
        <Text color='text'>{excerpt}</Text>
      </section>
    </article>
    {children}
  </Box>
)

export default PostLink
