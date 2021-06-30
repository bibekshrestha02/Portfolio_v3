import React, { lazy } from 'react';
import style from './style.module.scss';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import MyTextInput from './MyInputsCompoenent/MyTextInput';
const ModelComponent = lazy(() => import('../components/ModelComponent'));
export default function EducationDetailsCompoent({
  name,
  place,
  year,
  branch,
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
    name,
    place,
    year,
    branch,
  };
  return (
    <>
      <div className={style.educationContainer}>
        <div>
          <span className={style.title}>{name}</span>
          <p>{place}</p>
          <span>{branch}</span>
        </div>
        <div>
          {isAdmin && (
            <div>
              <AiOutlineDelete
                color={colors.warning}
                size={20}
                onClick={() => {
                  deleteHandler(name);
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
          <span>{year}</span>
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
