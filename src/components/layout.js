import Header from "./Header";
import Menus from "./Menus";
import React from "react";
import { Container } from "reactstrap";
export default function Layout({ children }) {
  return (
    <div>
      <Container>
        <Header />
        <Menus />
        <main>{children}</main>
      </Container>
    </div>
  );
}
