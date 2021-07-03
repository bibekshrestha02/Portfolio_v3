import React, { lazy, Suspense } from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector, useDispatch } from 'react-redux';
import EducationDetailsCompoent from '../components/EducationDetailsCompoent';
import LoadingComponent from '../components/LoadingComponent';
import MyTextInput from '../components/MyInputsCompoenent/MyTextInput';
import * as yup from 'yup';
import {
  editEducationTitlePageAction,
  createEducationAction,
  editEducationAction,
  deleteEducationAction,
} from '../store/actions/AdminActions';
const ModelComponent = lazy(() => import('../components/ModelComponent'));
export default function EducationScreen() {
  const [isPageEdit, setPageEdit] = React.useState(false);
  const [isCreateModel, setCreateModel] = React.useState(false);
  const education = useSelector((state) => state.admin.education);
  const { isAdmin } = useSelector((state) => state.admin);
  const colors = useSelector((state) => state.colors);
  const dispatch = useDispatch();
  const pageValue = {
    title: education.title ? education.title : '',
  };
  const initalValue = {
    name: '',
    place: '',
    year: '',
    branch: '',
  };
  const validationSchema = yup.object({
    name: yup.string().min(3).max(100).required(),
    place: yup.string().min(4).max(100).required(),
    year: yup.string().min(4).max(100),
    branch: yup.string().min(2).max(100).required(),
  });
  const pageValidationSchema = yup.object({
    title: yup.string().min(4).max(100).required(),
  });
  const pageModelToggler = () => {
    setPageEdit((e) => !e);
    return;
  };
  const createModelToggler = () => {
    setCreateModel((e) => !e);
    return;
  };
  const pageSubmitHandler = (values) => {
    try {
      dispatch(editEducationTitlePageAction(values.title));
    } catch (error) {
      console.log(error);
    }
  };
  const createHandler = (values) => {
    dispatch(createEducationAction(values));
  };
  const editHandler = (values) => {
    dispatch(editEducationAction(values));
  };
  const deleteHandler = (id) => {
    let isConfirm = window.confirm('Are you sure?');
    if (!isConfirm) {
      return;
    }
    dispatch(deleteEducationAction(id));
  };
  return (
    <Suspense fallback={<LoadingComponent />}>
      <ScreenTemplete
        title={education.title}
        editHandler={pageModelToggler}
        isCreateButton
        createHandler={createModelToggler}>
        {education.courses.map((course) => {
          return (
            <EducationDetailsCompoent
              colors={colors}
              isAdmin={isAdmin}
              key={course._id}
              course={course}
              validationSchema={validationSchema}
              updateHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          );
        })}
        {isPageEdit && (
          <ModelComponent
            title='Edit Page'
            closeHandler={pageModelToggler}
            initalValues={pageValue}
            validationSchema={pageValidationSchema}
            submitHandler={pageSubmitHandler}>
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
        {isCreateModel && (
          <ModelComponent
            title='Add Education'
            closeHandler={createModelToggler}
            initalValues={initalValue}
            validationSchema={validationSchema}
            submitHandler={createHandler}>
            {() => {
              return (
                <>
                  <MyTextInput
                    name='name'
                    label='Name'
                    placeholder='Enter Name'
                  />
                  <MyTextInput
                    name='place'
                    label='Place'
                    placeholder='Enter Place'
                  />
                  <MyTextInput
                    name='year'
                    label='Year'
                    placeholder='Enter Year'
                  />
                  <MyTextInput
                    name='branch'
                    label='Branch'
                    placeholder='Enter Branch'
                  />
                </>
              );
            }}
          </ModelComponent>
        )}
      </ScreenTemplete>
    </Suspense>
  );
}
