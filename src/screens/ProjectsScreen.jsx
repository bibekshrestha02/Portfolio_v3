import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector, useDispatch } from 'react-redux';
import ProjectComponent from '../components/ProjectComponent';
import style from './style.module.scss';
import FetchInitalApi from '../templetes/FetchInitalApi';
import MyTextInput from '../components/MyInputsCompoenent/MyTextInput';
import ImageAssets from '../assets/ImageAssets';
import * as yup from 'yup';
import {
  editProjectTitlePageAction,
  createProjectAction,
  deleteProjectAction,
  editProjectAction,
  projectFetchAction,
} from '../store/actions/AdminActions';
import { createMessageAction } from '../store/actions/MessageActions';
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
    link: '',
    iconPath: '',
  };
  const projectValidationSchema = yup.object({
    name: yup.string().min(4).max(100).required(),
    link: yup.string().min(4).required(),
    iconPath: yup.string().min(4).required(),
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
  const editPageSubmitHandler = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      await dispatch(editProjectTitlePageAction(values.title));
      dispatch(createMessageAction('Successfully Updated!', 'warning'));
      setSubmitting(false);
    } catch (error) {
      console.log(error);
      dispatch(createMessageAction('Something Went Wrong', 'error'));
      setSubmitting(false);
    }
  };

  const projectSubmitHandler = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      await dispatch(createProjectAction(values));
      dispatch(createMessageAction('Successfully Created!', 'warning'));
      setSubmitting(false);
    } catch (error) {
      console.log(error);
      setSubmitting(false);
      dispatch(createMessageAction('Something Went Wrong', 'error'));
    }
  };

  const updateHandler = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      await dispatch(editProjectAction(values));
      dispatch(createMessageAction('Successfully Updated!', 'warning'));
      setSubmitting(false);
    } catch (error) {
      console.log(error.response);
      setSubmitting(false);
      dispatch(createMessageAction('Something Went Wrong', 'error'));
    }
  };

  const deleteHandler = async (id) => {
    const isConfirm = window.confirm('Are you sure?');
    if (!isConfirm) return;
    try {
      await dispatch(deleteProjectAction(id));
      dispatch(createMessageAction('Successfully Deleted!', 'warning'));
    } catch (error) {
      console.log(error);
      dispatch(createMessageAction('Something Went Wrong', 'error'));
    }
  };
  return (
    <FetchInitalApi action={projectFetchAction} name='project'>
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
                  <ImageAssets path={value.iconPath} />
                  <MyTextInput
                    name='iconPath'
                    label='IconPath'
                    placeholder='Enter IconPath'
                  />
                  <MyTextInput
                    name='name'
                    label='Name'
                    placeholder='Enter Name'
                  />
                  <MyTextInput
                    name='link'
                    label='Path'
                    placeholder='Enter link'
                  />
                </>
              );
            }}
          </ModelComponent>
        )}
      </ScreenTemplete>
    </FetchInitalApi>
  );
}
