"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import Image from "next/image";
import Link from "next/link";

function Navigationbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About me",
    "Skills",
    "Projects",
    "Education",
    "Experience",
    "Certificates",
  ];
  return (
    <div>
      <Navbar
        className="navbar pt-4 pb-2 flex justify-between bg-dark"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Image
              src="/images/siteLogo.png"
              alt="chat"
              width={100}
              height={40}
              className="ms-9 mr-2"
            />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-6" justify="start">

          <NavbarItem isActive>
            <Link href="#">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#skillSection">Skills</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#projectSection">Projects</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#educationSection">Education</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#experienceSection">Experience</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#certificationsSection" aria-current="page">
              Certifications
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="mailto:gurditsingh7834@gmail.com">
              <span> gurditsingh7834@gmail.com</span>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="hover:bg-amber-400 py-4 ms-6 my-2 px-6 rounded-sm bg-amber-300 text-black flex items-center justify-center"
              href="#contactMeSection"
            >
              <Image
                src="/svg/chatSVG.svg"
                alt="chat"
                width={15}
                height={10}
                className="mr-2"
              />
              <span>Let&apos;s Talk</span>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="menuNavbar text-black ">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
