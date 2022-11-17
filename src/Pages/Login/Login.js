import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl font-bold text-center'>Login</h2>



                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: 'Email Address is required',
                            })} />
                        {errors.email && <p role="alert">{errors.email?.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs"{...register("password", {
                            required: true,
                            minLength: { value: 6, message: "Must be 6 characters" }
                        })} />
                        {errors.password && <p role="alert">{errors.password?.message}</p>}
                    </div>
                    <label className="label">
                        <span className="label-text">Forget Password</span>
                    </label>
                    <input className='btn btn-outline w-full' type="submit" />
                </form>



                <p>New Account <Link className='text-secondary' to='/signup'>Create New Account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Google</button>


            </div>

        </div>
    );
};

export default Login;