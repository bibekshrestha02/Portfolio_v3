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
      {({ values, resetForm, isSubmitting }) => {
        return (
          <Form>
            <div className={style.modelContainer} style={{ color: text }}>
              <div className={style.container}>
                {/* Heading */}
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
                {/* Body */}
                <div className={style.body}>{children(values)}</div>
                {/* Footer */}
                <div className={style.footer}>
                  <ButtonAssets
                    title='Submit'
                    styles={{ width: '100%' }}
                    isSubmitting={isSubmitting}
                  />
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
