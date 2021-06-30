import React from 'react';
import ModelComponent from '../../../components/ModelComponent';
import MyTextInput from '../../MyInputsCompoenent/MyTextInput';
import MyColorInput from '../../MyInputsCompoenent/MyColorInput';
import ImageAssets from '../../../assets/ImageAssets';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

export default function ModelComponents({
  isProfileModel,
  isColorModel,
  isAdminDetailModel,
  isSocialModel,
  profileModelHandler,
  colorModelHandler,
  adminDetailHandler,
  socialModelHandler,
}) {
  const {
    primary,
    navText,
    text,
    navHover,
    pageBackground,
    screenBackground,
    warning,
  } = useSelector((state) => state.colors);
  const adminDetailValues = {
    name: '',
    title: '',
  };
  const profileImageValues = {
    path: '',
  };
  const socialIconValues = {
    path: '',
    socailLink: '',
  };
  const colorValues = {
    primary,
    navText,
    text,
    navHover,
    pageBackground,
    screenBackground,
    warning,
  };
  const colorValidationSchema = Yup.object({
    primary: Yup.string().required(),
    navText: Yup.string().required(),
    text: Yup.string().required(),
    navHover: Yup.string().required(),
    pageBackground: Yup.string().required(),
    screenBackground: Yup.string().required(),
    warning: Yup.string().required(),
  });
  const adminDetailsValidationSchema = Yup.object({
    name: Yup.string().min(4).max(20).required(),
    title: Yup.string().min(2).max(40).required(),
  });

  const profileImageValidationSchema = Yup.object({
    path: Yup.string().required(),
  });
  const socialIconValidationSchema = Yup.object({
    path: Yup.string().required(),
    socialLink: Yup.string().required(),
  });
  const colorSubmitHandler = () => {
    console.log('submitted');
  };
  const adminDetailSubmitHandler = () => {
    console.log('submitted');
  };
  const profileImageSubmitHandler = () => {
    console.log('submitted');
  };
  const socialIconSubmitHandler = () => {
    console.log('submitted');
  };
  return (
    <>
      {isProfileModel && (
        <ModelComponent
          title='Change Profile'
          closeHandler={profileModelHandler}
          validationSchema={profileImageValidationSchema}
          initalValues={profileImageValues}
          submitHandler={profileImageSubmitHandler}>
          {(values) => {
            return (
              <>
                <ImageAssets path={values.path} />
                <MyTextInput
                  placeholder='Paste Image Path'
                  type='text'
                  label='Image Path'
                  name='path'
                />
              </>
            );
          }}
        </ModelComponent>
      )}
      {isColorModel && (
        <ModelComponent
          title='Color Templetes'
          closeHandler={colorModelHandler}
          initalValues={colorValues}
          validationSchema={colorValidationSchema}
          submitHandler={colorSubmitHandler}>
          {() => {
            return (
              <>
                <MyColorInput label='Primary' name='primary' />
                <MyColorInput label='Nav Text' name='navText' />
                <MyColorInput label='Text' name='text' />
                <MyColorInput label='Nav Hover' name='navHover' />
                <MyColorInput label='Page Background' name='pageBackground' />
                <MyColorInput
                  label='Screen Background'
                  name='screenBackground'
                />
                <MyColorInput type='color' label='Warning' name='warning' />
              </>
            );
          }}
        </ModelComponent>
      )}
      {isAdminDetailModel && (
        <ModelComponent
          title='Edit Profile Name'
          closeHandler={adminDetailHandler}
          submitHandler={adminDetailSubmitHandler}
          validationSchema={adminDetailsValidationSchema}
          initalValues={adminDetailValues}>
          {() => {
            return (
              <>
                <MyTextInput
                  name='name'
                  placeholder='Enter name'
                  type='text'
                  label='Name'
                />
                <MyTextInput
                  name='title'
                  placeholder='Enter Title'
                  type='text'
                  label='Title'
                />
              </>
            );
          }}
        </ModelComponent>
      )}
      {isSocialModel && (
        <ModelComponent
          title='Add Social Link'
          closeHandler={socialModelHandler}
          initalValues={socialIconValues}
          validationSchema={socialIconValidationSchema}
          submitHandler={socialIconSubmitHandler}>
          {(values) => {
            return (
              <>
                <ImageAssets path={values.path} />
                <MyTextInput
                  placeholder='Paste Image Path'
                  type='text'
                  label='Image Path'
                  name='path'
                />
                <MyTextInput
                  placeholder='Paste Social Link'
                  type='text'
                  label='Social Link'
                  name='socialLink'
                />
              </>
            );
          }}
        </ModelComponent>
      )}
    </>
  );
}
