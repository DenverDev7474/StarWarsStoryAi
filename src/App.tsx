import Characters from "./features/characters/characters";
import Settings from "./features/settings/settings";
import Starships from "./features/starships/starships";
import Generator from "./features/generator/generator";
import Home from "./features/home/home";
import Story from "./features/story/story";
import Menu from "./features/menu/menu";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xs={12} md={9}>
            <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/starships" element={<Starships />} />
              <Route path="/story" element={<Story />} />
            </Routes>
          </Col>
          <Col xs={12} md={3}>
            <Generator />
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
