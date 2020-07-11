import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { API } from "aws-amplify";
import { useAppContext } from "../../libs/ContextLib";


export default function Categories() {

  const [categoriesValue, setCategoriesValue] = useState('resources');
  const { itemsPrice, setItemsPrice } = useAppContext();

  const [categories, setCategories] = useState([
    { name: 'consumables'}, { name: 'equipments'},
    { name: 'idols'}, { name: 'resources'}, { name: 'weapons'},
  ]);

  async function loadItemsPrice(e) {
    const itemsPrice = await scanItemsPrice(e)
    setCategoriesValue(e)
    setItemsPrice(itemsPrice)
  }

  function scanItemsPrice(category) {
    return API.get("dofus_bubble", "/dofus_bubble/dofus/" + category);
  }

  function renderCategories() {
    return <ButtonGroup toggle>
        {categories.map((c, i) => (
          <ToggleButton key={c.name} type="radio" variant="secondary" name="category" value={c.name}
            checked={categoriesValue === c.name}
            onChange={(e) => loadItemsPrice(e.currentTarget.value)}>
            {c.name}
          </ToggleButton> ))}
      </ButtonGroup>
  }

  return (
    <>
      {renderCategories()}
    </>
  );
}
