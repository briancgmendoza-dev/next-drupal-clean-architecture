import { Container } from "@/app/_components/ui/container"
import { Card } from "@/app/_components/ui/card"
import NavBar from "@/app/_components/layout/navbar"
import Footer from "@/app/_components/layout/footer"
import { TPagesProps } from "@/app/_components/types"

export const Pages = ({ children }: TPagesProps) => (
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
