/** @jsx jsx */

import * as styles from './timeline.module.css'
import { Box, Text, jsx, Heading } from 'theme-ui'

const Timeline = ({ elements }) => {
  return (
    <Box className={styles.wrapper}>
      {elements.map((yearEvents) => (
        <Box as='div'>
          <Heading as='h4'>{yearEvents.year}</Heading>
          <ul className={styles.sessions}>
            {yearEvents.events.map((event) => {
              return (
                <li key={event} className={styles.timelineElem}>
                  <span></span>
                  <Text className={styles.info} sx={{ color: 'text' }}>{event.info}</Text>
                </li>
              )
            })}
          </ul>
        </Box>
      ))}
    </Box>
  )
}

export default Timeline;
