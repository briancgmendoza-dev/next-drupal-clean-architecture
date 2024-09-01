"use client"

import { useRouter } from "next/navigation"

import { Container } from "@/app/_components/ui/container"
import { Card } from "@/app/_components/ui/card"
import NavBar from "@/app/_components/layout/navbar"
import Footer from "@/app/_components/layout/footer"
import { TPagesProps } from "@/app/_components/types"
import { useEffect } from "react"

export const Pages = ({ children, authenticated }: TPagesProps) => {
  const router = useRouter()

  useEffect(() => {
    if (!authenticated) router.push("/")
  }, [router, authenticated])

  return (
    <Container
      component="main"
      sx={{
        height: "100vh",
        bgcolor: "#000",
        position: "relative"
      }}
    >
      {children}
    </Container>
  )
}

Pages.Navbar = NavBar

Pages.Body = function Body({...props }) {
  return (
    <Card
      sx={{
        p: "1rem 1.5rem",
        borderRadius: "12px",
        border: "1px solid red"
      }}
      {...props}
    />
  )
}

Pages.Footer = Footer
