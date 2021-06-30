import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector } from 'react-redux';
import TechnologyComponent from '../components/TechnologyComponent';
import style from './style.module.scss';
import ModelComponent from '../components/ModelComponent';
import MyTextInput from '../components/MyInputsCompoenent/MyTextInput';
import * as yup from 'yup';
export default function SkillScreen() {
  const [isEditModel, setEditModel] = React.useState(false);
  const editModalHandler = () => {
    setEditModel((e) => !e);
    return;
  };
  const { title, data } = useSelector((state) => state.admin.skill);
  const { isAdmin } = useSelector((state) => state.admin);
  const colors = useSelector((state) => state.colors);
  const initalValue = {
    title: title ? title : '',
  };
  const validationSchema = yup.object({
    title: yup.string().min(4).max(100).required(),
  });
  const submitHandler = (values) => {
    console.log(values);
  };
  return (
    <ScreenTemplete title={title} editHandler={editModalHandler} isCreateButton>
      <div className={style.skillScreenContainer}>
        {data.map((e) => (
          <TechnologyComponent
            isAdmin={isAdmin}
            name={e.name}
            icon={e.icon}
            key={e.name}
            colors={colors}
          />
        ))}
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
              </>
            );
          }}
        </ModelComponent>
      )}
    </ScreenTemplete>
  );
}
