/** @jsx jsx */
import { IconButton, Flex, jsx } from 'theme-ui'
import { useSiteMetadata } from 'gatsby-theme-blorg/src/hooks'
import { IconContext } from 'react-icons'
import { FaFacebook } from 'react-icons/fa'
import { SiTwitter } from 'react-icons/si'
import { GrLinkedin } from 'react-icons/gr'
import { FiMail } from 'react-icons/fi'

const objectToGetParams = object => {
  return '?' + Object.keys(object)
    .filter(key => !!object[key])
    .map(key => `${key}=${encodeURIComponent(object[key])}`)
    .join('&')
}

const SocialButton = ({ link, children }) => (
  <a href={link}>
    <IconButton sx={{
      px: 2,
    }}>
      {children}
    </IconButton>
  </a>
)

const TweetThisButton = ({ post: { title, slug } }) => {
  const { siteUrl, twitter } = useSiteMetadata()
  if (!twitter || twitter.length === 0) return null
  const link = `https://twitter.com/intent/tweet` + objectToGetParams({
    text: title,
    url: `${siteUrl}${slug}`,
    via: twitter,
  })

  return (
    <SocialButton link={link}>
      <SiTwitter />
    </SocialButton>
  )
}

const ShareWithFacebook = ({ post: { title, slug, excerpt } }) => {
  const { siteUrl } = useSiteMetadata();
  const facebookLink = `https://www.facebook.com/sharer/sharer.php` +
    objectToGetParams({
      u: `${siteUrl}${slug}`,
      title: title,
      quote: excerpt,
    })
  return (
    <SocialButton link={facebookLink}>
      <FaFacebook />
    </SocialButton>
  )
}

const ShareWithLinkedIn = ({ post: { title, slug } }) => {
  const { author, siteUrl } = useSiteMetadata();
  const linkedInLink = `https://www.linkedin.com/shareArticle` +
    objectToGetParams({
      mini: 'true',
      source: author,
      url: `${siteUrl}${slug}`,
      title: title,
    })
  return (
    <SocialButton link={linkedInLink}>
      <GrLinkedin />
    </SocialButton>)
}

const ShareByMail = ({ post: { title, slug, excerpt } }) => {
  const { author, siteUrl } = useSiteMetadata();
  const mailToLink = `mailto:` +
    objectToGetParams({
      subject: `From ${siteUrl}${slug}: ${title}`,
      body: `Here is a post from ${author}'s blog that might interest you:\n\n` +
        `${title}. ${excerpt}\n${siteUrl}${slug}`,
    })
  return (
    <SocialButton link={mailToLink}>
      <FiMail />
    </SocialButton>)
}

export default ({ post }) => (
  <Flex sx={{ color: 'gray', alignItems: 'center', flexWrap: 'wrap', pt: 2 }}>
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <TweetThisButton post={post} />
      <ShareWithFacebook post={post} />
      <ShareWithLinkedIn post={post} />
      <ShareByMail post={post} />
    </IconContext.Provider>
  </Flex>

)
