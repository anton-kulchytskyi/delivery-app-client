import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const Header: React.FC = () => {
  return (
    <Navbar className='bg-white shadow-sm mb-3'>
      <Container>
        <Nav>
          <Nav.Link to='/' as={NavLink}>
            Shop
          </Nav.Link>
          <Nav.Link to='/card' as={NavLink}>
            Shopping Card
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
