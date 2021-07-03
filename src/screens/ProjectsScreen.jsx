import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector, useDispatch } from 'react-redux';
import ProjectComponent from '../components/ProjectComponent';
import style from './style.module.scss';

import MyTextInput from '../components/MyInputsCompoenent/MyTextInput';
import ImageAssets from '../assets/ImageAssets';
import * as yup from 'yup';
import {
  editProjectTitlePageAction,
  createProjectAction,
  deleteProjectAction,
  editProjectAction,
} from '../store/actions/AdminActions';
const ModelComponent = React.lazy(() => import('../components/ModelComponent'));
export default function ProjectsScreen() {
  const dispatch = useDispatch();
  const [isEditModel, setEditModel] = React.useState(false);
  const [isProjectModel, setProjectModel] = React.useState(false);
  const { title, data } = useSelector((state) => state.admin.project);
  const { isAdmin } = useSelector((state) => state.admin);
  const colors = useSelector((state) => state.colors);
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
  const initalValue = {
    title: title ? title : '',
  };
  const validationSchema = yup.object({
    title: yup.string().min(4).max(100).required(),
  });
  const editModalHandler = () => {
    setEditModel((e) => !e);
    return;
  };
  const projectModelHandler = () => {
    setProjectModel((e) => !e);
    return;
  };
  const projectSubmitHandler = (values) => {
    console.log(values);
    dispatch(createProjectAction(values));
  };
  const editPageSubmitHandler = (values) => {
    dispatch(editProjectTitlePageAction(values.title));
    console.log(values.title);
  };
  const updateHandler = (values) => {
    dispatch(editProjectAction(values));
  };
  const deleteHandler = (id) => {
    const isConfirm = window.confirm('Are you sure?\n You wants to delete.');
    if (!isConfirm) return;
    dispatch(deleteProjectAction(id));
  };
  return (
    <ScreenTemplete
      title={title}
      editHandler={editModalHandler}
      isCreateButton
      createHandler={projectModelHandler}>
      <div className={style.projectsScreenContainer}>
        {data.map((project) => {
          return (
            <ProjectComponent
              isAdmin={isAdmin}
              colors={colors}
              project={project}
              key={project._id}
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
          submitHandler={editPageSubmitHandler}>
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
