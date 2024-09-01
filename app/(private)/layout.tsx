"use client"

import { Pages } from "@/app/_components/layout/pages";

export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = false
  return (
    <Pages authenticated={isAuthenticated}>
      <Pages.Navbar />
      <Pages.Body>
        {children}
      </Pages.Body>
      <Pages.Footer />
    </Pages>
  );
}
