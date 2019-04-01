import React, { Component } from 'react'
import {Navbar, Nav }  from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">SendIt</Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink to="/">&nbsp;Home</NavLink>
      <NavLink to="/parcels">&nbsp;Parcels</NavLink>
      <NavLink to="/create-parcel">&nbsp;New Parcel</NavLink>
    </Nav>
  </Navbar>
  
      </div>
    )
  }
}
