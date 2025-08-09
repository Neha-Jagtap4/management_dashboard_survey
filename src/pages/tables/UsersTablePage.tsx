import React from "react";
import { View, Heading, ScrollView } from "@aws-amplify/ui-react";
import UsersTable from "./UsersTable";

const dataUsers = [
  {
    id: 1,
    mission_id: "MIS-541",
    client_name: "AgroTech Solutions",
    project_name: "Crop Surveillance Phase 1",
    assigned_team: "Team Alpha",
    priority_level: "High",
    drone_name: "SkyHawk X1",
    drone_id: "DRN-008",
    flight_date: "08-08-2025",
    location: "Pune, India",
    battery_status: "85%",
    mission_type: "Surveillance",
    altitude_meters: 120,
    distance_covered_km: 6.4,
    battery_usage_percent: 65,
    weather_conditions: "Clear Skies, 28°C",
    mission_status: "Completed",
    flight_duration_minutes: 45
  },
  {
    id: 2,
    mission_id: "MIS-742",
    client_name: "City Infrastructure Dept.",
    project_name: "Bridge Inspection",
    assigned_team: "Team Bravo",
    priority_level: "Medium",
    drone_name: "AeroScout Z9",
    drone_id: "DRN-009",
    flight_date: "07-08-2025",
    location: "Mumbai, India",
    battery_status: "78%",
    mission_type: "Inspection",
    altitude_meters: 80,
    distance_covered_km: 4.2,
    battery_usage_percent: 55,
    weather_conditions: "Partly Cloudy, 30°C",
    mission_status: "Scheduled",
    flight_duration_minutes: 38
  },
  {
    id: 3,
    mission_id: "MIS-383",
    client_name: "Wldlife Conservation Org.",
    project_name: "Forest Patrol",
    assigned_team: "Team Delta",
    priority_level: "High",
    drone_name: "FalconEye V3",
    drone_id: "DRN-010",
    flight_date: "06-08-2025",
    location: "Nagpur, India",
    battery_status: "92%",
    mission_type: "Wildlife Monitoring",
    altitude_meters: 150,
    distance_covered_km: 7.8,
    battery_usage_percent: 70,
    weather_conditions: "Sunny, 27°C",
    mission_status: "Completed",
    flight_duration_minutes: 52
  },
  {
    id: 4,
    mission_id: "MIS-944",
    client_name: "Coastal Security Agency",
    project_name: "Port Surveillance",
    assigned_team: "Team Sigma",
    priority_level: "Critical",
    drone_name: "OceanEye X7",
    drone_id: "DRN-011",
    flight_date: "05-08-2025",
    location: "Chennai, India",
    battery_status: "88%",
    mission_type: "Maritime Surveillance",
    altitude_meters: 110,
    distance_covered_km: 9.5,
    battery_usage_percent: 72,
    weather_conditions: "Windy, 29°C",
    mission_status: "In Progress",
    flight_duration_minutes: 60
  }
];

const Tables = () => {
  return (
    <>
      <div>
        <h2>Report</h2>
      </div>

      <View
        backgroundColor="var(--amplify-colors-white)"
        borderRadius="6px"
        maxWidth="100%"
        padding="1rem"
        minHeight="80vh"
      >
        <Heading>Log</Heading>
        <br />
        <ScrollView width="100%">
          <UsersTable users={dataUsers} />
        </ScrollView>
      </View>
    </>
  );
};

export default Tables;
