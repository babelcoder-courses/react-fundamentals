import React from 'react'
import { useForm } from 'react-hook-form'

export default function App() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      gender: 'Male',
    },
  })

  const submit = (value) => {
    console.log(value)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="text" name="email" ref={register} />
      <input type="password" name="password" ref={register} />
      <input type="text" name="gender" ref={register} />
      <button type="submit">Submit</button>
    </form>
  )
}
