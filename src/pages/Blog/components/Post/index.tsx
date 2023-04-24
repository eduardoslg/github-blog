import { IPost } from '../..'
// import { relativeDateFormatter } from '../../../../utils/formatter'
import { PostContainer } from './styles'

interface PostProps {
  post: IPost
}

export function Post() {
  // const formattedDate = relativeDateFormatter(post.created_at)

  return (
    <PostContainer to={`/post/123`}>
      <div>
        <strong>Javascript data types and data structures</strong>
        <span>Há 1 dia</span>
      </div>
      <p>
        Programming languages all have build-in data structures, but these often
        differ from one language to another. This article attempts to list the
        build-in data structures available in...
      </p>
    </PostContainer>
  )
}
