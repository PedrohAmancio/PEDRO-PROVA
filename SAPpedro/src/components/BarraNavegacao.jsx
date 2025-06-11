import React from 'react'

import Container from 'react-bootstrap/esm/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



const BarraNavegacao = () => {
  return (
    <div  style={{
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 10,
        zIndex: 1000
      }}
    >
        
        <Navbar    expand="lg"
        data-bs-theme="dark"
        style={{
          width: '100%',
          background: 'linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
            display: 'flex',
            alignItems: 'center'
        }}>
        <Container>
        {/* Logomarca  */}
        <Navbar.Brand href="/home">
            PEDRO
         </Navbar.Brand>
        <Nav className = "me-auto">
            {/* Paginas */}
            <Nav.Link href="/cadastrarusuario">
            cadastrar usuario 
            </Nav.Link>
            <Nav.Link href="/cadastrartarefa">
            Cadastrar Tarefa
            </Nav.Link>
       </Nav>
        </Container>
     </Navbar>
        
    </div>
  )
}

export default BarraNavegacao