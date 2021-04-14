/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { useSiteMetadata } from 'gatsby-theme-blorg/src/hooks'
import { SiTwitter, SiGithub } from "react-icons/si"
import { GrLinkedin } from "react-icons/gr"
import { FiMail } from "react-icons/fi"

import { constants } from '../../constants/constants'
import { SocialButton } from '../components/post-share'


const getUrl = (name) => {
  const { social } = useSiteMetadata()
  for (let socialItem of social) {
    if (socialItem.name === name) return socialItem.url
  }
}

const SocialLinks = ({ ...props }) => {
  return (
    <Box {...props} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <SocialButton link={getUrl('twitter')} ariaLabel='Twitter' mx={3}>
        <SiTwitter size={35} />
      </SocialButton>
      <SocialButton link={getUrl('github')} ariaLabel='Github' mx={3}>
        <SiGithub size={35} />
      </SocialButton>
      <SocialButton link={getUrl('linkedin')} ariaLabel='LinkedIn' mx={3}>
        <GrLinkedin size={35} />
      </SocialButton>
      <SocialButton link={getUrl('email')} ariaLabel='Email' mx={3}>
        <FiMail size={35} />
      </SocialButton>
    </Box>
  )
}

export default () => {
  const { author } = useSiteMetadata()
  return (
    <footer sx={{
      py: 5,
      textAlign: 'center',
      contentAlign: 'center',
      color: `${constants.softGray}`
    }}>
      <SocialLinks pb={2} />
      <Box>
        All materials &copy; {`${(new Date()).getFullYear()}`}, {author}.
      </Box>
      <Box>
        Powered by <a href="https://orgmode.org">org-mode</a>, using <a href="https://orga.js.org">orgajs</a> and <a href="https://www.gatsbyjs.com">Gatsby</a>.
      </Box>
    </footer>

  )
}
