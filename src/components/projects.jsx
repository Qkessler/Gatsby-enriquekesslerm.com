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
            tags={[
              { text: 'Gatsby', color: '#8a4baf' },
              { text: 'React', color: '#2cd8e4' },
              { text: 'JavaScript', color: '#ff9800' },
            ]}
          />
        )
      },
      {
        info: (
          < ProjectShow
            to="/projects/cq-app"
            name="CloudQuestions App"
            description={constants.cqAppDescription}
            tags={[
              { text: 'Flutter', color: '#0693e3' },
              { text: 'Dart', color: '#0d96f2' },
              { text: 'Firebase', color: '#fcb900' },
            ]}
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
            to="/app-music"
            name="AppMusic"
            description={constants.appMusicDescription}
            tags={[
              { text: 'Java11', color: '#f44336' },
              { text: 'Spring', color: '#eb144c' },
              { text: 'GoF patterns', color: '#a1887f' },
            ]}
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
            tags={[
              { text: 'Python3.7', color: '#fcb900' },
              { text: 'Django', color: '#1273de' },
              { text: 'Google Cloud', color: '#2d6686' },
            ]}
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
  projects.forEach(yearProjects =>
    allProjects.push(...yearProjects.events.map(e => e.info)))
  return allProjects
}

const Projects = ({ number, timeline }) => {
  const allProjects = getAllProjects()
  const sliceNumber = number ? number : allProjects.length
  return (
    <div>
      { timeline && <Timeline elements={projects} projects/>}
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
