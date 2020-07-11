import React, { useState } from 'react';
import Routes from "./Routes";
import './App.css';
import Top from "./containers/Top";
import { AppContext } from "./libs/ContextLib";

function App() {

  const [itemsPrice, setItemsPrice] = useState([]);
  const [itemPrice, setItemPrice] = useState([]);

  return (
    <>
      <AppContext.Provider value={{ itemsPrice, setItemsPrice, itemPrice, setItemPrice }}>
        <Top />
        <Routes />
      </AppContext.Provider>
    </>
  );
}

export default App;
