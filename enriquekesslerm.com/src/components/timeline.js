/** @jsx jsx */

// import React from 'react'
import * as styles from './timeline.module.css'
import { Box, Text, jsx } from 'theme-ui'

const Timeline = ({ elements }) =>
(
  <Box className={styles.box}>
    <ul className={styles.ul}>
      {elements.map((event) => {
        <li>
          <span></span>
          <Text className={styles.title}>{event.title}</Text>
          <Text className={styles.info}>{event.info}</Text>
          <Box className={styles.time}>
            <span>{event.time}</span>
          </Box>
        </li>
      })}
    </ul>
  </Box>
)

export default Timeline;
