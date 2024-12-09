// import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
type FormDataType = {
    name: string;
    email: string;
    password: string;
}

const Hook = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormDataType>();

    const onSubmit: SubmitHandler<FormDataType> = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            {/* //NAME */}
            <label htmlFor="name">Name</label>
            <input type="text" id='name' {...register('name', { required: "Name is required" })} />
            {errors.name && <p style={{ color: 'red' }} >{errors.name.message}</p>}

            {/* //EMAIL */}
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder='email' {...register('email', {
                required: 'email is required',
                pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Please enter a valid email address", },
            })} />
            {errors.email && <p style={{ color: 'red' }} >{errors.email.message}</p>}

            {/* PASSWORD */}
            <label htmlFor="password">Password</label>
            <input type="password" id='password' {...register('password', {required:"password is required" , minLength: { value: 8, message: "password must be of 8 characters"} })} />
            {errors.password && <p style={{ color: 'red' }} >{errors.password.message}</p>}
            <button type='submit'  >
                submit
            </button>
        </form>
    )
}

export default Hook