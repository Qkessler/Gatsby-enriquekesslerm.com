/** @jsx jsx */
// import React from 'react'
import { Box, Heading, Text, jsx, Link } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

const PostShow = ({ name, description, children, to }) => {
  return (
    <div>
      <Link as={GatsbyLink} to={to}>
        <Box as='div' p={2} my={3} mx={2} sx={{ border: '1px solid #cccccc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'text' }
        }>
          {children}
          <Box as='div' px={2}>
            <Heading as='h4'> {name} </Heading>
            <Text> {description} </Text>
          </Box>
        </Box>
      </Link>
    </div>
  )
}

export default PostShow;
