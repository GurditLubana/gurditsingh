"use client";
import React, { useState, useEffect } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skillSection" },
    { name: "Education", href: "#educationSection" },
    { name: "Experience", href: "#experienceSection" },
    { name: "Projects", href: "#projectSection" },
    { name: "Certificates", href: "#certificationsSection" },
  ];

  const handleScroll = () => {
    const sections = menuItems.map((item) => document.querySelector(item.href) as HTMLElement);
    const scrollPosition = window.scrollY + window.innerHeight / 2;
  
    sections.forEach((section, index) => {
      if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        setActiveSection(menuItems[index].name);
      }
    });
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

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
          {menuItems.map((item) => (
            <NavbarItem key={item.name} isActive={activeSection === item.name}>
              <Link href={item.href}>{item.name}</Link>
            </NavbarItem>
          ))}
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
        <NavbarMenu className="menuNavbar text-white">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <Link className="w-full" href={item.href}>
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
