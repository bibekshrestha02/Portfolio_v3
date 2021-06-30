import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector } from 'react-redux';
import TechnologyComponent from '../components/TechnologyComponent';
import style from './style.module.scss';
import ModelComponent from '../components/ModelComponent';
import MyTextInput from '../components/MyInputsCompoenent/MyTextInput';
import * as yup from 'yup';
import ImageAssets from '../assets/ImageAssets';

export default function SkillScreen() {
  const [isEditModel, setEditModel] = React.useState(false);
  const [isSkillsModel, setSkillsModel] = React.useState(false);
  const skillsModelHandler = () => {
    setSkillsModel((e) => !e);
    return;
  };
  const editModalHandler = () => {
    setEditModel((e) => !e);
    return;
  };
  const { title, data } = useSelector((state) => state.admin.skill);
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
  const skillsInitalValue = {
    name: '',
    icon: '',
  };
  const skillsValidationSchema = yup.object({
    name: yup.string().min(4).max(100).required(),
    icon: yup.string().min(4).required(),
  });
  const skillsSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <ScreenTemplete
      title={title}
      editHandler={editModalHandler}
      isCreateButton
      createHandler={skillsModelHandler}>
      <div className={style.skillScreenContainer}>
        {data.map((e) => (
          <TechnologyComponent
            isAdmin={isAdmin}
            name={e.name}
            icon={e.icon}
            key={e.name}
            colors={colors}
          />
        ))}
      </div>
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
      {isSkillsModel && (
        <ModelComponent
          title='Add Skills'
          closeHandler={skillsModelHandler}
          initalValues={skillsInitalValue}
          validationSchema={skillsValidationSchema}
          submitHandler={skillsSubmitHandler}>
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
