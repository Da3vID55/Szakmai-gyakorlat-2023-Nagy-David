import { useState } from "react"
import { Post } from "./components/Post";
import { PostType } from "./components/Types";
import "bootstrap/dist/css/bootstrap.css";
import './app.css'
import { useQuery, useQueryClient,useMutation  } from "@tanstack/react-query";
import * as PostsApi from './api/PostsApi'


function App() {
  const [newTitle, setNewTitle] = useState("")
  const [newBody, setNewBody] = useState("")
  const [user, setUser] = useState(1)
  const qClient = useQueryClient()

  const pQuery = useQuery({
    queryKey: ['posts'],
    queryFn: PostsApi.getPosts,
  })

  const createPostMutation = useMutation({
    mutationFn: (newPostData: PostType) => PostsApi.createPost(newPostData),
    onSuccess: (data: PostType, variables, context) => {
      qClient.setQueryData<PostType[]>(['posts'], prevPosts => {
          if (prevPosts) {
              return [data, ...prevPosts];
          }
          return [data];
      });
  },
  })

  const handleNewPost = (newPost: PostType) => {
    createPostMutation.mutate(newPost)
  }



  return (
    <>
      <div className="container text-center">
        <img src="src\assets\greener.png" height={60}></img>
      </div>
      <div className="container text-start" style={{padding:"10px"}}>
        <div className="col-2">
          <select className="form-select" aria-label="Default select example" onChange={(e) => setUser(parseInt(e.target.value))}>
            <option selected>Select user</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <label htmlFor="newPostTitle" className="from-label">Title</label>
          <input className="form-control" type="text" id="newPostTitle" onChange={(e) => setNewTitle(e.target.value)}></input>
          <label htmlFor="newPostBody" className="from-label">Post</label>
          <textarea className="form-control" rows={3} id="newPostBody" onChange={(e) => setNewBody(e.target.value)}></textarea>
        </div>
        <div className="container text-end newPostButtonWrap">
          <button className="btn postButton" onClick={() => handleNewPost({userId:user,title:newTitle,body:newBody,id:0})}>Create Post</button>
        </div>
      </div>
      
      <div className="container text-center">
            <div className="row row-cols-1">
                {pQuery.data?.map((post) => <Post id={post.id} userId={post.userId} title={post.title} body={post.body}></Post>)}
            </div>
        </div>
    </>
  )
}

export default App
