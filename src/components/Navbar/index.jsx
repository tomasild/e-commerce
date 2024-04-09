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
  import React, { useState } from "react";
  
  export const AcmeLogo = () => (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
  
  export default function NavbarXL() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
  
    const menuItems = [
      { label: "Home", href: "/" },
      { label: "My Account", href: "/my-account" },
      { label: "Products", href: "/products" },
      { label: "Support", href: "/support" },
      { label: "Contact", href: "/contact" },
      { label: "Log Out", href: "/logout" },
    ];
  
    return (
      <Navbar shouldHideOnScroll>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                href={item.href}
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="/" color="foreground">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/products" color="foreground">
              Products
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/support" color="foreground">
              Support
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/contact" color="foreground">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {isLogged ? (
            <NavbarItem className="hidden lg:flex">
              <Link href="/my-account" color="foreground">
                My Account
              </Link>
            </NavbarItem>
          ) : (
            <NavbarItem className="hidden lg:flex">
              <Link href="/login" color="foreground">
                Login
              </Link>
            </NavbarItem>
          )}
          <NavbarItem>
            <Button as={Link} href="/signup" color="primary" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  }
  