import React, { useState, useEffect } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useAppContext } from "../../libs/ContextLib";

export default function Profession() {

  const [ignoreProfessions, setIgnoreProfessions] = useState(['Façomage', 'Costumage', 'Joaillomage', 'Cordomage', 'Sculptemage', 'Forgemage']);
  const [professions, setProfessions] = useState([]);
  const { profession, setProfession } = useAppContext();

  useEffect(() => {
    async function loadProfessions() {
      const professions = await scanProfessions();
      setProfessions(professions.filter(p => !ignoreProfessions.includes(p.name)))
    }
    loadProfessions()
  }, []);

  function handleSelect(eventKey) {
    setProfession(encodeURI(eventKey))
  }

  function scanProfessions() {
    return fetch('https://fr.dofus.dofapi.fr/professions').then(response => response.json())
  }

  function renderProfessions(professions) {
    return professions.map((p, _) =>
      <NavDropdown.Item key={_} eventKey={p.name}>{p.name}</NavDropdown.Item>
    );
  }

  return (
    <>
      <Nav>
        <NavDropdown title={profession} onSelect={handleSelect}>
          {renderProfessions(professions)}
        </NavDropdown>
      </Nav>
    </>
  );
}
