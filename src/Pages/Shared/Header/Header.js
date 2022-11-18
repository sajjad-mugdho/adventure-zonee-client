import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleSignOUT = (e) => {
    e.preventDefault()
    logOut()
  }

  const menuItem = <>
    <li className='font-semibold mr-2'><Link to={'/'}>Home</Link></li>
    <li className='font-semibold mr-2'><Link to={'/blog'}>Blog</Link></li>
    {user?.email ?
      <>
        <li className='font-semibold mr-2'><Link to={'/reviews'}>My Reviews</Link></li>
        <li className='font-semibold mr-2'><Link to={'/add-services'}>Add Service</Link></li>
        <img className='w-10 rounded-full ' src={user?.photoURL} alt="" />
        <Link onClick={handleSignOUT} className="btn btn-outline ml-5">Sign Out</Link>
      </>
      :
      <>
        <li className='font-semibold mr-2'><Link to={'/signup'}>Sign Up</Link></li>
        <li className='nav-end font-semibold mr-2'><Link to={'/login'}>Login</Link></li>
      </>
    }
  </>

  return (
    <div className="navbar glass bg-gradient-to-r from-cyan-200 via-sky-400 to-teal-400">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItem}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost font-serif normal-case text-xl">Adventure Zone</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItem}
        </ul>
      </div>
      
    </div>
  );
};

export default Header;