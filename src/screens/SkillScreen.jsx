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
  const { isAdmin } = useSelector((state) => state.admin);
  const colors = useSelector((state) => state.colors);

  return (
    <ScreenTemplete title={title} editHandler={editHandler} isCreateButton>
      <div className={style.skillScreenContainer}>
        {data.map((e) => (
          <TechnologyComponent
            isAdmin={isAdmin}
            name={e.name}
            icon={e.icon}
            key={e.name}
            colors={colors}
          />
        ))}
      </div>
    </ScreenTemplete>
  );
}
