import React from "react";
import { Navbar } from "react-bootstrap";
import Brand from "../components/navbar/Brand";
import Categories from "../components/navbar/Categories";

export default function Top() {

  return (
    <>
      <Navbar bg="dark" variant="dark" collapseOnSelect>
        <Brand/>
        <Categories/>
      </Navbar>
    </>
  );
}
