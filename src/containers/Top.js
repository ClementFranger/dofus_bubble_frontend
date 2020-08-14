import React from "react";
import { Navbar } from "react-bootstrap";
import Brand from "../components/navbar/Brand";
import Categories from "../components/navbar/Categories";
import Price from "../components/navbar/Price";
import Profession from "../components/navbar/Profession";
import Familier from "../components/navbar/Familier";

export default function Top() {

  function renderActions() {
    return (
      <>
        <Navbar bg="dark" variant="dark" collapseOnSelect>
          <Brand/>
          <Profession/>
          <Familier/>
        </Navbar>
      </>
    )
  }

  function renderPrice() {
    return (
      <>
        <Navbar bg="dark" variant="dark" collapseOnSelect>
          <Categories/>
          <Price/>
        </Navbar>
      </>
    )
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" className="justify-content-between" collapseOnSelect>
        {renderActions()}
        {renderPrice()}
      </Navbar>

    </>
  );
}
