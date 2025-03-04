import { Avatar, Button, Dropdown, DropdownDivider, Navbar, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <Navbar className='border-b-2'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            Cleverly's
          </span>
          Blog
        </Link>

        {/* Search Bar */}
        <form>
          <TextInput type='text' placeholder='search...' rightIcon={AiOutlineSearch} className='hidden lg:inline' />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
          <AiOutlineSearch />
        </Button>

        <div className='flex gap-2 md:order-2 '>
          {/* Dark Mode Toggle */}
          <span onClick={toggleTheme} className="hidden sm:inline cursor-pointer text-xl my-auto mx-5 rounded-full border border-neutral-400 p-1">
  {darkMode ? <FaSun size={23}/> : <FaMoon size={23}/>}
</span>


          {/* User Dropdown */}
          {currentUser ? (
            <Dropdown arrowIcon={false} inline label={<Avatar alt='user' img={currentUser.profilePicture || "/default-avatar.png"} rounded />}>
              <Dropdown.Header>
                <span className='block text-sm font-sans'>@{currentUser.username}</span>
                <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
              </Dropdown.Header>
              <Link to='/Dashboard?tab=profile'>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <DropdownDivider />
              <Dropdown.Item>Sign Out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to='/Signin'>
              <Button gradientDuoTone='purpleToBlue' outline>
                Sign In
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>

        {/* Navbar Links */}
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={'div'}>
            <Link to='/'>Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/About"} as={'div'}>
            <Link to='/About'>About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/Projects"} as={'div'}>
            <Link to='/Projects'>Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
