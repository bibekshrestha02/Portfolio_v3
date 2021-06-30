import React from 'react';
import { useField } from 'formik';
import style from './style.module.scss';
import { useSelector } from 'react-redux';
export default function MyTextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  const colors = useSelector((state) => state.colors);
  const isError = meta.touched && meta.error;
  return (
    <div
      className={style.myTextareaInputContainer}
      style={{ color: colors.text }}>
      <label>
        {label && <span>{label}</span>}
        <textarea
          style={{ borderColor: isError ? colors.warning : 'gray' }}
          {...field}
          {...props}
        />
      </label>
      {isError && (
        <span style={{ color: colors.warning }} className={style.error}>
          {meta.error}
        </span>
      )}
    </div>
  );
}
