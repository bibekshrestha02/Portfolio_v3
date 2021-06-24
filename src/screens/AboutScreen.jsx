import React from 'react';
import { useSelector } from 'react-redux';
export default function AboutScreen() {
  const { screenBackground } = useSelector((state) => state.colors);
  return <div style={{ backgroundColor: screenBackground }}>About Screen</div>;
}
