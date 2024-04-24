// Navbar.jsx
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import React, { useState, useContext } from "react";
import { ShoppingCartContext } from "../../context";

export const Logo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
      className="text-white"
    />
  </svg>
);

export default function NavbarXL() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const context = useContext(ShoppingCartContext);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "My Account", href: "/my-account" },
    { label: "Products", href: "/products" },
    { label: "Support", href: "/support" },
    { label: "Contact", href: "/contact" },
    { label: "Log Out", href: "/logout" },
  ];

  return (
    <Navbar shouldHideOnScroll className="bg-gris_oscuro">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit text-white">TUKI DIGITAL</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarMenu className="bg-gris_oscuro text-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              href={item.href}
              className="text-white"
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/" className="text-white hover:text-cian_neon">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/products" className="text-white hover:text-cian_neon">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/support" className="text-white hover:text-cian_neon">
            Support
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact" className="text-white hover:text-cian_neon">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {isLogged ? (
          <NavbarItem className="hidden lg:flex">
            <Link href="/my-account" className="">
              My Account
            </Link>
          </NavbarItem>
        ) : (
          <NavbarItem className="hidden lg:flex">
            <Link href="/login" className="text-cian_neon">
              Log In
            </Link>
          </NavbarItem>
        )}
        <NavbarItem>
          <Button as={Link} href="/signup" className="bg-azul_neon text-white rounded-md font-semibold" variant="solid">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button className="bg-plata_claro rounded-full" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span>
              {context.count}
            </span>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
