import { Card } from "./_components/Card";
import { Container } from "./_components/Container"

export default function Home() {
  return (
    <Container
      component="main"
    >
      <Card
        sx={{
          color: "#fff",
          p: "1rem 1.5rem",
          borderRadius: "12px",
          border: "1px solid red"
        }}
      >
        Hello
      </Card>
    </Container>
  );
}
