"use client";

import { ClickSpark } from "@/components";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navItems = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <SiInstagram
          className={"hover:fill-white hover:stroke-zinc-950 stroke-[1px]"}
        />
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kuranchie/",
      icon: (
        <SiLinkedin
          className={"hover:fill-white hover:stroke-zinc-950 stroke-[1px]"}
        />
      ),
    },
    {
      name: "Github",
      href: "https://github.com/Adjei-Kuranchie",
      icon: (
        <SiGithub
          className={"hover:fill-white hover:stroke-zinc-950 stroke-[1px]"}
        />
      ),
    },
  ];

  return (
    <div>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 ",
          scrolled
            ? "py-3 bg-transparent/90 backdrop-blur-md shadow-sm border-b border-black/10 dark:border-white/10"
            : "py-6 bg-transparent",
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="/"
              className="text-xl md:text-2xl font-bold tracking-tighter relative group"
            >
              <span className="relative z-10 dark:text-white tracking-wider">
                ADJEI
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black dark:bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  target={"_blank"}
                >
                  <span className="text-sm uppercase tracking-wider font-medium dark:text-white hover:fill-white hover:stroke-none transition-all duration-200 ease-in-out ">
                    {item.icon}
                  </span>
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-[1px] bg-black dark:bg-white transition-all duration-300 ease-out",
                      hoveredItem === item.name ? "w-full" : "w-0",
                    )}
                  ></span>
                </a>
              ))}
              <ClickSpark
                sparkColor="#000"
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
              >
                <a
                  href="https://upwork.com"
                  className="ml-4 px-5 py-2 border border-black dark:border-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 flex items-center gap-1 group"
                >
                  <span>Hire Me</span>
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    strokeWidth={1.5}
                  />
                </a>
              </ClickSpark>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white dark:bg-gray-900 z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none",
        )}
      >
        <nav className="flex flex-col items-center gap-8 w-full">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              target={"_blank"}
            >
              <span className="text-sm uppercase tracking-wider font-medium dark:text-white hover:fill-white hover:stroke-none">
                {item.name}
              </span>
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-[1px] bg-black dark:bg-white transition-all duration-300 ease-out",
                  hoveredItem === item.name ? "w-full" : "w-0",
                )}
              ></span>
            </a>
          ))}
          <a
            href="https://upwork.com"
            className="mt-8 px-8 py-3 border border-black dark:border-white rounded-full text-lg font-medium hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
