"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import AnimatedLink from "./AnimatedLink";
import BrandLogo from "@/public/Duct-Daddy-03.png";

export default function Navbar() {
  const Links = [
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faqs" },
    { name: "Service Area", href: "/service-area" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <nav className="bg-[#ffffff] shadow shadow-[hsl(0,0%,80%)] fixed h-24 w-full z-50">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto px-6">
        <div className="flex gap-8">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
          >
            {/* {isOpen */}
            {/* ? "" */}
            {/* : */} <Image
              src={BrandLogo}
              alt="Netflows logo"
              className="h-14 w-auto"
              draggable="false"
              priority={true}
            />
            {/* } */}
          </Link>

          {/* Desktop Links */}
          <ul className="hidden text-[#333333] font-semibold text-base/[32px] tracking-[0.016em] md:flex md:items-center md:gap-x-6">
            {Links.map((link) => (
              <li key={link.href}>
                <AnimatedLink
                  href={link.href}
                  className={`${pathname === link.href
                    ? "duration-300 transition-colors text-[#00b4ff]"
                    : ""
                    }`}
                >
                  {link.name}
                </AnimatedLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <AnimatedLink href="/" className="hidden lg:block">
            (816) 708-2608
          </AnimatedLink>
          <Link
            href="/book-online"
            className={`hidden duration-300 transition-colors py-1 px-4 font-semibold text-base/[32px] tracking-[0.016em] rounded-lg md:block
            ${pathname === "/book-online"
                ? " bg-[hsl(205,100%,53%)] text-[#E6E6E6]"
                : "bg-[#0080DB] text-[#E6E6E6] hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]"
              } `}
          >
            Book Online
          </Link>
        </div>


        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center cursor-pointer py-2.5"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`bg-[#333333] block transition-all duration-300 ease-out 
                    h-0.5 w-7 rounded-sm ${isOpen ?
              'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`} >
          </span>
          <span className={`bg-[#333333] block transition-all duration-300 ease-out 
                    h-0.5 w-7 rounded-sm my-0.5 ${isOpen ?
              'opacity-0' : 'opacity-100'
            }`} >
          </span>
          <span className={`bg-[#333333] block transition-all duration-300 ease-out
            h-0.5 w-7 rounded-sm ${isOpen ?
              '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`} >
          </span>
        </button>
      </div>

      {/* Mobile Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-[#E6E6E6] mt-4"
          >
            <ul className="flex flex-col gap-y-2 px-8 font-bold text-3xl/[42px] tracking-[0.016em]">
              {Links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${pathname === link.href
                      ? "text-[#00b4ff]"
                      : "text-[#333333]"
                      }`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};