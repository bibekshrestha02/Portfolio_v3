import React, { useEffect, useState } from 'react';
import LoadingComponent from '../components/LoadingComponent';
import { useDispatch } from 'react-redux';

export default function FetchInitalApi({ children, action }) {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (!action) {
      setLoading(false);
      return;
    }
    const init = async () => {
      try {
        setLoading(true);
        await dispatch(action());
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [action, dispatch]);

  if (isLoading) {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <LoadingComponent />
      </div>
    );
  }
  return children;
}
