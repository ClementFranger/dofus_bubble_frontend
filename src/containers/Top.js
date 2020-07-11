import React from "react";
import { Navbar } from "react-bootstrap";
import Brand from "../components/navbar/Brand";
import Categories from "../components/navbar/Categories";
import Price from "../components/navbar/Price";

export default function Top() {

  return (
    <>
      <Navbar bg="dark" variant="dark" collapseOnSelect>
        <Brand/>
        <Categories/>
        <Price/>
      </Navbar>
    </>
  );
}
