import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import loginImg from '../../img/login.jpg';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
    const { loginWithEmail, signUpGoogle, signInGithub } = useContext(AuthContext);
    const navigate = useNavigate()



    const handleLogin = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        loginWithEmail(email, password).then(result => {
            const user = result.user;
            console.log(user);

        }).catch(err => console.error(err))
    }

    const handleGoogle = e => {
        e.preventDefault()
        signUpGoogle(googleProvider).then(result => {
            const user = result.user;
            console.log(user);
            navigate('/')
        }).catch(err => console.error(err))

    }

    const handleGithub = e => {
        e.preventDefault()
        signInGithub(githubProvider).then(result => {
            const user = result.user;
            console.log(user);
            navigate('/')
        }).catch(err => console.error(err))



    }
    return (

        <div className="hero w-full">
            <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className='w-[460px] h-[502px]' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm  py-20 shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center my-5'>Or Sign Up with</p>
                    <div className='flex justify-center'>
                        <button className='btn btn-outline ml-3 my-5' onClick={handleGoogle}><FaGoogle /></button>
                        <button className='btn btn-outline ml-3 my-5' onClick={handleGithub} ><FaGithub /></button>

                    </div>
                    <p className='text-center'>New to Genius Car <Link to={'/signup'} className='text-orange-600 font-bold'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;