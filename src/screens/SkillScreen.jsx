import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector } from 'react-redux';
import TechnologyComponent from '../components/TechnologyComponent';
import style from './style.module.scss';
export default function SkillScreen() {
  const editHandler = () => {
    return;
  };
  const { title, data } = useSelector((state) => state.admin.skill);
  return (
    <ScreenTemplete title={title} editHandler={editHandler}>
      <div className={style.skillScreenContainer}>
        {data.map((e) => (
          <TechnologyComponent name={e.name} icon={e.icon} key={e.name} />
        ))}
      </div>
    </ScreenTemplete>
  );
}
