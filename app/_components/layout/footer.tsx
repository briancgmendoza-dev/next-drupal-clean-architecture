import { Box, Typography } from "@mui/material"

import { Container } from "@/app/_components/ui/container"

const WARNING = `Government Warning: Cigarette Smoking is Dangerous<br>to your health.`
const purpleBarDefaultSx  = {
  height: "24px",
  bgcolor: "#951b81",
  flexDirection: "row",
  overflow: "hidden",
  fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
  color: "#fff",
  "a": {
    fontSize: "inherit"
  },
  "p": {
    fontSize: "inherit"
  }
}

export default function Footer() {
  const purpleBar = (
    <Container component="div" sx={purpleBarDefaultSx}>
      <Typography>JT International (Philippines), Inc.</Typography>
      <Container component="div" sx={{ height: "auto", flexDirection: "row", bgcolor: "transparent" }}>
        <Box component="a">Terms & Conditions</Box>
        <Box component="a">Privacy Policy</Box>
        <Box component="a">FAQ</Box>
      </Container>
    </Container>
  )

  const copBar = (
    <Container component="div" sx={{ height: "117px" }}>2</Container>
  )

  const warningBar = (
    <Container component="div" sx={{ height: "102px", bgcolor: "#fff" }}>
      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
          textTransform: "uppercase",
          textAlign: "center"
        }}
        dangerouslySetInnerHTML={{ __html: WARNING }}
      />
    </Container>
  )

  return (
    <Container
      component="footer"
      sx={{
        position: "absolute",
        bottom: 0,
        height: "auto",
        overflow: "hidden"
      }}
    >
      {purpleBar}
      {copBar}
      {warningBar}
    </Container>
  )
}
