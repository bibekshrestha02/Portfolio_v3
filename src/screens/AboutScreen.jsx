import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector, useDispatch } from 'react-redux';
import ButtonAssets from '../assets/ButtonAssets';
import style from './style.module.scss';
import ModelComponent from '../components/FormModelComponent';
import MyTextInput from '../components/MyInputsCompoenent/MyTextInput';
import MyTextArea from '../components/MyInputsCompoenent/MyTextArea';
import * as yup from 'yup';
import {
  editAboutPageAction,
  aboutFetchAction,
} from '../store/actions/AdminActions';
import { createMessageAction } from '../store/actions/MessageActions';

export default function AboutScreen() {
  const [isEditModel, setEditModel] = React.useState(false);
  const dispatch = useDispatch();
  const editModalHandler = () => {
    setEditModel((e) => !e);
    return;
  };
  const { title, subTitle, description, cvPath } = useSelector(
    (state) => state.admin.about
  );
  const initalValue = {
    title: title ? title : '',
    subTitle: subTitle ? subTitle : '',
    description: description ? description : '',
    cvPath: cvPath ? cvPath : '',
  };
  const validationSchema = yup.object({
    title: yup.string().min(4).max(100).required(),
    subTitle: yup.string().min(4).max(100).required(),
    description: yup.string().min(4).max(500).required(),
    cvPath: yup.string().required(),
  });
  const submitHandler = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      await dispatch(editAboutPageAction(values));
      dispatch(createMessageAction('Successfully Updated!', 'warning'));
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
      console.log(error);
      dispatch(createMessageAction('Successfully Updated!', 'warning'));
    }
  };
  return (
    <ScreenTemplete
      title={title}
      editHandler={editModalHandler}
      action={aboutFetchAction}>
      <div className={style.aboutScreenContainer}>
        <p className={style.subTitle}>{subTitle}</p>
        <p className={style.description}>{description}</p>
        <ButtonAssets title='Download My CV' />
      </div>
      {isEditModel && (
        <ModelComponent
          title='Edit Page'
          closeHandler={editModalHandler}
          initalValues={initalValue}
          validationSchema={validationSchema}
          submitHandler={submitHandler}>
          {() => {
            return (
              <>
                <MyTextInput
                  name='title'
                  label='Title'
                  placeholder='Enter Title'
                />
                <MyTextInput
                  name='subTitle'
                  label='Sub Title'
                  placeholder='Enter Sub-Title'
                />
                <MyTextInput
                  name='cvPath'
                  label='CV Path'
                  placeholder='Enter CV Path'
                />
                <MyTextArea
                  name='description'
                  label='Description'
                  placeholder='Enter Description'
                />
              </>
            );
          }}
        </ModelComponent>
      )}
    </ScreenTemplete>
  );
}
