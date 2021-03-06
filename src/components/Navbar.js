import React,{useState,useEffect} from 'react';
import  {Link} from 'react-router-dom';
import {Link as Link1} from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {Button} from './Button/Button.js';
import classes from './Navbar.module.css';

function Navbar() {
    const [click,setClick] =  useState(false);
    const [button,setButton] =  useState(true);
    const handleClick = ()=>setClick(!click);
    // const handleButton = ()=>setButton(!button);

    const closeMobileMenu = ()=> setClick(false);

    const showButton = ()=>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }
    useEffect(()=>{
        showButton();
    },[])
    window.addEventListener('resize',showButton);
    return (
        <>
        <IconContext.Provider value={{color:'#6B25D0'}}>
            <div className={classes.navbar}>
                <div className={`${classes.navbar_container} ${classes.container}`}>
                    <Link to='/' className={classes.navbar_logo} onClick={closeMobileMenu}>
                        {/* <MdFingerprint className='navbar-icon'/> */}
                        <img src={process.env.PUBLIC_URL + '/Images/logo.svg'} className={classes.navbar_icon} alt="logo" />
                        CODINGCABLE.COM
                    </Link>
                    <div className={classes.menu_icon} onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className={click ? `${classes.nav_menu} ${classes.active}` : classes.nav_menu}>
                        <li className={classes.nav_item}>
                            <Link1 to='home' onClick={closeMobileMenu} className={classes.nav_links} smooth={true} duration={1000}>
                                Home
                            </Link1>
                        </li>
                        <li className={classes.nav_item}>
                            <Link1 to='courses' onClick={closeMobileMenu} className={classes.nav_links} smooth={true} duration={1000}>
                                Courses
                            </Link1>
                        </li>
                        <li className={classes.nav_item}>
                            <Link1 to='products' onClick={closeMobileMenu} className={classes.nav_links} smooth={true} duration={1000}>
                                Faculty
                            </Link1>
                        </li>
                        <li className={classes.nav_item}>
                            <Link1 to='products' onClick={closeMobileMenu} className={classes.nav_links} smooth={true} duration={1000}>
                                About Us
                            </Link1>
                        </li>
                        <li className={classes.nav_btn} >
                            {button ? (
                                <Link1 to='signup' className={classes.btn_link} smooth={true} duration={1000}>
                                    <Button buttonStyle='btn--rounded'>
                                        LogIn/SignUp
                                    </Button>
                                </Link1>
                            ):(
                                <Link1 to='signup' className={classes.btn_link} onClick={closeMobileMenu} smooth={true} duration={1000}>
                                    <Button buttonStyle='btn--outline'
                                            buttonSize='btn--mobile'>
                                                SIGN IN
                                    </Button>
                                </Link1>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
