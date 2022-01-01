import React, { useState, useEffect } from "react";
import { ListGroup, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./Container.css";
import { API } from "aws-amplify";
import { useAppContext } from "../libs/ContextLib";

export default function Professions() {

  const { profession } = useAppContext();
  const [itemsProfessions, setItemsProfessions] = useState([]);

  useEffect(() => {
    async function loadItemsProfessions() {
      const itemsProfessions = await scanItemsProfessions();
      setItemsProfessions(itemsProfessions)
    }
    loadItemsProfessions()
  }, [profession]);

  function scanItemsProfessions() {
    return API.get("dofus_bubble", "/dofus_bubble/dofus/professions/" + profession);
  }

  function priceCss(price) {
    return price > 0 ? "positive" : "negative"
  }


  function sortItemsProfessions(a, b) {
    if (a.level > b.level)
        return -1;
    else if (a.level < b.level)
        return 1;
    else if (a.name < b.name)
        return -1;
    else if (a.name > b.name)
        return 1;
    else
        return 0;
  }

  function numberWithSpaces(price) {
    if (Number.isInteger(price))
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    else
        return price;
  }

  function tooltipPrice(price) {
    return (<Tooltip>{numberWithSpaces(price)}</Tooltip>);
  }

  function renderOverlayItemPrice(item) {
    return (item.price ?
      <OverlayTrigger key={item._id} placement="right" delay={{ show: 250, hide: 400 }} overlay={tooltipPrice(item.price)}>
        <Card.Title className={'title ' + priceCss(item.price)}>{item.name} - Niv. {item.level}</Card.Title>
      </OverlayTrigger>
      : <Card.Title className={'title ' + priceCss(item.price)}>{item.name} - Niv. {item.level}</Card.Title>
    );
  }

  function renderOverlayRecipePrice(i) {
    return (i.price ?
      <OverlayTrigger key={i.name} placement="right" delay={{ show: 250, hide: 400 }} overlay={tooltipPrice(i.price)}>
        <Card.Text key={i.name} className={'recipe ' + priceCss(i.price)}>{i.name}</Card.Text>
      </OverlayTrigger>
      : <Card.Text key={i.name} className={'recipe ' + priceCss(i.price)}>{i.name}</Card.Text>
    );
  }

  function renderItemsProfessionsRecipe(item) {
    return item.recipe.map((i, _) => renderOverlayRecipePrice(i));
  }

  function renderOverlayItemProfit(item) {
    return <Card.Text className={'title profit ' + priceCss(item.profit)}>{numberWithSpaces(item.profit)}</Card.Text>;
  }

  function renderItemsProfessions() {
    return itemsProfessions.sort(sortItemsProfessions).map((item, i) =>
      <ListGroup.Item key={item._id} variant="flush">
        <Card style={{ width: '20rem' }}>
          {/*TODO : add image to cart if possible (403 on dofus site)*/}
          {/*<Card.Img variant="top" src="https://static.ankama.com/dofus/www/game/items/200/6721.png"/>*/}
          <Card.Body>
            {/*<Card.Title className={'title ' + priceCss(item.price)}>{item.name} - Niv. {item.level}</Card.Title>*/}
            {renderOverlayItemPrice(item)}
            {renderItemsProfessionsRecipe(item)}
            {renderOverlayItemProfit(item)}
          </Card.Body>
        </Card>
      </ListGroup.Item>
    );
  }



  return (
    <>
      <ListGroup horizontal>
        {renderItemsProfessions()}
      </ListGroup>
    </>
  );
}
