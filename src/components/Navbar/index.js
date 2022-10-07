import React, { useEffect, useState } from 'react'
import{FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavBarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    },[])

    const toggleHome = () => {
        scroll.scrollToTop();  
      } 
  return (
    <>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo tp='/'onClick={toggleHome}>muzzica</NavLogo>
            <MobileIcon>
                <FaBars onClick={toggle}/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about"
                    smooth={true}
                    offset={-80}
                    duration={500}
                    spy={true} 
                    exact='true'
                    >About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="discover"
                    smooth={true}
                    offset={-80}
                    duration={500}
                    spy={true} 
                    exact='true'
                    >Discover</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="services"
                    smooth={true}
                    offset={-80}
                    duration={500}
                    spy={true} 
                    exact='true'
                    >Services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="signup"
                    smooth={true}
                    offset={-80}
                    duration={500}
                    spy={true} 
                    exact='true'
                    >Sign-up</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="signin">Sign in</NavBtnLink>
            </NavBtn>

        </NavbarContainer>
    </Nav>
    
    </>
  )
}

export default Navbar