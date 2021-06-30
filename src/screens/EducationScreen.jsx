import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector } from 'react-redux';
import EducationDetailsCompoent from '../components/EducationDetailsCompoent';
import ModelComponent from '../components/ModelComponent';
import MyTextInput from '../components/MyInputsCompoenent/MyTextInput';
import * as yup from 'yup';
export default function EducationScreen() {
  const [isEditModel, setEditModel] = React.useState(false);
  const [isEducationModel, setEducationModel] = React.useState(false);
  const editModalHandler = () => {
    setEditModel((e) => !e);
    return;
  };
  const educationModelHandler = () => {
    setEducationModel((e) => !e);
    return;
  };
  const { title, courses } = useSelector((state) => state.admin.education);
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
  const educationInitalValue = {
    name: '',
    place: '',
    year: '',
    branch: '',
  };
  const educationValidationSchema = yup.object({
    name: yup.string().min(4).max(100).required(),
    place: yup.string().min(4).max(100).required(),
    year: yup.string().min(4).max(100).required(),
    branch: yup.string().min(4).max(100).required(),
  });
  const educationSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <ScreenTemplete
      title={title}
      editHandler={editModalHandler}
      isCreateButton
      createHandler={educationModelHandler}>
      {courses.map((course) => {
        return (
          <EducationDetailsCompoent
            colors={colors}
            isAdmin={isAdmin}
            key={course.name}
            name={course.name}
            place={course.place}
            year={course.year}
            branch={course.branch}
          />
        );
      })}
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
      {isEducationModel && (
        <ModelComponent
          title='Add Education'
          closeHandler={educationModelHandler}
          initalValues={educationInitalValue}
          validationSchema={educationValidationSchema}
          submitHandler={educationSubmitHandler}>
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
  );
}
