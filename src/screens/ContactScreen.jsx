import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.scss';
import ModelComponent from '../components/FormModelComponent';
import MyTextInput from '../components/MyInputsCompoenent/MyTextInput';
import MyTextArea from '../components/MyInputsCompoenent/MyTextArea';
import * as yup from 'yup';
import {
  editContactPageAction,
  contactFetchAction,
} from '../store/actions/AdminActions';
import FetchInitalApi from '../templetes/FetchInitalApi';
import { createMessageAction } from '../store/actions/MessageActions';
export default function ContactScreen() {
  const [isEditModel, setEditModel] = React.useState(false);
  const dispatch = useDispatch();
  const editModalHandler = () => {
    setEditModel((e) => !e);
    return;
  };

  const { title, detail, subDetail, email } = useSelector(
    (state) => state.admin.contact
  );
  const initalValue = {
    title: title ? title : '',
    detail: detail ? detail : '',
    subDetail: subDetail ? subDetail : '',
    email: email ? email : '',
  };
  const validationSchema = yup.object({
    title: yup.string().min(4).max(100).required(),
    detail: yup.string().min(4).max(500).required(),
    subDetail: yup.string().min(4).max(500).required(),
    email: yup.string().email().required(),
  });
  const submitHandler = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      await dispatch(editContactPageAction(values));
      dispatch(createMessageAction('Successfully Updated!', 'warning'));
      setSubmitting(false);
    } catch (error) {
      console.log(error);
      dispatch(createMessageAction('Something Went Wrong!', 'error'));
      setSubmitting(false);
    }
  };
  return (
    <FetchInitalApi action={contactFetchAction} name='contact'>
      <ScreenTemplete title={title} editHandler={editModalHandler}>
        <div className={style.contactScreen}>
          <p>{detail}</p>
          <a href={`mailto:${email}`}>{email}</a>
          <p>
            <i>{subDetail}</i>
          </p>
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
                    name='email'
                    label='Email'
                    placeholder='Enter Email'
                  />
                  <MyTextArea
                    name='detail'
                    label='Detail'
                    placeholder='Enter Detail'
                  />
                  <MyTextArea
                    name='subDetail'
                    label='Sub-Details'
                    placeholder='Enter Sub-Details'
                  />
                </>
              );
            }}
          </ModelComponent>
        )}
      </ScreenTemplete>
    </FetchInitalApi>
  );
}
