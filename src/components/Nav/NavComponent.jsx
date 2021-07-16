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
export default function NavComponent() {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.colors);
  const { name, title, isAdmin, profilePath } = useSelector(
    (state) => state.admin
  );
  const socialLinks = useSelector((state) => state.admin.socialLinks);
  const [isNavToogle, setNavToogle] = useState(false);

  const profileImageSubmitHandler = (values) => {
    dispatch(editProfileAction(values.path));
  };
  const colorSubmitHandler = (values) => {
    dispatch(editColorAction(values));
    return;
  };
  const adminDetailSubmitHandler = (values) => {
    dispatch(editNameAction(values.name, values.title));
  };
  const socailSubmitHandler = (values) => {
    dispatch(createSocialLinkAction(values));
    return;
  };
  const socailUpdateHandler = (values) => {
    dispatch(editSocialLinkAction(values));
  };
  const socailDeleteHandler = (id) => {
    const isConfirm = window.confirm('Are you sure?');
    if (!isConfirm) return;
    dispatch(deleteSocialLinkAction(id));
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
      path: '/',
      icon: BsFillPersonFill,
    },
    {
      name: 'Education',
      path: '/educations',
      icon: BiBookAlt,
    },
    {
      name: 'Skills',
      path: '/skills',
      icon: BiCube,
    },
    {
      name: 'Projects',
      path: '/projects',
      icon: FaProjectDiagram,
    },
    {
      name: 'Contact',
      path: '/contacts',
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
        updateHandler={socailUpdateHandler}
        submitHandler={socailSubmitHandler}
        deleteHandler={socailDeleteHandler}
      />
    </div>
  );
  return (
    <div className={style.navMainContainer}>
      <div className={style.navContainer} style={navContainerStyle}>
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
