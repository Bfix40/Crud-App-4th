import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const EditForm = ({defValues, onEdit}) => {


  const { register, handleSubmit, reset } = useForm()

  const emptyValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
  }
  
  useEffect(() => {
    if (defValues) {
      reset(defValues)
    }
  },[reset, defValues])

    const onSubmit = (res) => {
      onEdit(res)
       reset(emptyValues)
    }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="first_name">First Name</label>
            <input id="first_name" {...register('first_name')} />
            <br />
            <label htmlFor="last_name">Last Name</label>
            <input id="last_name" {...register('last_name')} />
            <br />
            <label htmlFor="email">Email</label >
            <input id="email"  {...register('email')} />
            <br />
            <label htmlFor="password">Password</label>
            <input id="password" {...register('password')} />
            <br />
            <label htmlFor="birthday">Birthday</label >
            <input id="birthday" type='date' {...register('birthday')} />
            <br />
            <input type="submit" value='Edit' />
        </form>
  )
}

export default EditForm