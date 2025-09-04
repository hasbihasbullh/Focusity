import React from "react";
import { Separator } from "@/common/components/ui";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-zinc-200 dark:bg-zinc-900 shadow border-t border-border p-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-2xl font-semibold text-foreground">Focusity</span>
          </Link>
          <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground">
            <li>
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <Separator className="my-6" />
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <Link href="https://hasbihasbullh.vercel.app/" className="hover:text-foreground transition-colors" target="_blank">
            M Hasbi Hasbullah
          </Link>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};