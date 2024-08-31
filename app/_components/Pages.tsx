import { Container } from "@/app/_components/Container"
import { Card } from "@/app/_components/Card"
import NavBar from "@/app/_components/NavBar"
import Footer from "@/app/_components/Footer"
import { TPagesProps } from "./types"

export const Pages = ({ children }: TPagesProps) => (
  <Container
    component="main"
    sx={{
      position: "relative"
    }}
  >
    {children}
  </Container>
)

Pages.Navbar = function Navbar() {
  return (
    <NavBar />
  )
}

Pages.Body = function Body({ children }: TPagesProps) {
  return (
    <Card
      sx={{
        p: "1rem 1.5rem",
        borderRadius: "12px",
        border: "1px solid red"
      }}
    >
      {children}
    </Card>
  )
}

Pages.Footer = function FooterComponent() {
  return (
    <Footer />
  )
}
