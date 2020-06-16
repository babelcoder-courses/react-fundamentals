import React from 'react'

import useFetch from './useFetch'

export default function UserList() {
  const { data: users, isLoading } = useFetch('/users')

  if (isLoading) return <div>Loading...</div>

  return (
    <ul>
      {users.map((post) => (
        <li key={post.id}>{post.email}</li>
      ))}
    </ul>
  )
}
