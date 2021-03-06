import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import { BiEdit } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import PageErrorComponent from '../components/PageErrorComponent';
import LoadingComponent from '../components/LoadingComponent';
export default function ScreenTemplete({
  title,
  editHandler,
  children,
  isCreateButton,
  createHandler,
  action,
  isLoad,
}) {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const { isAdmin } = useSelector((state) => state.admin);
  const { screenBackground, text, primary } = useSelector(
    (state) => state.colors
  );
  function textColorChanger(text) {
    if (!text) {
      return;
    }
    let arrayText = text.split(' ');
    if (arrayText.length <= 1) {
      return (
        <span className={style.title} style={{ color: primary }}>
          {arrayText[0]}
        </span>
      );
    } else {
      let textNode = [];
      for (let i = 0; i < arrayText.length - 1; i++) {
        textNode.push(arrayText[i]);
        textNode.push(' ');
      }
      textNode.push(
        <span style={{ color: primary }} key='1'>
          {arrayText[arrayText.length - 1]}
        </span>
      );
      return <span className={style.title}>{textNode}</span>;
    }
  }

  useEffect(() => {
    if (!action) {
      setLoading(false);
      return;
    }
    const init = async () => {
      try {
        setError(false);
        setLoading(true);
        await dispatch(action());
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    if (!isLoad) {
      init();
    }
  }, [action, dispatch, isLoad]);

  let data;
  if (isLoading) {
    data = <LoadingComponent />;
  } else if (!isLoading && isError) {
    data = <PageErrorComponent />;
  } else {
    data = (
      <div className={style.component}>
        {isAdmin && (
          <div>
            <BiEdit className={style.icon} onClick={editHandler} size={30} />
            {isCreateButton && (
              <IoMdAdd
                className={style.icon2}
                onClick={createHandler}
                size={30}
              />
            )}
          </div>
        )}
        <div>{textColorChanger(title)}</div>
        {children}
      </div>
    );
  }

  return (
    <div
      className={style.screenTempleteContainer}
      style={{
        color: text,
        backgroundColor: screenBackground,
      }}>
      {data}
    </div>
  );
}
