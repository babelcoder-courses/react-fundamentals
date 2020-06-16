import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function PostList() {
  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      const { data } = await axios.get('/posts')

      setPosts(data)
      setIsLoading(false)
    }

    fetchPosts()
  }, [])

  if (isLoading) return <div>Loading...</div>

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
