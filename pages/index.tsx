import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../components/Link";
import HeaderMenu from "../components/HeaderMenu";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <HeaderMenu />
        <Link href="/about" color="secondary">
          Go to the my page
        </Link>
      </Box>
    </Container>
  );
}
