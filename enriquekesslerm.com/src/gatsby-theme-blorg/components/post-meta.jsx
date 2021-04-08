/** @jsx jsx */

import { Flex, Box, jsx, Text, Link } from "theme-ui"
import {
  FaCalendar as DateIcon,
  FaClock as TimeToReadIcon,
  FaPencilAlt as WordCountIcon,
} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Link as GatsbyLink } from 'gatsby'

const Info = ({ children }) => (
  <Flex sx={{ alignItems: 'center' }}>
    { children.icon}
    <Box sx={{ px: 2 }}>{children.info}</Box>
  </Flex>
)

const PostDate = ({ post }) => (
  <Flex sx={{ color: 'gray', alignItems: 'center', flexWrap: 'wrap', pt: 2 }}>
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <Info>{{
        info:
        <Box sx={{ display: 'flex'}}>
          <Text pr={1}>By</Text>
            <Link as={GatsbyLink} to='/'>
              <Text>Enrique Kessler Martínez</Text>
            </Link>
          <Text pl={2}>|</Text>
          </Box>,
      }}
      </Info>
      <Info>{{
        icon: <DateIcon />,
        info: post.date
      }}</Info>
      <Info>{{
        icon: <WordCountIcon />,
        info: `${post.wordCount} words`
      }}</Info>
      <Info>{{
        icon: <TimeToReadIcon />,
        info: `${post.timeToRead} minutes`
      }}</Info>
    </IconContext.Provider>
  </Flex>
)

export default PostDate


