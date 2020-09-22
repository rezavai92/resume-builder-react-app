import React from 'react'

import {Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const HomeNav = ()=>{



    return(<div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       <Navbar.Brand > <Link style={{textDecoration:"none" ,color:"white"}} to="/" >RESUME<span style={{fontVariantCaps:"all-small-caps"}}>builder</span></Link> </Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="https://rezavai92.github.io/">About Me</Nav.Link>
      <Nav.Link eventKey={2} href="https://www.facebook.com/nijhumreza96343">
        Any Question?
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>)
}


export default HomeNav;