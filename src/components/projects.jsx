/** @jsx jsx */

import { jsx, Box } from "theme-ui"

import Timeline from '../components/timeline'
import { constants } from "../constants/constants"

function getAllProjects() {
  var allProjects = []
  constants.projects.forEach(yearProjects =>
    allProjects.push(...yearProjects.events.map(e => e.info)))
  return allProjects
}

const Projects = ({ number, timeline }) => {
  const allProjects = getAllProjects()
  const sliceNumber = number ? number : allProjects.length
  return (
    <div>
      { timeline && <Timeline elements={constants.projects} projects />}
      { !timeline &&
        <Box as="div">
          <ul>
            {allProjects.slice(0, sliceNumber).map((p, index) => (
              <li key={index}>{p}</li>
            ))}
          </ul>
        </Box>
      }
    </div>
  )
}

export default Projects
