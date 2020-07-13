import React, { useState } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { Typeahead } from 'react-bootstrap-typeahead';
import { useAppContext } from "../../libs/ContextLib";
import { API } from "aws-amplify";
import "./Price.css";

export default function Price() {

  const { itemsPrice } = useAppContext();
  const { itemPrice, setItemPrice } = useAppContext();

  const [price, setPrice] = useState("");

  function validateSubmit() {
    return (itemPrice.length > 0 && price == parseInt(price) && price >= 0)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const payload = {"_id": itemPrice[0]._id, "name": itemPrice[0].name, "price": parseInt(price)}
    pushPrice(payload)
    setItemPrice([])
    setPrice("")
  }

  function pushPrice(item) {
    API.post("dofus_bubble", "/dofus_bubble/dynamodb/", {body: item});
  }

  function renderSearch() {
    return (
      <Typeahead className="ml-4" id="items_price" labelKey="name" placeholder="choose an item to price"
        onChange={e => setItemPrice(e)} options={itemsPrice} selected={itemPrice}/>
      )
  }

  function renderInput() {
    return (
      <InputGroup className="ml-4" onSubmit={handleSubmit}>
        <FormControl placeholder={itemPrice.map(i => (i.price))} value={price} onChange={e => setPrice(e.target.value)}/>
        <InputGroup.Append>
          <Button variant="outline-secondary" disabled={!validateSubmit()} type="submit">Push</Button>
        </InputGroup.Append>
      </InputGroup>
    )
  }

  return (
    <>
      <Form className="itemPrice" onSubmit={handleSubmit}>
        <Form.Row>
          {renderSearch()}
          {renderInput()}
        </Form.Row>
      </Form>
    </>
  );
}
