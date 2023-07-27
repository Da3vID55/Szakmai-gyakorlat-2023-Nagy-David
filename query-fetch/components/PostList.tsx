import { PostType } from "./Types"
import { Post } from "./Post"

interface PostListProps
{
    posts:PostType[]
}

export const PostList = ({posts}:PostListProps) => {
  return (
    <>
        <div className="container text-center">
            <div className="row row-cols-1">
                {posts.map((post) => <Post id={post.id} userId={post.userId} title={post.title} body={post.body}></Post>)}
            </div>
        </div>
    </>
  )
}