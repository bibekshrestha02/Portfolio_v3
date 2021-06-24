import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector } from 'react-redux';
export default function ProjectsScreen() {
  const editHandler = () => {
    return;
  };
  const { title } = useSelector((state) => state.admin.project);
  return (
    <ScreenTemplete title={title} editHandler={editHandler}></ScreenTemplete>
  );
}
