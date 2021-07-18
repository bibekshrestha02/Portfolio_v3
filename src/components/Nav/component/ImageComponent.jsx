import React, { useState } from 'react';
import style from '../style.module.scss';
import { IoMdColorPalette } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import MyTextInput from '../../MyInputsCompoenent/MyTextInput';
import ImageAssets from '../../../assets/ImageAssets';
import * as Yup from 'yup';
import FormModelComponent from '../../FormModelComponent';
import ColorComponent from './ColorComponent';
export default function ImageComponent({
  image,
  isAdmin,
  colors,
  submitHandler,
  colorSubmitHandler,
}) {
  const [isImageLoading, setImageLoading] = useState(true);
  const [isProfileModel, setProfileModel] = useState(false);
  const [isColorModel, setColorModel] = useState(false);
  const colorModelToggler = () => setColorModel((e) => !e);
  const profileModelToggler = () => setProfileModel((e) => !e);

  const profileInitialValues = {
    path: image ? image : '',
  };
  const profileValidationSchema = Yup.object({
    path: Yup.string().required(),
  });

  return (
    <div>
      {/* Profile Image Container */}
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
      {/* Profile Model */}
      {isProfileModel && (
        <FormModelComponent
          title='Change Profile'
          closeHandler={profileModelToggler}
          validationSchema={profileValidationSchema}
          initalValues={profileInitialValues}
          submitHandler={submitHandler}>
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
        </FormModelComponent>
      )}
      {/* Color Model */}
      {isColorModel && (
        <ColorComponent
          closeHandler={colorModelToggler}
          submitHandler={colorSubmitHandler}
        />
      )}
    </div>
  );
}
