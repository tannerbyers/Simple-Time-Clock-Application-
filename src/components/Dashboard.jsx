import React from "react";
import TimeSlotSection from "./TimeSlots/TimeSlotSection";
import { Container } from "react-bootstrap";

function Dashboard() {
  return (
    <Container>
      <TimeSlotSection />
    </Container>
  );
}

export default Dashboard;
