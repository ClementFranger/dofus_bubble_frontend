import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { API } from "aws-amplify";
import { useAppContext } from "../../libs/ContextLib";


export default function Search() {

  const [categoriesValue, setCategoriesValue] = useState('resources');
  const { itemsPrice, setItemsPrice } = useAppContext();


  return (
    <>
      {renderCategories()}
    </>
  );
}
