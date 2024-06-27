"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConnectWallet = () => {
    // Implement wallet logic
  };

  return (
    <nav className="bg-background shadow-md shadow-secondary py-2 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/">
          <h1>HEADSHOT</h1>
        </Link>

        <div className="flex space-x-6 ">
          <Link href="/snippers" passHref>
            <span className="text-muted-foreground hover:text-foreground transition-all duration-500">
              Snippers
            </span>
          </Link>
        </div>

        <div className="hidden md:flex">
          <Button
            size={"lg"}
            className="font-semibold"
            onClick={handleConnectWallet}
          >
            Connect Wallet
          </Button>
        </div>

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute right-0 top-13 w-48 bg-secondary shadow-lg rounded-md transition-all duration-700 md:hidden">
          <div className="flex flex-col items-start space-y-2 p-4">
            <Link href="/snippers" passHref>
              <span className="text-muted-foreground hover:text-foreground transition-all duration-500">
                Snippers
              </span>
            </Link>
            <hr className="my-2 w-full border-t border-gray-300" />
            <div className="flex">
              <Button
                size={"lg"}
                className="font-semibold"
                onClick={handleConnectWallet}
              >
                connect Wallet
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
