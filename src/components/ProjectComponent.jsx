import React, { useState, lazy } from 'react';
import style from './style.module.scss';
import ImageLoadingComponent from './ImageLoadingComponent';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import MyTextInput from './MyInputsCompoenent/MyTextInput';
import ImageAssets from '../assets/ImageAssets';
const ModelComponent = lazy(() => import('./FormModelComponent'));
export default function ProjectComponent({
  project,
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
    _id: project._id,
    name: project.name,
    link: project.link,
    iconPath: project.iconPath,
  };
  return (
    <>
      <div className={style.projectComponent}>
        {isAdmin && (
          <div className={style.editContainer}>
            <AiOutlineDelete
              color={colors.warning}
              size={20}
              onClick={() => deleteHandler(project._id)}
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
          href={project.link}
          target='_blank'
          rel='noreferrer'
          style={{ color: colors.text }}>
          <ImageLoadingComponent isLoading={isImageLoading} />
          <img
            src={project.iconPath}
            alt='project'
            style={{ display: isImageLoading ? 'none' : 'block' }}
            onLoad={() => setImageLoading(false)}
            onError={() => setImageLoading(true)}
          />
          <span>{project.name}</span>
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
                <ImageAssets path={value.iconPath} />
                <MyTextInput
                  name='iconPath'
                  label='Icon'
                  placeholder='Enter Icon Path'
                />
                <MyTextInput
                  name='name'
                  label='Name'
                  placeholder='Enter Name'
                />
                <MyTextInput
                  name='link'
                  label='Link'
                  placeholder='Enter Link'
                />
              </>
            );
          }}
        </ModelComponent>
      )}
    </>
  );
}
