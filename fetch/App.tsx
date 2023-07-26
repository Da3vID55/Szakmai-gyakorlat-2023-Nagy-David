import { useEffect, useState } from "react"
import { PostList } from "./components/PostList";
import { PostType } from "./components/Types";
import "bootstrap/dist/css/bootstrap.css";
import './app.css'


function App() {

  const [posts, setPosts] = useState<PostType[]>([]);
  const [newTitle, setNewTitle] = useState("")
  const [newBody, setNewBody] = useState("")
  const [user, setUser] = useState(1)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      return response.json();
    })
    .then(data => {
      setPosts(data)
    })
  }, [])

  function createPost()
  {
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: newTitle,
      body: newBody,
      userId: user,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => setPosts([...posts,json]));

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
          <button className="btn postButton" onClick={() => createPost()}>Create Post</button>
        </div>
      </div>
      <PostList posts={posts}></PostList>
    </>
  )
}

export default App
