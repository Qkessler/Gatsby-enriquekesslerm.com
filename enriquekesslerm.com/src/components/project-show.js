import React from 'react'
import { Box, Heading, Text } from 'theme-ui'


const PostShow = ({ logo, name, description }) => (
  <div>
    <Box as='div' p={2} my={3} mx={2} sx={{ border: '1px solid black' }
    }>
      <Heading as='h4' > {name} </Heading>
      <Text> {description} </Text>
    </Box>
  </div>
)

export default PostShow;
