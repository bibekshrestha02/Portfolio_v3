import React, { lazy, useState } from 'react';
import style from '../style.module.scss';
import { IoAddCircleOutline, IoRemoveOutline } from 'react-icons/io5';
import { AiOutlineEdit } from 'react-icons/ai';
import MyTextInput from '../../MyInputsCompoenent/MyTextInput';
import ImageAssets from '../../../assets/ImageAssets';
import * as Yup from 'yup';
const ModelComponent = lazy(() => import('../../../components/ModelComponent'));
const SocialIconComponent = ({
  isAdmin,
  link,
  colors,
  deleteHandler,
  updateHandler,
  validationSchema,
}) => {
  const [isUpdateModel, setUpdateModel] = useState(false);
  const updateModelToggle = () => {
    setUpdateModel((e) => !e);
  };
  const initalValues = {
    icon: link.icon ? link.icon : '',
    link: link.link ? link.link : '',
  };
  return (
    <div>
      <div className={style.iconContainer} key={link.icon}>
        {isAdmin && (
          <div className={style.removeContainer}>
            <IoRemoveOutline
              color={colors.warning}
              size={18}
              onClick={deleteHandler}
            />
            <AiOutlineEdit
              color={colors.navText}
              size={18}
              onClick={updateModelToggle}
            />
          </div>
        )}
        <a href={link.link} target='_blank' rel='noreferrer'>
          <img src={link.icon} alt='icon' className={style.icon} />
        </a>
      </div>
      {isUpdateModel && (
        <ModelComponent
          title='Update Social Link'
          closeHandler={updateModelToggle}
          validationSchema={validationSchema}
          initalValues={initalValues}
          submitHandler={updateHandler}>
          {(values) => {
            return (
              <>
                <ImageAssets path={values.icon} />
                <MyTextInput
                  placeholder='Paste Icon Path'
                  type='text'
                  label='Icon Path'
                  name='icon'
                />
                <MyTextInput
                  placeholder='Paste Social Link'
                  type='text'
                  label='Social Link'
                  name='link'
                />
              </>
            );
          }}
        </ModelComponent>
      )}
    </div>
  );
};
export default function SocialLinksComponent({
  socialLinks,
  isAdmin,
  colors,
  submitHandler,
  updateHandler,
  deleteHandler,
}) {
  const [isCreateModel, setCreateModel] = useState(false);
  const createModelToggler = () => setCreateModel((e) => !e);
  const initalValues = {
    icon: '',
    link: '',
  };

  const validationSchema = Yup.object({
    icon: Yup.string().required(),
    link: Yup.string().required(),
  });
  return (
    <div>
      <div className={style.socialLinksContainer}>
        {socialLinks.map((link) => {
          return (
            <SocialIconComponent
              isAdmin={isAdmin}
              link={link}
              colors={colors}
              updateHandler={updateHandler}
              validationSchema={validationSchema}
              deleteHandler={deleteHandler}
            />
          );
        })}

        {isAdmin && (
          <div className={style.iconContainer}>
            <IoAddCircleOutline
              color={colors.navText}
              onClick={createModelToggler}
              size={30}
            />
          </div>
        )}
      </div>
      {isCreateModel && (
        <ModelComponent
          title='Add Social Link'
          closeHandler={createModelToggler}
          validationSchema={validationSchema}
          initalValues={initalValues}
          submitHandler={submitHandler}>
          {(values) => {
            return (
              <>
                <ImageAssets path={values.path} />
                <MyTextInput
                  placeholder='Paste Icon Path'
                  type='text'
                  label='Icon Path'
                  name='icon'
                />
                <MyTextInput
                  placeholder='Paste Social Link'
                  type='text'
                  label='Social Link'
                  name='link'
                />
              </>
            );
          }}
        </ModelComponent>
      )}
    </div>
  );
}
