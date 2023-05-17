import {DiscussionEmbed} from "disqus-react"

const DisqusComments = ({ post }) => {
  const disqusShortname = "blog-yeeah8ejeu"
  const disqusConfig = {
    url: "https://blog-6ac4.vercel.app",
    identifier: post.id, // Single post id
    title: post.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;