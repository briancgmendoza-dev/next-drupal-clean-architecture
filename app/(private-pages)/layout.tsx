"use client"

import { Pages } from "@/app/_components/Pages";

export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Pages>
      <Pages.Navbar />
      <Pages.Body>
        {children}
      </Pages.Body>
      <Pages.Footer />
    </Pages>
  );
}
