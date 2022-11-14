import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../img/login.jpg';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const SignUp = () => {
    const {signUpEmail, signUpGoogle, signInGithub} = useContext(AuthContext);

    const navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault()
        const form = e.target; 
        const name = form.name.value;
        const photoURL =form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log('Name:', name,email, 'email',photoURL, 'photoURL', password,'password' );
        signUpEmail(email, password).then(result => {
            const user = result.user;
            console.log(user);
        }).catch(err => console.error(err))
        form.reset()
        

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
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="PhotoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Sign Up" />

                        </div>
                    </form>
                    <p className='text-center my-5'>Or Sign Up with</p>
                    <div className='flex justify-center'>
                        <button className='btn btn-outline ml-3 my-5' onClick={handleGoogle}><FaGoogle></FaGoogle></button>
                        <button className='btn btn-outline ml-3 my-5' onClick={handleGithub} ><FaGithub></FaGithub></button>
                        
                    </div>
                    <p className='text-center'>Already Have An account? Please <Link to={'/login'} className='text-orange-600 font-bold'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;