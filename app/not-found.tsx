import { Container } from "@/app/_components/ui/container";

export default function NotFoundPage() {
  return (
    <Container component="main" sx={{ height: "100vh" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you&apos;re looking for does not exist.</p>
      <a href="/">Go back to home</a>
    </Container>
  );
};
