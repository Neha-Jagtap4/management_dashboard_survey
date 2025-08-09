import React from "react";
import { View, Heading, Text } from "@aws-amplify/ui-react";
import BasicForm from "./BasicForm";

const currentKpis = {
  totalScheduledMissions: 12,
  availableDrones: 3,
  avgFlightDuration: 47,
  avgDistanceCovered: 6.8,
  missionSuccessRate: 93,
  abortedMissions: 1,
};

const Forms = () => {
  return (
    <>
      <div>
        <h2>Mission</h2>
      </div>
      <View
        backgroundColor="var(--amplify-colors-white)"
        borderRadius="6px"
        maxWidth={{ base: "100%", large: "100%" }}
        padding="1rem"
        minHeight="100vh"
      >
        <Heading color="#333"> Launch </Heading>

        {/* Current Mission KPIs below heading */}
        <View
          as="section"
          padding="0.75rem"
          marginTop="1rem"
          backgroundColor="#f5f7fa"
          borderRadius="8px"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Scheduled Missions", value: currentKpis.totalScheduledMissions },
            { label: "Available Drones", value: currentKpis.availableDrones },
            { label: "Avg Flight Duration (min)", value: currentKpis.avgFlightDuration },
            { label: "Avg Distance Covered (km)", value: currentKpis.avgDistanceCovered },
            { label: "Mission Success Rate (%)", value: `${currentKpis.missionSuccessRate}%` },
            { label: "Aborted Missions", value: currentKpis.abortedMissions },
          ].map((kpi) => (
            <View key={kpi.label} style={{ textAlign: "center", minWidth: 110 }}>
              <Text fontWeight="600" fontSize="0.85rem" color="#555">
                {kpi.label}
              </Text>
              <Text fontWeight="bold" fontSize="1.1rem" color="#111">
                {kpi.value}
              </Text>
            </View>
          ))}
        </View>

        <br />
        <BasicForm />
      </View>
    </>
  );
};

export default Forms;
