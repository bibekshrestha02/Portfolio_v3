import React from 'react';
import ModelComponent from '../../ModelComponent';
import { useSelector } from 'react-redux';
import MyColorInput from '../../MyInputsCompoenent/MyColorInput';
export default function ColorComponent({ closeHandler, submitHandler }) {
  const {
    primary,
    navText,
    text,
    navHover,
    pageBackground,
    screenBackground,
    warning,
  } = useSelector((state) => state.colors);
  return (
    <ModelComponent title='Color Templetes' closeHandler={closeHandler}>
      <>
        <MyColorInput
          label='Primary'
          name='primary'
          value={primary}
          submitHandler={submitHandler}
        />
        <MyColorInput
          label='Nav Text'
          name='navText'
          value={navText}
          submitHandler={submitHandler}
        />
        <MyColorInput
          label='Text'
          name='text'
          value={text}
          submitHandler={submitHandler}
        />
        <MyColorInput
          label='Nav Hover'
          name='navHover'
          value={navHover}
          submitHandler={submitHandler}
        />
        <MyColorInput
          label='Page Background'
          name='pageBackground'
          value={pageBackground}
          submitHandler={submitHandler}
        />
        <MyColorInput
          label='Screen Background'
          name='screenBackground'
          value={screenBackground}
          submitHandler={submitHandler}
        />
        <MyColorInput
          label='Warning'
          name='warning'
          value={warning}
          submitHandler={submitHandler}
        />
      </>
    </ModelComponent>
  );
}
