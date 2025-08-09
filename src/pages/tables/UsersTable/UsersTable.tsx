import React from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
import "./UserTable.css";

export interface DroneMission {
  id: number;
  mission_id: string;
  client_name: string;
  project_name: string;
  assigned_team: string;
  priority_level: string;
  drone_name: string;
  drone_id: string;
  flight_date: string;
  location: string;
  battery_status: string;
  mission_type: string;
  altitude_meters: number;
  distance_covered_km: number;
  battery_usage_percent: number;
  weather_conditions: string;
  mission_status: string;
  flight_duration_minutes: number;
}

export interface UsersTableProps {
  users?: DroneMission[];
}

const UsersTable = (props: UsersTableProps) => {
  const { users } = props;

  return (
    <>
      <Table highlightOnHover={true}>
        <TableHead>
          <TableRow>
            <TableCell as="th">Mission ID</TableCell>
            <TableCell as="th">Client</TableCell>
            <TableCell as="th">Project</TableCell>
            <TableCell as="th">Assigned Team</TableCell>
            <TableCell as="th">Priority</TableCell>
            <TableCell as="th">Drone Name</TableCell>
            <TableCell as="th">Drone ID</TableCell>
            <TableCell as="th">Flight Date</TableCell>
            <TableCell as="th">Location</TableCell>
            <TableCell as="th">Battery Status</TableCell>
            <TableCell as="th">Mission Type</TableCell>
            <TableCell as="th">Altitude (m)</TableCell>
            <TableCell as="th">Distance (km)</TableCell>
            <TableCell as="th">Battery Usage (%)</TableCell>
            <TableCell as="th">Weather</TableCell>
            <TableCell as="th">Mission Status</TableCell>
            <TableCell as="th">Flight Duration (min)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.mission_id}</TableCell>
                <TableCell>{item.client_name}</TableCell>
                <TableCell>{item.project_name}</TableCell>
                <TableCell>{item.assigned_team}</TableCell>
                <TableCell>{item.priority_level}</TableCell>
                <TableCell>{item.drone_name}</TableCell>
                <TableCell>{item.drone_id}</TableCell>
                <TableCell>{item.flight_date}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.battery_status}</TableCell>
                <TableCell>{item.mission_type}</TableCell>
                <TableCell>{item.altitude_meters}</TableCell>
                <TableCell>{item.distance_covered_km}</TableCell>
                <TableCell>{item.battery_usage_percent}</TableCell>
                <TableCell>{item.weather_conditions}</TableCell>
                <TableCell>{item.mission_status}</TableCell>
                <TableCell>{item.flight_duration_minutes}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default UsersTable;
