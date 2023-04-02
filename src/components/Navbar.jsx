import React from 'react'
import { Link } from 'react-router-dom';
import { styles } from '../styles'
import { navLinks } from '../constants';
import './mystyle.css'
import { logo, menu, close } from '../assets';
const Navbar = () => {
  const [active, setActive] = React.useState("")
  var [toggle, setToggle] = React.useState(false)
  const Navshow = (link) => {
    return (
      <>
        <li key={Math.random()} className={`${active === link.link.title ? "fwhite text-white" : "text-secondary"} fwhite hover:text-white text-[18px]`}>
          <a key={Math.random()} href={`${link.link.id}`} className='navlist-i fwhite linksnav text-white no-underline'>
            <p className=' text-white '>
              {link.link.title}
            </p>
          </a>
        </li>
      </>
    )
  }
  const DataL = navLinks.map((link) => {
    return (<Navshow link={link} key={Math.random()} />)
  })
  const Navshow2 = (link) => {
    return (
      <>
        <li key={Math.random()} className={`${active === link.link.title ? " nav-item-menu fwhite text-white" : "text-secondary"} fwhite hover:text-white text-[18px]`}>
          <a key={Math.random()} href={`${link.link.id}`} className='navlist-i fwhite nav-item-menu  menu-links text-white no-underline'>
            <p className=' text-white menu-itemp '>

              {link.link.title}
            </p>
          </a>
        </li>
      </>
    )
  }
  const DataL2 = navLinks.map((link) => {
    return (<Navshow2 link={link} key={Math.random()} />)
  })
  return (
    <nav className={`${styles.paddingX} nav-class w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='nav-cont w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link to="/" className=' logo-sub text-white flex items-center gap-2 no-underline' onClick={() => { setActive(""); window.scrollTo(0, 0) }}>
          <img src={logo} alt="logo" className='logo-img h-9 w-9 object-contain ' />
          {/* <p className='text-white text-[18px] no-underline font-bold cursor-pointer logo-sub no-underline'><span className='sm:block hidden logo-sub2 logo-sub'> WEB DEVELOPER</span></p> */}
        </Link>
        <ul className='ul-list-top text-white navlist list-none sm:flex flex-row gap-10 ' >
          {DataL}
        </ul>
        <div className=' flex flex-1 justify-end menu-top-nav items-center'>
          <img src={!toggle ? menu : close} alt={menu} className=' w-[20px] h-[28px] object-contain cursor-pointer menu-top' onClick={() => { setToggle(toggle=!toggle) }} />
          <div className={`${!toggle ? 'hidden' : 'block'} p-6 list-nav absolute top-20`}>
            {DataL2}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar