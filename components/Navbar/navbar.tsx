"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,

  RocketLaunchIcon,
  Bars2Icon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { auth, provider } from "./../../app/api/firebase/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import Link from "next/link";

import { RiLoginBoxFill,RiUser2Fill, RiLogoutBoxFill, RiAccountBoxFill } from "react-icons/ri";
// profile menu component

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  //auth
  useEffect(() => {
    // Check if the user is already logged in using local storage
    const userUid = localStorage.getItem("uid");
    if (userUid && auth.currentUser && userUid === auth.currentUser.uid) {
      setLoggedIn(true);
      setSuccess(true);
    }
    // Add an event listener to handle auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        setSuccess(true);
        setCurrentUser(user);
        // Store the user's UID in local storage
        localStorage.setItem("uid", user.uid);
      } else {
        setLoggedIn(false);
        setSuccess(false);
        setCurrentUser(null);
        // Remove the user's UID from local storage
        localStorage.removeItem("uid");
      }
    });

    // Clean up the event listener
    return () => unsubscribe();
  }, []);

  const Login = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err:any) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

const CurrentUser =auth.currentUser;

  return (<Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
    <MenuHandler>
      <Button variant="text" className="  bg-base-color flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
        <Avatar variant="circular" size="sm" alt="ss" className="  border border-primary p-0.5" 
        src={currentUser ? currentUser.photoURL : '/img/avatar.png'}/>
        <ChevronDownIcon strokeWidth={2.5} className={`text-primary text-xl h-3 w-3 transition-transform ${isMenuOpen
            ? "rotate-180"
            : ""}`} />
      </Button>
    </MenuHandler>
    <MenuList className="bg-base-color p-1 border-hidden">
        <div className="rounded-md text-text-color border-hidden">
          {loggedIn && currentUser ? (
            <div className="flex mb-1 hover:bg-description-color p-2 rounded-md cursor-pointer items-center text-lg font-semibold hover:text-base-color">
              <RiUser2Fill className="mr-2 text-[24px]" />
              <h6>{currentUser.displayName}</h6>
            </div>
          ) : (
            <div className="flex mb-1 hover:bg-description-color p-2 rounded-md cursor-pointer items-center text-lg font-semibold hover:text-base-color">
              <RiAccountBoxFill className="mr-2 text-[24px]" />
              <h6>Account</h6>
            </div>
          )}

          {currentUser? (
            <button onClick={handleLogout} className="w-full h-full">
            <div className="hover:bg-hover p-2 cursor-pointer rounded-md flex items-center text-lg font-semibold hover:text-base-color">
              <RiLogoutBoxFill className="mr-2 text-[25px]" />
              <h6>Sign Out</h6>
            </div>
          </button>
          ) : (
            <button onClick={Login} className="w-full h-full">
            <div className="flex mb-1 hover:bg-green-500 p-2 rounded-md cursor-pointer items-center text-lg font-semibold hover:text-base-color">
              <RiLoginBoxFill className="mr-2 text-[24px]" />
              <h6>Login</h6>
            </div>
          </button>
          )}
        </div>
      </MenuList>

  </Menu>);
}

// nav list menu
const navListMenuItems = [
  {
    title: "Project 1",
    description: "Learn how to use  packed with rich components and widgets.",
    url: "https://www.google.com"
  }, {
    title: "Project 2",
    description: "Learn how to use @material-tailwind/react, packed with rich components for React.",
    url: "https://www.google.com"
  }, {
    title: "Project 3",
    description: "A complete set of UI Elements for building faster websites in less time.",
    url: "https://www.google.com"
  }
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false)
  };

  const renderItems = navListMenuItems.map(({ title, description, url }) => (<div key={title}>
    <MenuItem>
      <Link target="_blank" href={url}>
        <Typography variant="h6" className=" text-text-color scrollbar-hide mb-1">
          {title}
        </Typography>

        <Typography variant="small" className=" text-description-color scrollbar-hide font-normal">
          {description}
        </Typography>
      </Link>
    </MenuItem>
  </div>));

  return (<React.Fragment>
    <Menu open={isMenuOpen} handler={setIsMenuOpen}>
      <MenuHandler>
        <Link href="/">
          <Typography variant="small" className="scrollbar-hide  font-semibold">
            <MenuItem {...triggers} className=" scrollbar-hide hidden items-center gap-2 text-text-color lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="scrollbar-hide  text-text-color h-[24px] w-[24px]" />{" "}
              Project's{" "}
              <ChevronDownIcon strokeWidth={4} className={` scrollbar-hide h-4 w-4 transition-transform ${isMenuOpen
                  ? "rotate-180"
                  : ""}`} />
            </MenuItem>
          </Typography>
        </Link>
      </MenuHandler>
      <MenuList {...triggers} className=" scrollbar-hide bg-base-color hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
        <Card shadow={true} variant="gradient" className="scrollbar-hide bg-background col-span-3 grid h-full w-full place-items-center rounded-md">
          <RocketLaunchIcon strokeWidth={1} className="scrollbar-hide text-primary h-28 w-28" />
        </Card>
        <ul className="scrollbar-hide  col-span-4 flex w-full flex-col gap-1">
          {renderItems}
        </ul>
      </MenuList>
    </Menu>
    <MenuItem className=" scrollbar-hide flex items-center gap-2 text-text-color text-lg font-semibold lg:hidden">
      <Square3Stack3DIcon className="scrollbar-hide  text-text-color text-lg font-semibold active:text-primary h-[24px] w-[24px]" />{" "}
      Project's{" "}
    </MenuItem>
    <ul className=" scrollbar-hide ml-6 flex w-full flex-col gap-1 lg:hidden">
      {renderItems}
    </ul>
  </React.Fragment>);
}

// nav list component
const navListItems = [
  {
    label: "About",
    icon: UserCircleIcon
  }, {
    label: "Contact",
    icon: CubeTransparentIcon
  }
];

function NavList() {
  return (<ul className="  mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center scrollbar-hide">
    <NavListMenu /> {
      navListItems.map(({
        label,
        icon
      }, key) => (<Link href={label.toLowerCase()}>
        <Typography key={label} variant="small" className=" scrollbar-hide font-semibold text-lg text-text-color">
          <MenuItem className=" scrollbar-hide flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "font-semibold text-lg text-text-color  scrollbar-hide h-[24px] w-[24px]" })}{" "}
            {label}
          </MenuItem>
        </Typography>
      </Link>))
    }
  </ul>);
}

export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setIsNavOpen(false));
  }, []);

  return (<Navbar color="white" className="bg-base-color mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 scrollbar-hide">
    <div className="bg-base-color relative mx-auto flex items-center text-primary font-body text-xl scrollbar-hide">
      <Link href='/' >
        <Image src="/img/logo.svg" width={50} height={50} alt="logo" />
        </Link>
        <Link href='/' >
        <Typography className=" text-xl font-semibold  scrollbar-hide mr-4 ml-2 cursor-pointer py-1.5 ">
          Creation
        </Typography>
        </Link>
    
      <div className=" absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block scrollbar-hide">
        <NavList />
      </div>
      <IconButton size="sm" variant="text" onClick={toggleIsNavOpen} className=" scrollbar-hide text-primary ml-auto mr-2 lg:hidden">
        <Bars2Icon className="scrollbar-hide   h-7 w-7" />
      </IconButton>

      {/* //profile menu */}
      <ProfileMenu />
    </div>
    <MobileNav open={isNavOpen} className=" bg-base-color scrollbar-hide overflow-scroll">
      <NavList />
    </MobileNav>
  </Navbar>);
}
