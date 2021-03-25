import React from 'react'
import { Box, Heading, Text } from 'theme-ui'


export default function PostShow({logo, name, description}) {
    return (
        <div>
            <Box as= 'div' p={2} my={3} sx={{ border: '1px solid black'}}>
        <Heading as='h4' > { name } < /Heading>
            < Text > { description } </Text>
            </Box>
            < /div>
    )
}
