import { Nav, Navbar, Container } from "react-bootstrap"

const Header = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/products/category/beauty">Beauty</Nav.Link>
            <Nav.Link href="#features">Fragnances</Nav.Link>
            <Nav.Link href="#pricing">Furniture</Nav.Link>
            <Nav.Link href="/products">Groceries</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header