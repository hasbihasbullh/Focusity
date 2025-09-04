"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/common/components/ui";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Testimonials", href: "/#testimonials" },
];

export const Header = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Fix hydration mismatch: Use false for disabled on server
  const isDisabled = typeof window === "undefined" ? false : !resolvedTheme;

  return (
    <header className="bg-zinc-200 dark:bg-zinc-900 shadow sticky top-0 z-50">
      <nav className="px-4 lg:px-6 py-2.5 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap justify-between items-center">
          <Link href="/" className="flex items-center" aria-label="Focusity Home">
            <span className="text-xl font-semibold whitespace-nowrap dark:text-white">Focusity</span>
          </Link>
          <div className="flex items-center lg:order-2 gap-2">
            <Button variant="outline" asChild>
              <Link href="/pomodoro" className="text-zinc-800 dark:text-white">
                Open Browser
              </Link>
            </Button>
            <Button onClick={toggleTheme} variant="default" size="icon" disabled={isDisabled}>
              {resolvedTheme === "dark" ? <Sun className="h-5 w-5" aria-label="Switch to light mode" /> : <Moon className="h-5 w-5" aria-label="Switch to dark mode" />}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {navItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className={`block py-2 px-3 ${pathname === item.href ? "text-primary-700 dark:text-white" : "text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700"}`}>
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="hidden lg:flex lg:order-1 lg:w-auto">
            <ul className="flex flex-row space-x-8 font-medium">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={`block py-2 px-3 ${pathname === item.href ? "text-primary-700 dark:text-white" : "text-zinc-700 dark:text-zinc-400 hover:text-primary-700 dark:hover:text-white"}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
