import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Badge from "react-bootstrap/Badge";

const MapComponent = () => {
  const mapDiv = useRef(null);

  const stateLayers = useSelector((state) => state.addLayer);

  useEffect(() => {
    if (mapDiv.current) {
      const webmap = new Map({
        basemap: "dark-gray-vector",
      });

      if (stateLayers.layers.length > 0) {
        const featyreLayers = stateLayers.layers.map(
          (ly) => new FeatureLayer({ url: ly })
        );
        webmap.addMany(featyreLayers);
      }

      const view = new MapView({
        container: mapDiv.current,
        map: webmap,
        center: [-2.935, 43.263],
        scale: 20000,
      });

      view.when(() => {
        view.on("click", mapclick);

        const badge = <Badge bg="secondary">New</Badge>;
        view.ui.add(badge, {
          position: "bottom-left",
        });
      });

      return () => view && view.destroy();
    }
  }, [stateLayers.layers]);

  const mapclick = (event) => {
    console.log("mapclick", event);
  };

  return (
    <div
      className="mapDiv"
      ref={mapDiv}
      style={{ height: "100%", width: "100%" }}
    >
      {/* <Badge bg="primary" style={{position: 'absolute'}}>Prueba</Badge> */}
    </div>
  );
};

export default MapComponent;
