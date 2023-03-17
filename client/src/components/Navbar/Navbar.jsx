import React from 'react'
import './navbar.css'
import { useState } from 'react'
import { Link , Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer';
const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <Link to="/b"><a>Progamação</a></Link>
      <Link to="/c"><a>Planos</a></Link>
      <Link to="/d"><a>Sobre</a></Link>
      <Link to="/"><a>Ajuda</a></Link>
      <Link to="/"><a>Entrar</a></Link>
      <Link to="/"><a>Vire Membro</a></Link>
    </div>
  );
};

function Navbar() {
  const [isShown, setIsShown] = useState(false);
  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <div className='topnav'>
        <Link to="/">
          <div className='logo'>
            PODCAST
          </div>
        </Link>
        <div className='menu'>
          <Link to="/" className='Link'>Podcast</Link>
          <Link to="/b" className='Link'>Progamação</Link>
          <Link to="/c" className='Link'>Planos</Link>
          <Link to="/d" className='Link'>Sobre</Link>
          <Link to="/"  className='Link'>Ajuda</Link>
          <Link to="/" className='btn1'>Entrar</Link>
          <Link to="/" className='btn2'>Vire Membro</Link>
        </div>
        {!isShown && (
          <button className='show-mobile-menu-button' onClick={toggleMobileMenu}>
          &#8801;
          </button>
        )}
      </div>
      {isShown && <MobileMenu />}
      {isShown && (
        <button className='close-mobile-menu-button' onClick={toggleMobileMenu}>
          &#8801;
        </button>
      )}
    <Outlet/>
      <Footer/>
    </>
  );
}

export default Navbar