/** @jsx jsx */

import * as styles from "./timeline.module.css"
import { Checkbox, Flex, Divider, Box, Text, jsx, Heading } from "theme-ui"
import { constants } from '../constants/constants'

const TimelineEvent = ({ event, ml, pb }) => {
  return (
    <Flex ml={ml}>
      {event.headline &&
        <Checkbox defaultChecked={true} />}
      <Box pb={pb}>
        <Text as='h5' sx={{ mb: 1 }}>{event.headline}</Text>
        <Text>{event.info}</Text>
      </Box>
    </Flex>
  )
}

const Timeline = ({ elements, projects }) => {
  return (
    <Box className={styles.wrapper}>
      {elements.map((yearEvents, index) => (
        <Box key={`year-${yearEvents.year}`} as="div">
          <Heading as="h4" pb={projects ? 0 : 3}>{yearEvents.year}</Heading>
          {yearEvents.events.map((event, index) => (
            <TimelineEvent ml={projects ? 0 : 3} pb={projects ? 0 : 3} key={`event-${index}`} event={event} />
          ))}
          {index != elements.length - 1 && <Divider my={4} sx={{
            height: '.25em',
            backgroundColor: 'muted'}} />
          }
        </Box>
      ))}
    </Box>
  )
}

export default Timeline
