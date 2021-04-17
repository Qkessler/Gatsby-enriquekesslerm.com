/** @jsx jsx */

import * as styles from "./timeline.module.css"
import { Checkbox, Flex, Divider, Box, Text, jsx, Heading } from "theme-ui"

const TimelineEvent = ({ event }) => {
  return (
    <Flex ml={2}>
      {event.headline &&
       <Checkbox defaultChecked={true} />}
      <Box pb={3}>
        <Text as='h5' sx={{ mb: 1 }}>{event.headline}</Text>
        <Text>{event.info}</Text>
      </Box>
    </Flex>
  )
}

const Timeline = ({ elements, projects }) => {
  return (
    <Box className={styles.wrapper}>
      {elements.map(yearEvents => (
        <Box key={`year-${yearEvents.year}`} as="div">
          <Heading as="h4" pb={!projects ? 3 : 0}>{yearEvents.year}</Heading>
          {yearEvents.events.map((event, index) => (
            <TimelineEvent key={`event-${index}`} event={event} />
          ))}
          <Divider my={4} />
        </Box>
      ))}
    </Box>
  )
}

export default Timeline
