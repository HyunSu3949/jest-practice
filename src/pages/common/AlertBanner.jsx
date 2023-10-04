import React from "react";
import { Alert } from "react-bootstrap";

export default function AlertBanner({ message, variant }) {
  const alertMessage = message || "An expected error occured.";
  const alertVariant = variant || "danger";

  return <Alert variant={variant}>{message}</Alert>;
}
