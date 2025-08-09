import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Grid,
  Card,
  useTheme,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@aws-amplify/ui-react";

import MiniStatistics from "./MiniStatistics";
import TrafficSummary from "./TrafficSummary";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import "./Dashboard.css";

const droneData = [
  {
    drone_id: "DRN-001",
    drone_location: "Baner, Pune, India",
    flight_duration_minutes: 45,
    distance_covered_km: 6.4,
    altitude: 150,
    longitude: 73.7898,
  },
  {
    drone_id: "DRN-002",
    drone_location: "Hinjawadi, Pune, India",
    flight_duration_minutes: 50,
    distance_covered_km: 7.1,
    altitude: 180,
    longitude: 73.7389,
  },
  {
    drone_id: "DRN-003",
    drone_location: "Andheri, Mumbai, India",
    flight_duration_minutes: 38,
    distance_covered_km: 5.8,
    altitude: 200,
    longitude: 72.8467,
  },
  {
    drone_id: "DRN-004",
    drone_location: "Thane, India",
    flight_duration_minutes: 42,
    distance_covered_km: 6.9,
    altitude: 170,
    longitude: 72.9781,
  },
];


const locations = [
  { label: "Baner, Pune", coords: [18.5592, 73.7898] },
  { label: "Hinjawadi, Pune", coords: [18.5933, 73.7389] },
  { label: "Andheri, Mumbai", coords: [19.1197, 72.8467] },
  { label: "Thane, Mumbai", coords: [19.2183, 72.9781] },
];

const LeafletMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletMapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const [selectedLocation, setSelectedLocation] = useState(locations[0].label);

  useEffect(() => {
    if (!mapRef.current) return;

    leafletMapRef.current = L.map(mapRef.current).setView(locations[0].coords, 12);

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

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const label = e.target.value;
    setSelectedLocation(label);

    const loc = locations.find((l) => l.label === label);
    if (!loc || !leafletMapRef.current) return;

    leafletMapRef.current.setView(loc.coords, 12, { animate: true });

    const marker = markersRef.current.find(
      (m) =>
        m.getLatLng().lat === loc.coords[0] &&
        m.getLatLng().lng === loc.coords[1]
    );
    if (marker) marker.openPopup();
  };

  return (
    <div>
      <select
        value={selectedLocation}
        onChange={onSelectChange}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem",
          fontSize: "1rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      >
        {locations.map((loc) => (
          <option key={loc.label} value={loc.label}>
            {loc.label}
          </option>
        ))}
      </select>

      <div
        id="map"
        ref={mapRef}
        style={{ height: "350px", width: "100%", borderRadius: "8px" }}
      />
    </div>
  );
};

const Dashboard = () => {
  const { tokens } = useTheme();

  // Prepare stacked bar chart data with altitude and longitude for each drone
  const droneChartData = [
    {
      name: "Altitude (m)",
      data: droneData.map((d) => d.altitude),
    },
    {
      name: "Longitude",
      data: droneData.map((d) => d.longitude),
    },
  ];

  const droneLabels = droneData.map((d) => d.drone_id);

  return (
    <>
      <div>
        <h2>Live Feed</h2>
      </div>
      <View borderRadius="6px" maxWidth="100%" padding="0rem" minHeight="100vh">
        <Grid
          templateColumns={{ base: "1fr", large: "repeat(4,288px)" }}
          gap={tokens.space.medium}
          justifyContent="flex-start"
        >
          <View>
            <MiniStatistics title="Live Mission" amount="4" />
          </View>
          <View>
            <MiniStatistics title="Scheduled Mission" amount="12" />
          </View>
          <View>
            <MiniStatistics title="Completed Missions" amount="7" />
          </View>
          <View>
            <MiniStatistics title="Aborted Missions" amount="1" />
          </View>

          {/* Drone Details */}
          <View columnSpan={2}>
            <Card
              borderRadius="15px"
              padding="1rem"
              style={{ height: "460px", overflowY: "auto" }}
            >
              <div className="card-title">Active Mission Details</div>
              <Table variation="striped" highlightOnHover>
                <TableHead>
                  <TableRow>
                    <TableCell as="th">Drone ID</TableCell>
                    <TableCell as="th">Drone Location</TableCell>
                    <TableCell as="th">Flight Duration (min)</TableCell>
                    <TableCell as="th">Distance Covered (km)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {droneData.map((drone, index) => (
                    <TableRow key={index}>
                      <TableCell>{drone.drone_id}</TableCell>
                      <TableCell>{drone.drone_location}</TableCell>
                      <TableCell>{drone.flight_duration_minutes}</TableCell>
                      <TableCell>{drone.distance_covered_km}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </View>

          {/* Mission Map */}
          <View columnSpan={2}>
            <Card borderRadius="15px" padding="1rem" style={{ height: "460px" }}>
              <div className="card-title">Mission Tracker</div>
              <LeafletMap />
            </Card>
          </View>

          {/* Mission Insights */}
          <View columnSpan={[1, 1, 1, 4]}>
            <Card borderRadius="15px">
              <div className="card-title">Altitude & Longitude Stats</div>
              <div className="chart-wrap" style={{ padding: "1rem", width: "100%" }}>
              <TrafficSummary
                title="Drone Altitude and Longitude"
                data={droneChartData}
                type="bar"
                labels={droneLabels}
              />

              </div>
            </Card>
          </View>
        </Grid>
      </View>
    </>
  );
};

export default Dashboard;
