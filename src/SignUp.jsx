import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import { AuthContext } from './firebase/providers/AuthProvider';

const SignUp = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm();
  
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const onSubmit = data => {
      console.log(data);
      createUser(data.email, data.password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          updateUserProfile(data.name, data.photoURL)
            .then(() => {
              console.log('user profile info updated');
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User Created Successfully',
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                navigate('/');
              });
            })
            .catch(error => console.log(error));
        });
    };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-4xl font-bold text-center mt-3">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && <span className='text-l text-red-600'>Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && <span className='text-l text-red-600'>Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true, minLength: 4, maxLength: 6 })}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                {errors.password?.type === 'required' && (
                  <span className='text-l text-red-600'>Password is required</span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className='text-l text-red-600'>Password should have a minimum length of 4</span>
                )}
                {errors.password?.type === 'maxLength' && (
                  <span className='text-l text-red-600'>Password should have a maximum length of 6</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="photourl"
                  {...register("photoURL", { required: true })}
                  name="photoURL"
                  placeholder="URL"
                  className="input input-bordered"
                />
                {errors.photoURL && <span className='text-l text-red-600'>Photo URL is required</span>}
                <p className='text-center mb-10'>
                  <small>
                    Already have an account? <Link to="/login" className='text-green-500'>Login</Link>
                  </small>
                </p>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
