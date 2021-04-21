/** @jsx jsx */

import { useState, useEffect } from "react"
import * as styles from "./timeline.module.css"
import { Checkbox, Flex, Divider, Box, Text, jsx, Heading, IconButton } from "theme-ui"
import { constants } from '../constants/constants'
import {MdExpandMore} from 'react-icons/md'

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
  // State for the list
  const [eventsList, setList] = useState([...elements.slice(0, constants.showMoreNumber)])

  // State to trigger load more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(elements.length > constants.showMoreNumber)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = eventsList.length
      const isMore = currentLength < elements.length
      const nextResults = isMore
        ? elements.slice(currentLength, currentLength + constants.showMoreNumber)
        : []
      setList([...eventsList, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  // Check if there is more.
  useEffect(() => {
    const isMore = eventsList.length < elements.length
    setHasMore(isMore)
  }, [eventsList]) //eslint-disable-line
  
  return (
    <Box className={styles.wrapper}>
      {eventsList.map((yearEvents, index) => (
        <Box key={`year-${yearEvents.year}`} as="div">
          <Heading as="h4" pb={projects ? 0 : 3}>{yearEvents.year}</Heading>
          {yearEvents.events.map((event, index) => (
            <TimelineEvent ml={projects ? 0 : 3} pb={projects ? 0 : 3} key={`event-${index}`} event={event} />
          ))}
          {index != eventsList.length - 1 && <Divider my={4} sx={{
            height: '.15em',
            backgroundColor: 'muted'}} />
          }
        </Box>
      ))}
      { hasMore && (
        <Flex sx={{ justifyContent: 'center', mt: 3 }} onClick={handleLoadMore}>
          <IconButton>
            <MdExpandMore size={60}/>
          </IconButton>
          <Text sx={{ cursor: 'pointer' }}>See more</Text>
        </Flex>
       )}
    </Box>
  )
}

export default Timeline
