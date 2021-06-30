import React, { useState, lazy } from 'react';
import style from './style.module.scss';
import ImageLoadingComponent from './ImageLoadingComponent';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import MyTextInput from './MyInputsCompoenent/MyTextInput';
import ImageAssets from '../assets/ImageAssets';
const ModelComponent = lazy(() => import('./ModelComponent'));
export default function ProjectComponent({
  name,
  path,
  icon,
  colors,
  isAdmin,
  validationSchema,
  updateHandler,
  deleteHandler,
}) {
  const [isImageLoading, setImageLoading] = useState(true);
  const [isUpdateModel, setUpdateModel] = useState(false);
  const updateModelHandler = () => {
    setUpdateModel((e) => !e);
  };
  const initalValues = {
    name,
    path,
    icon,
  };
  return (
    <>
      <div className={style.projectComponent}>
        {isAdmin && (
          <div className={style.editContainer}>
            <AiOutlineDelete
              color={colors.warning}
              size={20}
              onClick={deleteHandler}
              className={style.icon}
            />
            <AiOutlineEdit
              size={20}
              className={style.icon}
              color={colors.primary}
              onClick={updateModelHandler}
            />
          </div>
        )}
        <a
          href={path}
          target='_blank'
          rel='noreferrer'
          style={{ color: colors.text }}>
          <ImageLoadingComponent isLoading={isImageLoading} />
          <img
            src={icon}
            alt='project'
            style={{ display: isImageLoading ? 'none' : 'block' }}
            onLoad={() => setImageLoading(false)}
            onError={() => setImageLoading(true)}
          />
          <span>{name}</span>
        </a>
      </div>
      {isUpdateModel && (
        <ModelComponent
          title='Update Project'
          closeHandler={updateModelHandler}
          initalValues={initalValues}
          validationSchema={validationSchema}
          submitHandler={updateHandler}>
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
                <MyTextInput
                  name='path'
                  label='Path'
                  placeholder='Enter Path'
                />
              </>
            );
          }}
        </ModelComponent>
      )}
    </>
  );
}
