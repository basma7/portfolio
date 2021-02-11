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
          <Nav.Link href="/resume">Resume</Nav.Link>
          <Nav.Link href="#home">Books Talk</Nav.Link>
          <Nav.Link href="/project">Coding Project</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
