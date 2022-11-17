import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleSignUp = data => {
        console.log(data);
        console.log(errors);
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl font-bold text-center'>Sign-Up</h2>



                <form onSubmit={handleSubmit(handleSignUp)}>
                    {/* Name Field  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" placeholder="Name" className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: 'Name is required',
                            })} />
                        {errors.name && <p role="alert">{errors.name?.message}</p>}
                    </div>

                    {/* Email Field  */}
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

                    {/* Password Field  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs"{...register("password", {
                            required: true,
                            minLength: { value: 6, message: "Must be 6 characters" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/, message: 'Password must be strong' }
                        })} />
                        {errors.password && <p role="alert">{errors.password?.message}</p>}
                    </div>


                    {/* <label className="label">
                        <span className="label-text">Forget Password!</span>
                    </label> */}
                    <input className='btn btn-outline w-full mt-5' type="submit" value='Sign-Up' />
                </form>



                <p>Login Page <Link className='text-secondary' to='/login'>Login</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Google</button>


            </div>

        </div>
    );
};

export default Signup;