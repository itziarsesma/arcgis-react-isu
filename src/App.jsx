import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import MapComponent from "./MapComponent";
import AddFeatureLayer from "./AddFeatureLayer";
import AppNav from "./AppNav";

function App() {
  const [tools, setTools] = useState([]);

  const isToolLoaded = (toolName) =>
    tools.some((tool) => tool.key === toolName);
  const removeTool = (toolName) =>
    tools.filter((tool) => tool.key !== toolName);

  const addLayer = () => {
    if (isToolLoaded("layer")) {
      const newTools = removeTool("layer");
      setTools(newTools);
    } else {
      const addLyr = <AddFeatureLayer key="layer" />
      setTools([...tools, addLyr]);
    }
  };
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppNav options={[{name: 'Add', function: addLayer}]} />
      <Container
        style={{ margin: 0, padding: 0, maxWidth: "100%", height: "100%" }}
      >
        <Row style={{ margin: 0, padding: 0, height: "100%" }}>
          {tools.length > 0 && (
            <Col style={{ margin: 0, padding: 0, maxWidth: "50%" }}>
              {tools.map((tool) => {
                return tool;
              })}
            </Col>
          )}
          <Col style={{ margin: 0, padding: 0 }}>
            <MapComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
