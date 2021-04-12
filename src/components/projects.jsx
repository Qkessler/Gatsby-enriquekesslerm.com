/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { FaMusic } from "react-icons/fa"

import ProjectShow from "../components/project-show"
import Timeline from '../components/timeline'
import CloudQuestionsLogo from "../../assets/svg/cq-logo.svg"
import { constants } from "../constants/constants"

const greyFill = {
  fill: "#cbcdd1",
}

const projects = [
  {
    year: 2021,
    events: [
      {
        info: (
          <ProjectShow
            to="/enriquekesslermcom"
            name="enriquekesslerm.com"
            description={constants.webDescription}
          />
        )
      },
      {
        info: (
          < ProjectShow
            to="/projects/cq-app"
            name="CloudQuestions App"
            description={constants.cqAppDescription}
          >
            <Box as="div" sx={{ width: "100%", maxWidth: 60 }}>
              <CloudQuestionsLogo width="100%" css={greyFill} />
            </Box>
          </ProjectShow >
        )
      },
    ]
  },
  {
    year: 2020,
    events: [
      {
        info: (
          < ProjectShow
            to="/projects/app-music"
            name="AppMusic"
            description={constants.appMusicDescription}
          >
            <Box as="div" sx={{ width: "100%", maxWidth: 50, marginX: 1 }}>
              <FaMusic size="100%" color="#cbcdd1" />
            </Box>
          </ProjectShow >
        )
      },
      {
        info: (
          < ProjectShow
            to="/projects/cloud-questions"
            name="CloudQuestions web"
            description={constants.cqWebDescription}
          >
            <Box as="div" sx={{ width: "100%", maxWidth: 60 }}>
              <CloudQuestionsLogo width="100%" css={greyFill} />
            </Box>
          </ProjectShow >
        )
      }
    ]
  },
]

function getAllProjects() {
  var allProjects = []
  projects.forEach(yearProjects => {
    allProjects.push(...yearProjects.events.map(e => e.info))
  })
  return allProjects
}

const Projects = ({ number, timeline }) => {
  const allProjects = getAllProjects()
  const sliceNumber = number ? number : allProjects.length
  return (
    <div>
      { timeline && <Timeline elements={projects} />}
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
