import React, { lazy, Suspense } from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector, useDispatch } from 'react-redux';
import EducationDetailsCompoent from '../components/EducationDetailsCompoent';
import LoadingComponent from '../components/LoadingComponent';
import MyTextInput from '../components/MyInputsCompoenent/MyTextInput';
import * as yup from 'yup';
import FetchInitalApi from '../templetes/FetchInitalApi';
import {
  editEducationTitlePageAction,
  createEducationAction,
  editEducationAction,
  deleteEducationAction,
  educationFetchAction,
} from '../store/actions/AdminActions';
import { createMessageAction } from '../store/actions/MessageActions';

const ModelComponent = lazy(() => import('../components/ModelComponent'));
export default function EducationScreen() {
  const [isPageEdit, setPageEdit] = React.useState(false);
  const [isCreateModel, setCreateModel] = React.useState(false);
  const { title, data } = useSelector((state) => state.admin.education);
  const { isAdmin } = useSelector((state) => state.admin);
  const colors = useSelector((state) => state.colors);
  const dispatch = useDispatch();
  const pageValue = {
    title: title ? title : '',
  };
  const initalValue = {
    name: '',
    place: '',
    year: 0,
    branch: '',
  };
  const validationSchema = yup.object({
    name: yup.string().min(3).max(100).required(),
    place: yup.string().min(4).max(100).required(),
    year: yup.number().required('Year must be 0 or Number'),
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
  const pageSubmitHandler = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      await dispatch(editEducationTitlePageAction(values.title));
      dispatch(createMessageAction('Successfully Updated!', 'warning'));
      setSubmitting(false);
    } catch (error) {
      console.log(error);
      setSubmitting(false);
      dispatch(createMessageAction('Something Went Wrong', 'error'));
    }
  };

  const createHandler = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      await dispatch(createEducationAction(values));

      dispatch(createMessageAction('Successfully Created!', 'warning'));
      setSubmitting(false);
    } catch (error) {
      console.log(error);
      dispatch(createMessageAction('Something Went Wrong', 'error'));
      setSubmitting(false);
    }
  };

  const editHandler = async (values, { setSubmitting }) => {
    try {
      console.log(values);
      setSubmitting(true);
      await dispatch(editEducationAction(values));
      dispatch(createMessageAction('Successfully Updated!', 'warning'));
      setSubmitting(false);
    } catch (error) {
      console.log(error.response);
      dispatch(createMessageAction('Something Went Wrong', 'error'));
      setSubmitting(false);
    }
  };
  const deleteHandler = async (id) => {
    let isConfirm = window.confirm('Are you sure?');
    if (!isConfirm) {
      return;
    }
    try {
      await dispatch(deleteEducationAction(id));
      dispatch(createMessageAction('Successfully Deleted!', 'warning'));
    } catch (error) {
      console.log(error);
      dispatch(createMessageAction('Something Went Wrong', 'error'));
    }
  };
  return (
    <FetchInitalApi action={educationFetchAction} name='education'>
      <Suspense fallback={<LoadingComponent />}>
        <ScreenTemplete
          title={title}
          editHandler={pageModelToggler}
          isCreateButton
          createHandler={createModelToggler}>
          {data.map((course) => {
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
    </FetchInitalApi>
  );
}
