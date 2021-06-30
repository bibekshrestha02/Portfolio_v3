import React from 'react';
import style from './style.module.scss';
import { useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { GrPowerReset } from 'react-icons/gr';
import ButtonAssets from '../assets/ButtonAssets';
import { Form, Formik } from 'formik';

export default function ModelComponent({
  title,
  children,
  closeHandler,
  validationSchema,
  initalValues,
  submitHandler,
}) {
  const { text, primary } = useSelector((state) => state.colors);
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initalValues}
      onSubmit={submitHandler}>
      {({ values, resetForm }) => {
        return (
          <Form>
            <div className={style.modelContainer} style={{ color: text }}>
              <div className={style.container}>
                <div className={style.heading}>
                  <span style={{ color: primary }}>{title}</span>
                  <div className={style.iconContainer}>
                    <GrPowerReset className={style.icon} onClick={resetForm} />
                    <AiOutlineClose
                      className={style.icon}
                      onClick={closeHandler}
                    />
                  </div>
                </div>
                <div className={style.body}>{children(values)}</div>
                <div className={style.footer}>
                  <ButtonAssets title='Submit' styles={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
