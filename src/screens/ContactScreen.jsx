import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.scss';
import ModelComponent from '../components/ModelComponent';
import MyTextInput from '../components/MyInputsCompoenent/MyTextInput';
import MyTextArea from '../components/MyInputsCompoenent/MyTextArea';
import * as yup from 'yup';
import {
  editContactPageAction,
  contactFetchAction,
} from '../store/actions/AdminActions';
import FetchInitalApi from '../templetes/FetchInitalApi';

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
  const submitHandler = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values);
    dispatch(editContactPageAction(values));
    setSubmitting(false);
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
