import { Container } from "@/app/_components/ui/container";
import LoginForm from "@/app/_components/forms/login-form";

export default function Login() {
  return (
    <Container
      component="main"
      sx={{ height: "100vh", bgcolor: "#000", color: "#fff" }}
    >
      Login Page
      <Container
        component="section"
        sx={{
          maxWidth: { xs: "375px", sm: "650px", md: "850px" },
          p: { xs: ".5rem 1rem", sm: "1rem 2rem", md: "1rem 3rem" }
        }}
      >
        <LoginForm />
      </Container>
    </Container>
  );
}
