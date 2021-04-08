/** @jsx jsx */
import { IconButton, Text, jsx } from 'theme-ui'
import { useSiteMetadata } from 'gatsby-theme-blorg/src/hooks'
// import {} from 'react-icons/'

const objectToGetParams = object => {
  return '?' + Object.keys(object)
    .filter(key => !!object[key])
    .map(key => `${key}=${encodeURIComponent(object[key])}`)
    .join('&')
}

const TweetThisButton = ({ post: { title, slug } }) => {
  const { siteUrl, twitter } = useSiteMetadata()
  if (!twitter || twitter.length === 0) return null
  const link = `https://twitter.com/intent/tweet` + objectToGetParams({
    text: title,
    url: `${siteUrl}${slug}`,
    via: twitter,
  })

  return (
    <a href={link}>
      <IconButton sx={{
        px: 2,
      }}>
        
      </IconButton>
    </a>
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
  console.log(facebookLink)
  return (<div></div>)
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
  console.log(linkedInLink)
  return (<div></div>)
}

const ShareByMail = ({ post: { title, slug, excerpt } }) => {
  const { author, siteUrl } = useSiteMetadata();
  const mailToLink = `mailto:` +
    objectToGetParams({
      subject: `From ${siteUrl}${slug}: ${title}`,
      body: `Here is a post from ${author}'s blog that might interest you:\n\n` +
        `${title}. ${excerpt}\n${slug}`,
    })
  console.log(mailToLink)
  return (<div></div>)
}

export default ({ post }) => (
  <div>
    <TweetThisButton post={post} />
    <ShareWithFacebook post={post} />
    <ShareWithLinkedIn post={post} />
    <ShareByMail post={post} /> 
  </div>
)
