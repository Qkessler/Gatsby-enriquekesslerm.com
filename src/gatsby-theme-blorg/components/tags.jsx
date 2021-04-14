/** @jsx jsx */

import { Link } from 'gatsby'
import { Badge, Flex, jsx, Text } from 'theme-ui'

const Tags = ({ tags }) => {
  return (
    <Flex sx={{ flexWrap: 'wrap', mx: -1, alignItems: 'center' }}>
      { tags.map(tag =>
        <Link key={`tag-${tag}`} to={`/:${tag}:`}>
          <Badge variant='tag' sx={{ mx: 1, my: 1, opacity: 0.8 }}>
            <Text>{ tag }</Text>
          </Badge>
        </Link>
      ) }
    </Flex>
  )
}

export default Tags
