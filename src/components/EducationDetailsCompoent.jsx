import React, { lazy } from 'react';
import style from './style.module.scss';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import MyTextInput from './MyInputsCompoenent/MyTextInput';
const ModelComponent = lazy(() => import('../components/ModelComponent'));
export default function EducationDetailsCompoent({
  course,
  isAdmin,
  colors,
  validationSchema,
  updateHandler,
  deleteHandler,
}) {
  const [isUpdateModel, setUpdateModel] = React.useState(false);
  const updateModelHandler = () => {
    return setUpdateModel((e) => !e);
  };
  const educationInitalValue = {
    name: course.name,
    place: course.place,
    year: course.year,
    branch: course.branch,
    _id: course._id,
  };
  return (
    <>
      <div className={style.educationContainer}>
        <div>
          <span className={style.title}>{course.name}</span>
          <p>{course.place}</p>
          <span>{course.branch}</span>
        </div>
        <div>
          {isAdmin && (
            <div>
              <AiOutlineDelete
                color={colors.warning}
                size={20}
                onClick={() => {
                  deleteHandler(course._id);
                }}
                className={style.icon}
              />
              <AiOutlineEdit
                size={20}
                onClick={updateModelHandler}
                className={style.icon}
                color={colors.primary}
              />
            </div>
          )}
          <span>{course.year ? course.year : 'running'}</span>
        </div>
      </div>
      {isUpdateModel && (
        <ModelComponent
          title='Update Education'
          closeHandler={updateModelHandler}
          validationSchema={validationSchema}
          initalValues={educationInitalValue}
          submitHandler={updateHandler}>
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
    </>
  );
}
