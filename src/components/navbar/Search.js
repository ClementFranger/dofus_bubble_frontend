import React, { useState } from "react";
import { Typeahead } from 'react-bootstrap-typeahead';
import { useAppContext } from "../../libs/ContextLib";
import "./Search.css";


export default function Search() {

  const [singleSelections, setSingleSelections] = useState([]);
  const [multiSelections, setMultiSelections] = useState([]);
  const { itemsPrice } = useAppContext();

  return (
    <>
      <Typeahead id="items_price" labelKey="name" placeholder="Choose an item to price"
          onChange={setSingleSelections}
          options={itemsPrice}
          selected={singleSelections}
      />
    </>
  );
}
