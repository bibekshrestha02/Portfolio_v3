import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiCube, BiBookAlt, BiMessageRoundedDots } from 'react-icons/bi';
import { FaProjectDiagram } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.scss';
import LinksComponent from './component/LinksComponent';
import SocialLinksComponent from './component/SocialLinksComponent';
import ImageComponent from './component/ImageComponent';
import AdminDetailsComponent from './component/AdminDetailsComponent';
import {
  createSocialLinkAction,
  deleteSocialLinkAction,
  editColorAction,
  editNameAction,
  editProfileAction,
  editSocialLinkAction,
} from '../../store/actions/AdminActions';
import { logout } from '../../store/actions/authActions';
import { createMessageAction } from '../../store/actions/MessageActions';
export default function NavComponent() {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.colors);
  const { name, title, isAdmin, profilePath } = useSelector(
    (state) => state.admin
  );
  const socialLinks = useSelector((state) => state.admin.socialLinks);
  const [isNavToogle, setNavToogle] = useState(false);

  const profileImageSubmitHandler = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      await dispatch(editProfileAction(values.path));
      dispatch(createMessageAction('Successfully Changed', 'warning'));
      setSubmitting(false);
    } catch (error) {
      dispatch(createMessageAction('Something Went Wrong!', 'error'));
      setSubmitting(false);
    }
  };

  const colorSubmitHandler = async (name, value) => {
    try {
      await dispatch(editColorAction(name, value));
      dispatch(createMessageAction('Successfully Changed', 'warning'));
    } catch (error) {
      dispatch(createMessageAction('Something Went Wrong!', 'error'));
    }
  };
  const adminDetailSubmitHandler = async (values) => {
    try {
      const { name, title } = values;
      await dispatch(editNameAction(name, title));
      dispatch(createMessageAction('Successfully Changed', 'warning'));
    } catch (error) {
      dispatch(createMessageAction('Something Went Wrong!', 'error'));
    }
  };
  const socialSubmitHandler = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      await dispatch(createSocialLinkAction(values));
      dispatch(createMessageAction('Successfully Created', 'warning'));
      setSubmitting(false);
    } catch (error) {
      dispatch(createMessageAction('Something Went Wrong!', 'error'));
      setSubmitting(false);
    }
  };
  const socialUpdateHandler = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      await dispatch(editSocialLinkAction(values));
      dispatch(createMessageAction('Successfully Updated', 'warning'));
      setSubmitting(false);
    } catch (error) {
      dispatch(createMessageAction('Something Went Wrong!', 'error'));
      setSubmitting(false);
    }
  };
  const socialDeleteHandler = async (id) => {
    const isConfirm = window.confirm('Are you sure?');
    if (!isConfirm) return;
    try {
      await dispatch(deleteSocialLinkAction(id));
      dispatch(createMessageAction('Successfully Deleted', 'warning'));
    } catch (error) {
      dispatch(createMessageAction('Something Went Wrong!', 'error'));
    }
  };
  const logoutHandler = () => {
    const isConfirm = window.confirm('Are you sure?');
    if (!isConfirm) {
      return;
    }
    dispatch(logout());
  };
  const links = [
    {
      name: 'About',
      path: '/Portfolio_v3/',
      icon: BsFillPersonFill,
    },
    {
      name: 'Education',
      path: '/Portfolio_v3/educations',
      icon: BiBookAlt,
    },
    {
      name: 'Skills',
      path: '/Portfolio_v3/skills',
      icon: BiCube,
    },
    {
      name: 'Projects',
      path: '/Portfolio_v3/projects',
      icon: FaProjectDiagram,
    },
    {
      name: 'Contact',
      path: '/Portfolio_v3/contacts',
      icon: BiMessageRoundedDots,
    },
  ];
  const navContainerStyle = {
    backgroundColor: colors.primary,
    color: colors.navText,
  };
  let linksContainer = (
    <div className={style.linkWraper}>
      <LinksComponent
        links={links}
        colors={colors}
        logoutHandler={logoutHandler}
        isAdmin={isAdmin}
      />
      <SocialLinksComponent
        socialLinks={socialLinks}
        isAdmin={isAdmin}
        colors={colors}
        updateHandler={socialUpdateHandler}
        submitHandler={socialSubmitHandler}
        deleteHandler={socialDeleteHandler}
      />
    </div>
  );
  return (
    <div className={style.navMainContainer}>
      <div className={style.navContainer} style={navContainerStyle}>
        <div className={style.firstChild}>
          <ImageComponent
            colors={colors}
            image={profilePath}
            isAdmin={isAdmin}
            colorSubmitHandler={colorSubmitHandler}
            submitHandler={profileImageSubmitHandler}
          />
          <AdminDetailsComponent
            colors={colors}
            name={name}
            title={title}
            isAdmin={isAdmin}
            submitHandler={adminDetailSubmitHandler}
          />
          <div></div>
        </div>

        <div className={style.links}>{linksContainer}</div>
        <FiMenu
          color={colors.navText}
          size={20}
          className={style.menuToogle}
          onClick={() => setNavToogle((e) => !e)}
        />
      </div>

      {isNavToogle && (
        <div
          className={style.minLinks}
          style={{ backgroundColor: colors.primary }}>
          {linksContainer}
        </div>
      )}
    </div>
  );
}
