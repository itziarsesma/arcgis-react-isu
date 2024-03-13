import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AppNav({ options }) {
  return (
    <Navbar bg="light" data-bs-theme="light" expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ gap: "20px" }}>
            {options.map((opt) => {
              return (
                <Nav.Item
                  key={"nav" + opt.name}
                  onClick={opt.function}
                  style={{ cursor: "pointer" }}
                >
                  {opt.name}
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNav;
