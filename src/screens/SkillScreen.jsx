import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector } from 'react-redux';
export default function SkillScreen() {
  const editHandler = () => {
    return;
  };
  const { title } = useSelector((state) => state.admin.skill);
  return (
    <ScreenTemplete title={title} editHandler={editHandler}></ScreenTemplete>
  );
}
