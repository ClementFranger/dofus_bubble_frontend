import React, { useState, useEffect } from "react";
import { Tooltip } from "react-bootstrap";

export function numberWithSpaces(price) {
  if (Number.isInteger(price))
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  else
      return price;
}

export function tooltipPrice(price) {
  return (<Tooltip>{numberWithSpaces(price)}</Tooltip>);
}
