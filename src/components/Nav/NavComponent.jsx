import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './style.module.scss';
import LinksComponent from './component/LinksComponent';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiCube, BiBookAlt, BiMessageRoundedDots } from 'react-icons/bi';
import { FaProjectDiagram } from 'react-icons/fa';
import SocialLinksComponent from './component/SocialLinksComponent';
import ImageComponent from './component/ImageComponent';
import AdminDetailsComponent from './component/AdminDetailsComponent';
import { FiMenu } from 'react-icons/fi';
export default function NavComponent() {
  const colors = useSelector((state) => state.colors);
  const { name, title, isAdmin } = useSelector((state) => state.admin);
  const socialLinks = useSelector((state) => state.admin.socialLinks);
  const [isNavToogle, setNavToogle] = useState(false);

  const profileImageSubmitHandler = () => {
    return;
  };
  const colorSubmitHandler = () => {
    return;
  };
  const adminDetailSubmitHandler = () => {
    return;
  };
  const socailSubmitHandler = () => {
    return;
  };
  const socailUpdateHandler = () => {
    return;
  };
  const socailDeleteHandler = () => {
    return;
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
      <LinksComponent links={links} colors={colors} />
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
          image='./profile.jpg'
          isAdmin={isAdmin}
          colorSubmitHandler={colorSubmitHandler}
          profileImageSubmitHandler={profileImageSubmitHandler}
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
