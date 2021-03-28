import React from 'react'
import { Box, Heading, Text } from 'theme-ui'

const PostShow = ({ name, description, children }) => {
  return (
    <div>
      <Box as='div' p={2} my={3} mx={2} sx={{ border: '1px solid #cccccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }
      }>
        {children}
        <Box as='div' px={2}>
          <Heading as='h4'> {name} </Heading>
          <Text> {description} </Text>
        </Box>
      </Box>
    </div>
  )
}

export default PostShow;
