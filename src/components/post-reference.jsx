/** @jsx jsx */

import { FiBookmark } from 'react-icons/fi'
import { Box, jsx } from 'theme-ui'
import { constants } from '../constants/constants'

import PostLink from '../gatsby-theme-blorg/components/post-link'

const PostReference = ({ title, category, slug, date, excerpt, tags }) => {
  return (
    <PostLink title={title} category={category} slug={slug}
      date={date} excerpt={excerpt} tags={tags}>
      <Box as='div' sx={{ position: 'absolute', right: 2, top: -1 }}>
        <FiBookmark color={constants.iconGray} size={30}/>
      </Box>
    </PostLink>
  )
}

export default PostReference
