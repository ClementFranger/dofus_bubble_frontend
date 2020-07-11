import React from "react";
import { Navbar } from "react-bootstrap";
import Brand from "../components/navbar/Brand";
import Categories from "../components/navbar/Categories";
import Search from "../components/navbar/Search";

export default function Top() {

  return (
    <>
      <Navbar bg="dark" variant="dark" collapseOnSelect>
        <Brand/>
        <Categories/>
        <Search/>
      </Navbar>
    </>
  );
}
