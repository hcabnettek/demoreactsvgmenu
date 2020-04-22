/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom'

import {ReactComponent as BurgerIcon} from '../icons/cheese-burger.svg';
import {ReactComponent as BellIcon} from '../icons/bell.svg';
import {ReactComponent as BoltIcon} from '../icons/bolt.svg';
import {ReactComponent as CaretIcon} from '../icons/caret.svg';
import {ReactComponent as ChevronIcon} from '../icons/chevron.svg';
import {ReactComponent as CogIcon} from '../icons/cog.svg';
import {ReactComponent as ArrowIcon} from '../icons/arrow.svg';


const Nav = () => {
  return (
    <Navbar>
      <NavItem icon={<BellIcon />}/>
      <NavItem icon={<BoltIcon />}/>
      <NavItem icon={<BurgerIcon />}/>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu ></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState('0px');
  const dropdownRef = useRef<any>(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el: any) {
    const height: string = el.offsetHeight;
    setMenuHeight(height);
  }

  const DropdownItem = (props :any) => {

    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem>
              <Link
                to={{
                    pathname: '/'
                }}>
                    Products
                </Link>
          </DropdownItem>
          <DropdownItem>
          <Link
                to={{
                    pathname: '/cart'
                }}>
                    Cart
                </Link>
          </DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}



const Navbar = (props: any) => {

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        { props.children }
      </ul>
    </nav>
  );
}

const NavItem = (props: any) => {

  const [open, setOpen] = useState(false)


  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  )
}

export default Nav;
