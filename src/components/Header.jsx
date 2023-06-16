import React, { useContext } from 'react';
import chef from '../../images/chef.png'
import { AuthContext } from '../firebase/providers/AuthProvider';
import { Link } from 'react-router-dom';
const Header = () => {

  const {user, logOut} =  useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.error(error));
  }

    return (
        <div>

        <div className="navbar bg-black-400">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
    
    
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-4xl">Mad Chef</a>
 <img className='w-20' src={chef} alt='chef'></img>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      <li tabIndex={0}>
    
      </li>
      <li>
            <a className='text-2xl' href="/">Home</a>
          </li>
          <li tabIndex={0}></li>
          <li tabIndex={0}></li>
          <li tabIndex={0}></li>
          <li tabIndex={0}></li>
          <li tabIndex={0}></li>
          <li tabIndex={0}></li>
          <li>
          <a className='text-2xl' href="blog">Blog</a>
        </li>
        <li tabIndex={0}></li>
          <li tabIndex={0}></li>
          <li tabIndex={0}></li>
          <li tabIndex={0}></li>
          <li tabIndex={0}></li>
          <li tabIndex={0}></li>
        <li>
          <a className='text-2xl' href="chefsrecipe">Chefs Recipe</a>
        </li>
    </ul>
  </div>
  <div className="navbar-end">

  {user ? (
    <li className="btn">
      <span>{user.displayName}</span>
      <button onClick={handleLogOut} className="btn btn-ghost">
        Log Out
      </button>
    </li>
  ) : (
    <li className="btn">
      <Link className='text-2xl' to="/login">Log In</Link>
    </li>
  )}
  </div>
</div>
        </div>
    );
};

export default Header;