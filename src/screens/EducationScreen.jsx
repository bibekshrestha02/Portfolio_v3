import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector } from 'react-redux';
import EducationDetailsCompoent from '../components/EducationDetailsCompoent';
import ModelComponent from '../components/ModelComponent';
import MyTextInput from '../components/MyInputsCompoenent/MyTextInput';
import * as yup from 'yup';
export default function EducationScreen() {
  const [isEditModel, setEditModel] = React.useState(false);
  const editModalHandler = () => {
    setEditModel((e) => !e);
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
  return (
    <ScreenTemplete title={title} editHandler={editModalHandler} isCreateButton>
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
    </ScreenTemplete>
  );
}
