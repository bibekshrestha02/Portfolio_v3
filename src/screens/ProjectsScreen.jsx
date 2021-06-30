import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector } from 'react-redux';
import ProjectComponent from '../components/ProjectComponent';
import style from './style.module.scss';
import ModelComponent from '../components/ModelComponent';
import MyTextInput from '../components/MyInputsCompoenent/MyTextInput';
import ImageAssets from '../assets/ImageAssets';
import * as yup from 'yup';

export default function ProjectsScreen() {
  const [isEditModel, setEditModel] = React.useState(false);
  const [isProjectModel, setProjectModel] = React.useState(false);
  const editModalHandler = () => {
    setEditModel((e) => !e);
    return;
  };
  const projectModelHandler = () => {
    setProjectModel((e) => !e);
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
  const projectInitalValue = {
    name: '',
    path: '',
    icon: '',
  };
  const projectValidationSchema = yup.object({
    name: yup.string().min(4).max(100).required(),
    path: yup.string().min(4).required(),
    icon: yup.string().min(4).required(),
  });
  const projectSubmitHandler = (values) => {
    console.log(values);
  };
  const updateHandler = () => {};
  const deleteHandler = () => {};
  return (
    <ScreenTemplete
      title={title}
      editHandler={editModalHandler}
      isCreateButton
      createHandler={projectModelHandler}>
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
              validationSchema={projectValidationSchema}
              updateHandler={updateHandler}
              deleteHandler={deleteHandler}
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
      {isProjectModel && (
        <ModelComponent
          title='Add Project'
          closeHandler={projectModelHandler}
          initalValues={projectInitalValue}
          validationSchema={projectValidationSchema}
          submitHandler={projectSubmitHandler}>
          {(value) => {
            return (
              <>
                <ImageAssets path={value.icon} />
                <MyTextInput
                  name='icon'
                  label='Icon'
                  placeholder='Enter Icon'
                />
                <MyTextInput
                  name='name'
                  label='Name'
                  placeholder='Enter Name'
                />
                <MyTextInput
                  name='path'
                  label='Path'
                  placeholder='Enter Path'
                />
              </>
            );
          }}
        </ModelComponent>
      )}
    </ScreenTemplete>
  );
}
