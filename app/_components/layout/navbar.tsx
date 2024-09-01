import { Typography } from "@mui/material"

import { Container, RoundedContainer } from "@/app/_components/ui/container"
import { Logo } from "@/app/_components/ui/logo"
import { Points } from "@/app/_components/ui/points"
import { Menu } from "@/app/_components/ui/menu"

export default function NavBar() {
  return (
    <Container
      component="nav"
      sx={{
        position: "absolute",
        top: 0,
        height: "auto",
        border: "1px solid green"
      }}
    >
      <Container
        component="div"
        sx={{
          height: "auto",
          flexDirection: "row",
          justifyContent: "space-between",
          border: "1px solid #fff"
        }}
      >
        <RoundedContainer sx={{ border: "1px solid #fff" }}>
          <Logo src="./next.svg" alt="Brand" />
        </RoundedContainer>
        <Menu>Menu</Menu>
      </Container>
      <Container
        component="div"
        sx={{
          height: "auto",
          flexDirection: "row",
          justifyContent: "space-between",
          border: "1px solid tomato"
        }}
      >
        <Typography sx={{ color: "#fff" }}>Brian Christopher Mendoza</Typography>
        <Points
          sx={{ p: "1rem 1.5rem" }}
          points="999"
        />
      </Container>
    </Container>
  )
}
