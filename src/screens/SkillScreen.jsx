import React, { lazy } from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector, useDispatch } from 'react-redux';
import TechnologyComponent from '../components/TechnologyComponent';
import style from './style.module.scss';
import MyTextInput from '../components/MyInputsCompoenent/MyTextInput';
import * as yup from 'yup';
import ImageAssets from '../assets/ImageAssets';
import FetchInitalApi from '../templetes/FetchInitalApi';
import {
  editSkillTitlePageAction,
  createSkillAction,
  deleteSkillAction,
  editSkillAction,
  skillFetchAction,
} from '../store/actions/AdminActions';
import { createMessageAction } from '../store/actions/MessageActions';
const ModelComponent = lazy(() => import('../components/FormModelComponent'));

export default function SkillScreen() {
  const dispatch = useDispatch();
  const [isPageEdit, setPageEdit] = React.useState(false);
  const [isCreateModel, setCreateModel] = React.useState(false);
  const { title, data } = useSelector((state) => state.admin.skill);
  const { isAdmin } = useSelector((state) => state.admin);
  const colors = useSelector((state) => state.colors);
  const initalValues = {
    name: '',
    iconPath: '',
  };
  const pageInitalValues = {
    title: title ? title : '',
  };
  const validationSchema = yup.object({
    name: yup.string().min(2).max(100).required(),
    iconPath: yup.string().min(4).required(),
  });
  const pageValidationSchema = yup.object({
    title: yup.string().min(4).max(100).required(),
  });
  const createModelToggler = () => {
    setCreateModel((e) => !e);
    return;
  };
  const pageModelToggler = () => {
    setPageEdit((e) => !e);
    return;
  };

  const editPageSubmitHandler = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      await dispatch(editSkillTitlePageAction(values.title));
      dispatch(createMessageAction('Successfully Updated!', 'warning'));
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
      dispatch(createMessageAction('Something Went Wrong!', 'error'));
    }
  };

  const createSubmitHandler = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      await dispatch(createSkillAction(values));
      dispatch(createMessageAction('Successfully Created!', 'warning'));
      setSubmitting(false);
    } catch (error) {
      dispatch(createMessageAction('Something Went Wrong!', 'error'));
      setSubmitting(false);
    }
  };

  const updateHandler = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      await dispatch(editSkillAction(values));
      dispatch(createMessageAction('Successfully Updated!', 'warning'));
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
      dispatch(createMessageAction('Something Went Wrong!', 'error'));
    }
  };

  const deleteHandler = async (id) => {
    const isConfirm = window.confirm('Are you sure?');
    if (!isConfirm) return;
    try {
      await dispatch(deleteSkillAction(id));
      dispatch(createMessageAction('Successfully Deleted!', 'warning'));
    } catch (error) {
      dispatch(createMessageAction('Something Went Wrong!', 'error'));
    }
  };
  return (
    <FetchInitalApi action={skillFetchAction} name='skill'>
      <ScreenTemplete
        title={title}
        editHandler={pageModelToggler}
        isCreateButton
        createHandler={createModelToggler}>
        <div className={style.skillScreenContainer}>
          {data.map((skill) => (
            <TechnologyComponent
              isAdmin={isAdmin}
              skill={skill}
              key={skill._id}
              colors={colors}
              updateHandler={updateHandler}
              validationSchema={validationSchema}
              deleteHandler={deleteHandler}
            />
          ))}
        </div>
        {/* page edit model */}
        {isPageEdit && (
          <ModelComponent
            title='Edit Page'
            closeHandler={pageModelToggler}
            initalValues={pageInitalValues}
            validationSchema={pageValidationSchema}
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
        {/* Create Skills Model */}
        {isCreateModel && (
          <ModelComponent
            title='Add Skills'
            closeHandler={createModelToggler}
            initalValues={initalValues}
            validationSchema={validationSchema}
            submitHandler={createSubmitHandler}>
            {(value) => {
              return (
                <>
                  <ImageAssets path={value.iconPath} />
                  <MyTextInput
                    name='iconPath'
                    label='Icon Path'
                    placeholder='Enter IconPath'
                  />
                  <MyTextInput
                    name='name'
                    label='Name'
                    placeholder='Enter Name'
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
