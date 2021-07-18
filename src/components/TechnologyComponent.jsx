import React, { lazy } from 'react';
import style from './style.module.scss';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import ImageAssets from '../assets/ImageAssets';
import MyTextInput from './MyInputsCompoenent/MyTextInput';
const ModelComponent = lazy(() => import('./FormModelComponent'));
export default function TechnologyComponent({
  skill,
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
    name: skill.name,
    iconPath: skill.iconPath,
    _id: skill._id,
  };
  return (
    <div className={style.technologyContainer}>
      {isAdmin && (
        <div className={style.editContainer}>
          <AiOutlineDelete
            color={colors.warning}
            size={14}
            onClick={() => deleteHandler(skill._id)}
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
        <img src={skill.icon} alt='icon' />
      </div>
      <span>{skill.name}</span>
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
                  name='iconPath'
                  label='Icon Path'
                  placeholder='Enter Icon Path'
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
