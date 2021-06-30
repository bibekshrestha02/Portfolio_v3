import React, { lazy } from 'react';
import style from './style.module.scss';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import ImageAssets from '../assets/ImageAssets';
import MyTextInput from './MyInputsCompoenent/MyTextInput';
const ModelComponent = lazy(() => import('./ModelComponent'));
export default function TechnologyComponent({
  name,
  icon,
  colors,
  isAdmin,
  updateHandler,
  validationSchema,
  deleteHandler,
}) {
  const [isUpdateModel, setUpdateModel] = React.useState(false);
  const updateModelToggler = () => {
    setUpdateModel((e) => !e);
  };
  const initalValues = {
    name,
    icon,
  };
  return (
    <div className={style.technologyContainer}>
      {isAdmin && (
        <div className={style.editContainer}>
          <AiOutlineDelete
            color={colors.warning}
            size={14}
            onClick={deleteHandler}
            className={style.icon}
          />
          <AiOutlineEdit
            size={14}
            onClick={updateModelToggler}
            className={style.icon}
            color={colors.primary}
          />
        </div>
      )}

      <div className={style.iconContainer}>
        <img src={icon} alt='icon' />
      </div>
      <span>{name}</span>
      {isUpdateModel && (
        <ModelComponent
          title='Update Skills'
          closeHandler={updateModelToggler}
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
              </>
            );
          }}
        </ModelComponent>
      )}
    </div>
  );
}
