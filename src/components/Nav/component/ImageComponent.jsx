import React, { useState } from 'react';
import style from '../style.module.scss';
import { IoMdColorPalette } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import MyTextInput from '../../MyInputsCompoenent/MyTextInput';
import MyColorInput from '../../MyInputsCompoenent/MyColorInput';
import ImageAssets from '../../../assets/ImageAssets';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import ModelComponent from '../../ModelComponent';
export default function ImageComponent({
  image,
  isAdmin,
  colors,
  colorSubmitHandler,
  profileImageSubmitHandler,
}) {
  const [isImageLoading, setImageLoading] = useState(true);
  const [isProfileModel, setProfileModel] = useState(false);
  const [isColorModel, setColorModel] = useState(false);
  const colorModelToggler = () => setColorModel((e) => !e);
  const profileModelToggler = () => setProfileModel((e) => !e);

  const {
    primary,
    navText,
    text,
    navHover,
    pageBackground,
    screenBackground,
    warning,
  } = useSelector((state) => state.colors);
  const profileInitialValues = {
    path: image ? image : '',
  };
  const profileValidationSchema = Yup.object({
    path: Yup.string().required(),
  });
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
  return (
    <div>
      <div className={style.imageContainer}>
        {isImageLoading && (
          <div
            className={style.image}
            style={{
              display: isImageLoading ? 'block' : 'none',
            }}>
            <BsFillPersonFill color={colors.text} />
          </div>
        )}
        <img
          onLoad={() => setImageLoading(false)}
          src={image}
          alt='profile'
          onError={() => setImageLoading(true)}
          className={style.image}
          style={{
            border: `5px solid ${colors.navText}`,
            display: isImageLoading ? 'none' : 'block',
          }}
        />
        {isAdmin && (
          <span style={{ color: colors.navText }} onClick={profileModelToggler}>
            Change Profile Path
          </span>
        )}
        {isAdmin && (
          <IoMdColorPalette
            className={style.colorPalette}
            size={30}
            color={colors.navText}
            onClick={colorModelToggler}
          />
        )}
      </div>

      {isProfileModel && (
        <ModelComponent
          title='Change Profile'
          closeHandler={profileModelToggler}
          validationSchema={profileValidationSchema}
          initalValues={profileInitialValues}
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
          closeHandler={colorModelToggler}
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
    </div>
  );
}
