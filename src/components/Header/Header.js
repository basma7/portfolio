import React from 'react'
import './Header.scss'
import { Navbar, Nav } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar>
      <Navbar.Brand href="#home">Ibtissem rezig</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
