import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch } from "react-redux";
import { addLayer, removeLayers } from "./redux/addLayerSlice";

function AddFeatureLayer() {
  const dispatch = useDispatch();

  const handleAddFeatureLayer = () => {
    const input = document.getElementById("input-addFeatureLayer");
    if (input.value !== "") {
      dispatch(addLayer(input.value));
      input.value = "";
    }
  };

  const handleDelete = () => {
    dispatch(removeLayers());
  };

  return (
    <InputGroup className="p-3">
      <Form.Control
        placeholder="Feature Layer URL"
        aria-label="Feature Layer URL"
        aria-describedby="basic-addFeatureLayer"
        id="input-addFeatureLayer"
      />
      <Button
        variant="outline-secondary"
        id="button-addFeatureLayer"
        onClick={handleAddFeatureLayer}
      >
        Añadir
      </Button>
      <Button
        variant="outline-secondary"
        id="button-addFeatureLayer"
        onClick={handleDelete}
      >
        Borrar
      </Button>
      <Form.Text className="text-muted" style={{overflow:"hidden", textOverflow: "ellipsis"}}>
        https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/BTN_POI_Cultura_y_Ocio/FeatureServer/9
      </Form.Text>
      <Form.Text className="text-muted" style={{overflow:"hidden", textOverflow: "ellipsis"}}>
        https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/ResidenciasBizkaia/FeatureServer/0
      </Form.Text>
    </InputGroup>
  );
}

export default AddFeatureLayer;
