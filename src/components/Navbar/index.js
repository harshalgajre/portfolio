import React from 'react'
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import { DiCssdeck } from "react-icons/di";
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';


const Nav = styled.div`
    background-color: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;


const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
` 

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }`;

    const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;
const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

`
const MobileMenuLinks = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;
const Navbar = () => {
    const {open, setOpen} = React.useState(false);
    const theme = useTheme();
  return (
   <Nav>
    <NavbarContainer>
        <NavLogo to="/">
            <a
             style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                marginBottom: "20;",
                cursor: "pointer",
             }}
             >
                <DiCssdeck size="3rem" /> <span>Portfolio</span>
             </a>
        </NavLogo>
        <MobileIcon>
            <FaBars
            onClick={() =>{
                setOpen(!open);

            }}
            />
        </MobileIcon>
        <NavItems>
        <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          
        </ButtonContainer>
        </NavbarContainer>
        {open && (
          <MobileMenu open={open}>
            <MobileMenuLinks 
            href="#about" 
            onClick={() => {
              setOpen(!open)
            }}>About</MobileMenuLinks>
            <MobileMenuLinks 
            href='#skills' onClick={() => {
              setOpen(!open)
            }}>Skills</MobileMenuLinks>
            <MobileMenuLinks href='#experience' onClick={() => {
              setOpen(!open)
            }}>Experience</MobileMenuLinks>
            <MobileMenuLinks href='#projects' onClick={() => {
              setOpen(!open)
            }}>Projects</MobileMenuLinks>
            <MobileMenuLinks href='#education' onClick={() => {
              setOpen(!open)
            }}>Education</MobileMenuLinks>
            <MobileMenuLinks href='#contact' onClick={() => {
              setOpen(!open)
            }}>Contact</MobileMenuLinks>
          </MobileMenu>
       ) }
      
    </Nav>
  )
}

export default Navbar
