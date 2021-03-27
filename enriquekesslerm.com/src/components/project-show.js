import React from 'react'
import { Box, Heading, Text } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'

const PostShow = ({ name, description, children }) => {
  return (
    <div>
      <Box as='div' p={2} my={3} mx={2} sx={{ border: '1px solid #cccccc', display: 'flex' }
      }>
        {children}
        <Box as='div'>
          <Heading as='h4'> {name} </Heading>
          <Text> {description} </Text>
        </Box>
      </Box>
    </div>
  )
}

export default PostShow;
