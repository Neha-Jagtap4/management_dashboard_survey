import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Flex,
  Text,
  TextField,
  SelectField,
  Card,
} from "@aws-amplify/ui-react";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

const initialValues = {
  missionName: "",
  droneId: "",
  flightDuration: "",
  distance: "",
  notes: "",
};

const drones = [
  { id: "DRN-861", label: "Alpha Falcon" },
  { id: "DRN-938", label: "Eagle Eye" },
  { id: "DRN-354", label: "Storm Chaser" },
];



const locations = [
  { label: "Mission Start", coords: [28.6139, 77.209] }, // New Delhi
  { label: "Checkpoint 1", coords: [28.7041, 77.1025] }, // Delhi
  { label: "Checkpoint 2", coords: [28.5355, 77.391] },  // Noida
];

const LeafletMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletMapRef = useRef<L.Map | null>(null);
  
  const markersRef = useRef<L.Marker[]>([] as L.Marker[]);

  useEffect(() => {
    if (!mapRef.current) return;

    leafletMapRef.current = L.map(mapRef.current).setView(locations[0].coords, 10);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(leafletMapRef.current);

    markersRef.current = locations.map((loc) =>
      L.marker(loc.coords).addTo(leafletMapRef.current!).bindPopup(loc.label)
    );

    markersRef.current[0].openPopup();

    return () => {
      leafletMapRef.current?.remove();
      leafletMapRef.current = null;
      markersRef.current = [];
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ height: "350px", width: "100%", borderRadius: "10px" }}
    />
  );
};

const BasicFormWithKpi = () => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting mission:", values);
  };

  return (
    <Flex
      direction={{ base: "column", large: "row" }}
      gap="2rem"
      width="100%"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      {/* Add New Mission Card */}
      <Card
        padding="1.5rem"
        borderRadius="15px"
        flex={{ base: "1 1 100%", large: "1 1 40%" }}
      >
        <Text fontWeight="bold" fontSize="1.25rem" marginBottom="1rem">
          Add New Mission
        </Text>

        <Flex
          as="form"
          direction="column"
          width="100%"
          onSubmit={handleSubmit}
          gap="1rem"
        >
          <TextField
            label="Mission Name"
            name="missionName"
            value={values.missionName}
            onChange={handleInputChange}
            isRequired
          />

          <SelectField
            label="Select Drone"
            name="droneId"
            value={values.droneId}
            onChange={handleInputChange}
            isRequired
          >
            <option value="" disabled>
              -- Select Drone --
            </option>
            {drones.map((drone) => (
              <option key={drone.id} value={drone.id}>
                {drone.label}
              </option>
            ))}
          </SelectField>

          <TextField
            label="Flight Duration (minutes)"
            name="flightDuration"
            type="number"
            value={values.flightDuration}
            onChange={handleInputChange}
            isRequired
            min={1}
          />

          <TextField
            label="Distance Covered (km)"
            name="distance"
            type="number"
            value={values.distance}
            onChange={handleInputChange}
            isRequired
            min={0}
            step="0.1"
          />

          <Button
            type="submit"
            variation="primary"
            width={{ base: "100%", large: "50%" }}
            style={{ marginLeft: "auto", marginTop: "1rem" }}
          >
            Add Mission
          </Button>
        </Flex>
      </Card>

      {/* Map Card */}
      <Card
        padding="1.5rem"
        borderRadius="15px"
        backgroundColor="#e0e7ff"
        flex={{ base: "1 1 100%", large: "1 1 35%" }}
        style={{ minWidth: 300, height: 460 }}
      >
        <Text fontWeight="bold" fontSize="1.25rem" marginBottom="1rem">
          Mission Area Map
        </Text>
        <LeafletMap />
      </Card>
    </Flex>
  );
};

export default BasicFormWithKpi;
