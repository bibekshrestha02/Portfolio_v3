import React, { lazy } from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector } from 'react-redux';
import TechnologyComponent from '../components/TechnologyComponent';
import style from './style.module.scss';
import MyTextInput from '../components/MyInputsCompoenent/MyTextInput';
import * as yup from 'yup';
import ImageAssets from '../assets/ImageAssets';
const ModelComponent = lazy(() => import('../components/ModelComponent'));

export default function SkillScreen() {
  const [isPageEdit, setPageEdit] = React.useState(false);
  const [isCreateModel, setCreateModel] = React.useState(false);
  const { title, data } = useSelector((state) => state.admin.skill);
  const { isAdmin } = useSelector((state) => state.admin);
  const colors = useSelector((state) => state.colors);
  const initalValues = {
    name: '',
    icon: '',
  };
  const pageInitalValues = {
    title: title ? title : '',
  };
  const validationSchema = yup.object({
    name: yup.string().min(4).max(100).required(),
    icon: yup.string().min(4).required(),
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
  const pageSubmitHandler = (values) => {
    console.log(values);
  };
  const createSubmitHandler = (values) => {
    console.log(values);
  };
  const updateHandler = (values) => {
    console.log(values);
  };
  const deleteHandler = () => {};
  return (
    <ScreenTemplete
      title={title}
      editHandler={pageModelToggler}
      isCreateButton
      createHandler={createModelToggler}>
      <div className={style.skillScreenContainer}>
        {data.map((e) => (
          <TechnologyComponent
            isAdmin={isAdmin}
            name={e.name}
            icon={e.icon}
            key={e.name}
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
              </>
            );
          }}
        </ModelComponent>
      )}
    </ScreenTemplete>
  );
}
