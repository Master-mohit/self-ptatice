import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'


const About = () => {

  const [post, setpost] = useState([])
  const [posterror, setposterror] = useState("")

  const getPost = async() => {
    
   try {
    const res = await axios.get("/photos")  

    setpost(res.data)
   } catch (error) {
    console.log(error);
    setposterror(error.message)
   }

  }
    useEffect(() => {
      getPost()
    }, [])

  return (
     <>
   <div>
      <h1>im about page....</h1>
    </div>
    {posterror ? posterror : ""}
    {post && post.map((post) => {
         
      const { albumId, id, title, url } = post
        return(
         <div key={id}>
          <h1>{albumId}</h1>
          <h2>{id}</h2>
          <h3>{title}</h3>
          <p>{url}</p>
        </div>
        )
     })}
     </>
    
  )
}

export default About
