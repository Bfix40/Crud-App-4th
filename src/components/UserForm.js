import { useForm } from 'react-hook-form'

const UserForm = ({ onCreate }) => {

    const { register, handleSubmit } = useForm()

    const onSubmit = (res) => {
        console.log(res)
        onCreate(res)
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
            <input type="submit" value='enviar' />
        </form>
    )

}

export default UserForm