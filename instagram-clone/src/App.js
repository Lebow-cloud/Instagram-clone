import React, { useEffect } from "react"
import "./App.css";
import {useState} from "react"
import Post from "./components/Post"
import {db} from "./firebase"

function App() {

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    db.collection("posts").onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  },[])

  return (
    <div className="app">
      <div className="app__header">
        <img
        width = "100"
        className="app__headerImage" 
        src="insta.png" 
        alt=""
        />
      </div>
      <h1>Stories Space</h1>

      {
        posts.map(post=>(
          <Post username={post.username} caption={post.caption} imageURL={post.imageURL}/>
      ))
      }

      <Post username="Lebow" caption="Practice of React" imageURL="./DSC04737.jpg"/>
      <Post username="sadfsa" caption="asdfadsf" imageURL="./DSC04737.jpg"/>
      <Post username="4356345" caption="sdfh 54 rfgh w" imageURL="./DSC04737.jpg"/>
      
    </div>
  );
}

export default App;
