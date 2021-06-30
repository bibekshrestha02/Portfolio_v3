import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector } from 'react-redux';
import ProjectComponent from '../components/ProjectComponent';
import style from './style.module.scss';
import ModelComponent from '../components/ModelComponent';
import MyTextInput from '../components/MyInputsCompoenent/MyTextInput';
import * as yup from 'yup';

export default function ProjectsScreen() {
  const [isEditModel, setEditModel] = React.useState(false);
  const editModalHandler = () => {
    setEditModel((e) => !e);
    return;
  };
  const { title, data } = useSelector((state) => state.admin.project);
  const { isAdmin } = useSelector((state) => state.admin);
  const colors = useSelector((state) => state.colors);
  const initalValue = {
    title: title ? title : '',
  };
  const validationSchema = yup.object({
    title: yup.string().min(4).max(100).required(),
  });
  const submitHandler = (values) => {
    console.log(values);
  };
  return (
    <ScreenTemplete title={title} editHandler={editModalHandler} isCreateButton>
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
      {isEditModel && (
        <ModelComponent
          title='Edit Page'
          closeHandler={editModalHandler}
          initalValues={initalValue}
          validationSchema={validationSchema}
          submitHandler={submitHandler}>
          {() => {
            return (
              <>
                <MyTextInput
                  name='title'
                  label='Title'
                  placeholder='Enter Title'
                />
              </>
            );
          }}
        </ModelComponent>
      )}
    </ScreenTemplete>
  );
}
