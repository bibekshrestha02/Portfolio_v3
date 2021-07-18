import React, { useEffect, useState } from 'react';
import LoadingComponent from '../components/LoadingComponent';

export default function FetchInitalApi({ children, action }) {
  const [isLoading, setLoading] = useState(false);

  if (isLoading) {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <LoadingComponent />
      </div>
    );
  }
  return children;
}
