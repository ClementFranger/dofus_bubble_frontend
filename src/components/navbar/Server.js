import React, { useState, useEffect } from "react";
import { Nav, NavDropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useAppContext } from "../../libs/ContextLib";
import "./Server.css";

export default function Server() {

  const [server, setServer] = useState('Ilyzaelle');

  function handleSelect(eventKey) {
    setServer(encodeURI(eventKey))
  }

  function renderServers(servers) {
    return servers.map((s, _) =>
      <NavDropdown.Item key={_} eventKey={s}>{s}</NavDropdown.Item>
    );
  }

  function handleSelect(eventKey) {
    setServer(encodeURI(eventKey))
  }

  return (
    <>
      <Nav>
        <OverlayTrigger key='server' placement="bottom" overlay={<Tooltip>Seulement Ilyzaelle est supporté pour le moment. Ne pas publier de prix d'un autre serveur.</Tooltip>}>
          <NavDropdown title={server} onSelect={handleSelect} className='server'>
            {renderServers([server])}
          </NavDropdown>
        </OverlayTrigger>
      </Nav>
    </>
  );
}
