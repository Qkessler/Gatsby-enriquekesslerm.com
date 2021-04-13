/** @jsx jsx */
import { IconButton, Box, Text, jsx, Link } from "theme-ui"
import { useSiteMetadata } from "gatsby-theme-blorg/src/hooks"
import { IconContext } from "react-icons"
import { FaFacebook } from "react-icons/fa"
import { SiTwitter } from "react-icons/si"
import { GrLinkedin } from "react-icons/gr"
import { FiMail } from "react-icons/fi"

const objectToGetParams = (object) => {
  return (
    "?" +
    Object.keys(object)
      .filter((key) => !!object[key])
      .map((key) => `${key}=${encodeURIComponent(object[key])}`)
      .join("&")
  )
}

const SocialButton = ({ link, children }) => (
  <Link href={link}>
    <Box sx={{ color: '#c0cbcf' }}>

      <IconButton
        sx={{
          px: 1,
          size: 30,
        }}
      >
        {children}
      </IconButton>
    </Box>
  </Link>

)

const TweetThisButton = ({ post: { title, slug }, size }) => {
  const { siteUrl, twitter } = useSiteMetadata()
  if (!twitter || twitter.length === 0) return null
  const link =
    `https://twitter.com/intent/tweet` +
    objectToGetParams({
      text: title,
      url: `${siteUrl}${slug}`,
      via: twitter,
    })

  return (
    <SocialButton link={link}>
      <SiTwitter size={size} />
    </SocialButton>
  )
}

const ShareWithFacebook = ({ post: { title, slug, excerpt }, size }) => {
  const { siteUrl } = useSiteMetadata()
  const facebookLink =
    `https://www.facebook.com/sharer/sharer.php` +
    objectToGetParams({
      u: `${siteUrl}${slug}`,
      title: title,
      quote: excerpt,
    })
  return (
    <SocialButton link={facebookLink}>
      <FaFacebook size={size} />
    </SocialButton>
  )
}

const ShareWithLinkedIn = ({ post: { title, slug }, size }) => {
  const { author, siteUrl } = useSiteMetadata()
  const linkedInLink =
    `https://www.linkedin.com/shareArticle` +
    objectToGetParams({
      mini: "true",
      source: author,
      url: `${siteUrl}${slug}`,
      title: title,
    })
  return (
    <SocialButton link={linkedInLink}>
      <GrLinkedin size={size} />
    </SocialButton>
  )
}

const ShareByMail = ({ post: { title, slug, excerpt }, size }) => {
  const { author, siteUrl } = useSiteMetadata()
  const mailToLink =
    `mailto:` +
    objectToGetParams({
      subject: `From ${siteUrl}${slug}: ${title}`,
      body:
        `Here is a post from ${author}'s blog that might interest you:\n\n` +
        `${title}. ${excerpt}\n${siteUrl}${slug}`,
    })
  return (
    <SocialButton link={mailToLink}>
      <FiMail size={size} />
    </SocialButton>
  )
}

const EditOnGithub = ({ post: { slug } }) => {
  const { social } = useSiteMetadata()
  const githubUser = social[2].url
  const edit = `${githubUser}/enriquekesslerm.com/edit/main/enriquekesslerm.com/content${slug}.org`
  return (
    <Link href={edit}>
      <Box sx={{ color: '#c0cbcf'}}>
        <Text sx={{ verticalAlign: "middle" }}>Edit this page on Github</Text>
      </Box>
    </Link>
  )
}

export default ({ post }) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      pt: 2,
    }}
  >
    <Box as="div" sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1, flexBasis: 500 }}>
      <Text pr={2}>Share with </Text>
      <IconContext.Provider value={{ style: {} }}>
        <TweetThisButton post={post} size={35} />
        <ShareWithFacebook post={post} size={35} />
        <ShareWithLinkedIn post={post} size={35} />
        <ShareByMail post={post} size={35} />
      </IconContext.Provider>
    </Box>
    <Box sx={{ flexGrow: 1, flexBasis: 150 }}>
      <EditOnGithub post={post} />
    </Box>
  </Box>
)
