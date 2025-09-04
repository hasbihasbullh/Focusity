import React from "react";
import { Separator } from "@/common/components/ui";

export const Footer = () => {
  return (
    <footer className="bg-zinc-200 dark:bg-zinc-900 shadow border-t border-border p-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
            <span className="text-2xl font-semibold text-foreground">Focusity</span>
          </a>
          <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground">
            <li>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <Separator className="my-6" />
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <a href="https://hasbihasbullh.vercel.app/" className="hover:text-foreground transition-colors" target="_blank">
            M Hasbi Hasbullah
          </a>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};