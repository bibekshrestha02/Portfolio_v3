import React, { lazy } from 'react';
import style from '../style.module.scss';
import { BiEdit } from 'react-icons/bi';
import MyTextInput from '../../MyInputsCompoenent/MyTextInput';
import * as Yup from 'yup';
const ModelComponent = lazy(() => import('../../../components/ModelComponent'));
export default function AdminDetailsComponent({
  name,
  title,
  isAdmin,
  colors,
  submitHandler,
}) {
  const [isModel, setModel] = React.useState(false);
  const modelToggler = () => setModel((e) => !e);
  const initalValues = {
    name: name ? name : '',
    title: title ? title : '',
  };
  const validationSchema = Yup.object({
    name: Yup.string().min(4).max(20).required(),
    title: Yup.string().min(2).max(40).required(),
  });
  return (
    <div>
      <div className={style.adminDetails}>
        <div>
          <span style={{ color: colors.navText }} className={style.name}>
            {name}
          </span>
          <span style={{ color: colors.navText }}>{title}</span>
        </div>
        {isAdmin && (
          <BiEdit
            size={20}
            className={style.icon}
            color={colors.navText}
            onClick={modelToggler}
          />
        )}
      </div>
      {isModel && (
        <ModelComponent
          title='Change Profile'
          closeHandler={modelToggler}
          validationSchema={validationSchema}
          initalValues={initalValues}
          submitHandler={submitHandler}>
          {(values) => {
            return (
              <>
                <MyTextInput
                  placeholder='Enter Name'
                  type='text'
                  label='Name'
                  name='name'
                />
                <MyTextInput
                  placeholder='Enter TItle'
                  type='text'
                  label='Title'
                  name='title'
                />
              </>
            );
          }}
        </ModelComponent>
      )}
    </div>
  );
}
