/** @jsx jsx */

import { jsx, Box } from 'theme-ui'
import { FaMusic } from 'react-icons/fa'

import ProjectShow from '../components/project-show'
import CloudQuestionsLogo from '../../assets/svg/cq-logo.svg'
import { constants } from '../constants/constants'

const greyFill = {
  fill: '#cbcdd1',
}


const projects = [
  (
    <ProjectShow to='/projects/enriquekesslerm' name='enriquekesslerm.com' description={constants.webDescription}>
    </ProjectShow>
  ),
  (
    <ProjectShow to='/projects/cq-app' name='CloudQuestions App' description={constants.cqAppDescription}>
      <Box as='div' sx={{ width: '100%', maxWidth: 60 }}>
        <CloudQuestionsLogo width='100%' css={greyFill} />
      </Box>
    </ProjectShow>
  ),
  (
    <ProjectShow to='/projects/app-music' name='AppMusic' description={constants.appMusicDescription}>
      <Box as='div' sx={{ width: '100%', maxWidth: 50, marginX: 1 }}>
        <FaMusic size='100%' color='#cbcdd1' />
      </Box>
    </ProjectShow>
  ),
  (
    <ProjectShow to='/projects/cloud-questions' name='CloudQuestions web' description={constants.cqWebDescription}>
      <Box as='div' sx={{ width: '100%', maxWidth: 60 }}>
        <CloudQuestionsLogo width='100%' css={greyFill} />
      </Box>
    </ProjectShow>
  ),
]

const Projects = ({ number }) => {
  const sliceNumber = number ? number : projects.length
  return (
    <Box as='div'>
    { projects.slice(0, sliceNumber).map((p) => (p)) }
    </Box>
  )
}

export default Projects
