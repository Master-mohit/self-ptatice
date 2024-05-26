import React, { useState, useEffect } from 'react'
import axios from '../Axios/Axios'

const User = () => {
  const [user, setUser] = useState([])
  const [error, setError] = useState("")

  const getData = async () => {
    try {
      const res = await axios.get("/users")
      setUser(res.data)
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div>
        <h1>im user pagee...</h1>
      </div>

      {error ? error : null}

      {user.map((user) => {
        const { id, name, username } = user
        return (
          <div key={id}>
            <h2>{name.slice(0, 6).toUpperCase()}</h2>
            <h3>{username}</h3>
            <h4>{id}</h4>
          </div>
        )
      })}
    </>
  )
}

export default User
