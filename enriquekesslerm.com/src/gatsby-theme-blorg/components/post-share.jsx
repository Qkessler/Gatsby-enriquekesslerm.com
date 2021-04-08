/** @jsx jsx */
import { Button, Heading, jsx } from 'theme-ui'
import { useSiteMetadata } from 'gatsby-theme-blorg/src/hooks'

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
      <Button sx={{
        width: '100%',
        px: 2,
      }}>
        <Heading as='h3'>Tweet this.</Heading>
      </Button>
    </a>
  )
}

const ShareWithFacebook = ({ post: { title, slug, excerpt } }) => {
  const { siteUrl } = useSiteMetadata();
  const facebookLink = `https://www.facebook.com/sharer/sharer.php?` +
    objectToGetParams({
      u: `${siteUrl}${slug}`,
      title: title,
      quote: excerpt,
    })
  console.log(facebookLink)
  return (<div></div>)
}

export default ({ post }) => (
  <div>
    <TweetThisButton post={post} />
    <ShareWithFacebook post={post} />
  </div>
)
