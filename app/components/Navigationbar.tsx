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
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

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
        className="navbar pt-4 pb-2 flex justify-between"
        
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Image
                src="/images/signature.png"
                alt="chat"
                width={200}
                height={20}
                className="mr-2"
              />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-6" justify="start">
          <NavbarItem isActive>
            <Link href="#">Home</Link>
          </NavbarItem>
          <NavbarItem >
            <Link href="#" aria-current="page">
              About me
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">Skills</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">Projects</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">Education</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">Experience</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">
              {" "}
              <span className="font-thin me-2">Mail: </span>
              <span> gurditsingh7834@gmail.com</span>{" "}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              className="py-4 ms-6 px-6 rounded-sm bg-amber-300 text-black flex items-center justify-center"
              as={Link}
              href="#"
              variant="flat"
            >
              <Image
                src="/images/chatSVG.svg"
                alt="chat"
                width={15}
                height={10}
                className="mr-1"
              />
              <span>Let&apos;s Talk</span>
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
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
                size="lg"
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
