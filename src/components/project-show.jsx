/** @jsx jsx */

import { Box, Heading, Text, jsx, Link, Flex, Badge } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"

/*
  Tags will follow the structure:
  {
     text: '',
     color: '',
  }
  */

export const Tag = ({ text, color }) => {
  return (
    <Badge variant='tag' sx={{ mx: 1, my: 1, opacity: 0.8, bg: color }}>
      <Text>{text}</Text>
    </Badge>
  )
}

const ProjectShow = ({ name, description, to, tags, children }) => {
  return (
    <div>
      <Link as={GatsbyLink} to={to}>
        <Box
          as="div"
          p={3}
          my={3}
          mx={2}
          sx={{
            borderWidth: 1,
            borderRadius: '1em',
            borderColor: 'definition',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "text",
            '&:hover': {
              boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
            },
          }}
        >
          {children}
          <Box as="div" px={2}>
            <Flex sx={{ flexWrap: 'wrap' }}>
              <Heading as="h4" pr={2}> {name} </Heading>
              <Flex sx={{ justifySelf: 'flex-end' }}>
                {tags?.map((tag, index) => (
                  <li key={`tag-${index}`}>
                    <Tag text={tag.text} color={tag.color} />
                  </li>
                ))}
              </Flex>
            </Flex>
            <Text> {description} </Text>
          </Box>
        </Box>
      </Link>
    </div>
  )
}

export default ProjectShow
