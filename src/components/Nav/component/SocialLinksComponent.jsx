import React, { useState } from 'react';
import style from '../style.module.scss';
import { IoAddCircleOutline, IoRemoveOutline } from 'react-icons/io5';
import { AiOutlineEdit } from 'react-icons/ai';
import MyTextInput from '../../MyInputsCompoenent/MyTextInput';
import ImageAssets from '../../../assets/ImageAssets';
import * as Yup from 'yup';
import ModelComponent from '../../../components/FormModelComponent';
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
    _id: link._id,
    name: link.name,
    iconPath: link.iconPath,
    link: link.link,
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
          <abbr title={link.name}>
            <img src={link.iconPath} alt='icon' className={style.icon} />
          </abbr>
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
                <ImageAssets path={values.iconPath} />
                <MyTextInput
                  placeholder='Paste Icon Path'
                  type='text'
                  label='Icon Path'
                  name='iconPath'
                />
                <MyTextInput
                  placeholder='Enter Name'
                  type='text'
                  label='Name'
                  name='name'
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
    iconPath: '',
    link: '',
    name: '',
  };

  const validationSchema = Yup.object({
    iconPath: Yup.string().required(),
    link: Yup.string().required(),
    name: Yup.string().required(),
  });
  return (
    <div>
      <div className={style.socialLinksContainer}>
        {socialLinks.map((link) => {
          return (
            <SocialIconComponent
              isAdmin={isAdmin}
              link={link}
              key={link._id}
              colors={colors}
              updateHandler={updateHandler}
              validationSchema={validationSchema}
              deleteHandler={() => deleteHandler(link._id)}
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
                <ImageAssets path={values.iconPath} />
                <MyTextInput
                  placeholder='Enter Name'
                  type='text'
                  label='Name'
                  name='name'
                />
                <MyTextInput
                  placeholder='Paste Icon Path'
                  type='text'
                  label='Icon Path'
                  name='iconPath'
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
