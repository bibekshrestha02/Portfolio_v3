import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector } from 'react-redux';
import ProjectComponent from '../components/ProjectComponent';
import style from './style.module.scss';
export default function ProjectsScreen() {
  const editHandler = () => {
    return;
  };
  const { title, data } = useSelector((state) => state.admin.project);
  const { isAdmin } = useSelector((state) => state.admin);
  const colors = useSelector((state) => state.colors);

  return (
    <ScreenTemplete title={title} editHandler={editHandler} isCreateButton>
      <div className={style.projectsScreenContainer}>
        {data.map((e) => {
          return (
            <ProjectComponent
              isAdmin={isAdmin}
              colors={colors}
              name={e.name}
              path={e.path}
              icon={e.icon}
              key={e.name}
            />
          );
        })}
      </div>
    </ScreenTemplete>
  );
}
