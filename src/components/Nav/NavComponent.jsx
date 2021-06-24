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
  const [isNavToogle, setNavToogle] = useState(false);
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
  const socialLinks = [
    {
      name: 'Facebook',
      icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZS8+PGcgZGF0YS1uYW1lPSJmYWNlYm9vayBmYiBmYWNlIGJvb2siIGlkPSJmYWNlYm9va19mYl9mYWNlX2Jvb2siPjxwYXRoIGQ9Ik0yNCwzSDhBNSw1LDAsMCwwLDMsOFYyNGE1LDUsMCwwLDAsNSw1aDhhMSwxLDAsMCwwLDEtMVYyMGExLDEsMCwwLDAtMS0xSDE1VjE3aDFhMSwxLDAsMCwwLDEtMVYxMi41QTIuNSwyLjUsMCwwLDEsMTkuNSwxMEgyMnYySDIxYTIsMiwwLDAsMC0yLDJ2MmExLDEsMCwwLDAsMSwxaDEuNzJsLS41LDJIMjBhMSwxLDAsMCwwLTEsMXY0YTEsMSwwLDAsMCwyLDBWMjFoMWExLDEsMCwwLDAsMS0uNzZsMS00YTEsMSwwLDAsMC0uMTgtLjg2QTEsMSwwLDAsMCwyMywxNUgyMVYxNGgyYTEsMSwwLDAsMCwxLTFWOWExLDEsMCwwLDAtMS0xSDE5LjVBNC41MSw0LjUxLDAsMCwwLDE1LDEyLjVWMTVIMTRhMSwxLDAsMCwwLTEsMXY0YTEsMSwwLDAsMCwxLDFoMXY2SDhhMywzLDAsMCwxLTMtM1Y4QTMsMywwLDAsMSw4LDVIMjRhMywzLDAsMCwxLDMsM1YyNGEzLDMsMCwwLDEtMywzSDIwYTEsMSwwLDAsMCwwLDJoNGE1LDUsMCwwLDAsNS01VjhBNSw1LDAsMCwwLDI0LDNaIi8+PC9nPjwvc3ZnPg==',
      link: 'https://www.facebook.com/bbek2059/',
    },
    {
      name: 'Github',
      icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMTE2MyAxNjU3LjY5NyA1Ni42OTMgNTYuNjkzIiBoZWlnaHQ9IjU2LjY5M3B4IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSItMTE2MyAxNjU3LjY5NyA1Ni42OTMgNTYuNjkzIiB3aWR0aD0iNTYuNjkzcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTS0xMTM0LjY1OTgsMTY2Mi45MTYzYy0xMy42MDEsMC0yNC42MywxMS4wMjY3LTI0LjYzLDI0LjYyOTkgICBjMCwxMC44ODIxLDcuMDU3MywyMC4xMTQ0LDE2Ljg0MzUsMjMuMzcxM2MxLjIzMDgsMC4yMjc5LDEuNjgyOS0wLjUzNDUsMS42ODI5LTEuMTg0OWMwLTAuNTg3LTAuMDIyNy0yLjUyNzYtMC4wMzM0LTQuNTg1NyAgIGMtNi44NTIxLDEuNDkwMS04LjI5NzktMi45MDYtOC4yOTc5LTIuOTA2Yy0xLjEyMDUtMi44NDY3LTIuNzM0Ny0zLjYwMzktMi43MzQ3LTMuNjAzOSAgIGMtMi4yMzQ5LTEuNTI4NywwLjE2ODUtMS40OTcyLDAuMTY4NS0xLjQ5NzJjMi40NzMsMC4xNzM3LDMuNzc1NSwyLjUzODUsMy43NzU1LDIuNTM4NWMyLjE5NjcsMy43NjUxLDUuNzYxOCwyLjY3NjUsNy4xNjc1LDIuMDQ3MiAgIGMwLjIyMTEtMS41OTE3LDAuODU5MS0yLjY3ODYsMS41NjM3LTMuMjkzNmMtNS40NzA3LTAuNjIyNi0xMS4yMjE4LTIuNzM0Ny0xMS4yMjE4LTEyLjE3MjJjMC0yLjY4ODgsMC45NjIzLTQuODg2MSwyLjUzOC02LjYxMSAgIGMtMC4yNTU3LTAuNjIwNi0xLjA5ODktMy4xMjU1LDAuMjM4Ni02LjUxODNjMCwwLDIuMDY4NC0wLjY2MTYsNi43NzQ3LDIuNTI1YzEuOTY0OC0wLjU0NTgsNC4wNzE5LTAuODE5NSw2LjE2NS0wLjgyOSAgIGMyLjA5MywwLjAwOTUsNC4yMDE3LDAuMjgzMiw2LjE3LDAuODI5YzQuNzAxMi0zLjE4NjYsNi43NjY1LTIuNTI1LDYuNzY2NS0yLjUyNWMxLjM0MDYsMy4zOTI4LDAuNDk3NCw1Ljg5NzcsMC4yNDE3LDYuNTE4MyAgIGMxLjU3OTMsMS43MjQ5LDIuNTM0OCwzLjkyMjEsMi41MzQ4LDYuNjExYzAsOS40NjAyLTUuNzYxOCwxMS41NDI4LTExLjI0NjUsMTIuMTUyN2MwLjg4MzQsMC43NjQ0LDEuNjcwNCwyLjI2MzIsMS42NzA0LDQuNTYxICAgYzAsMy4yOTU1LTAuMDI4Miw1Ljk0NzktMC4wMjgyLDYuNzU5MmMwLDAuNjU1NiwwLjQ0MzIsMS40MjM2LDEuNjkxNSwxLjE4MThjOS43ODEyLTMuMjYwNSwxNi44Mjk2LTEyLjQ4OTYsMTYuODI5Ni0yMy4zNjgyICAgQy0xMTEwLjAyOTksMTY3My45NDMtMTEyMS4wNTc0LDE2NjIuOTE2My0xMTM0LjY1OTgsMTY2Mi45MTYzeiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTS0xMTQ5Ljk2MTEsMTY5OC4yNzkzYy0wLjA1NDIsMC4xMjI3LTAuMjQ2OSwwLjE1OTMtMC40MjIyLDAuMDc1M2MtMC4xNzg4LTAuMDgwNC0wLjI3ODgtMC4yNDczLTAuMjIxMS0wLjM3ICAgYzAuMDUzLTAuMTI2LDAuMjQ1Ny0wLjE2MSwwLjQyNDItMC4wNzY5Qy0xMTUwLjAwMTMsMTY5Ny45ODgyLTExNDkuODk5MywxNjk4LjE1NjYtMTE0OS45NjExLDE2OTguMjc5M0wtMTE0OS45NjExLDE2OTguMjc5M3ogICAgTS0xMTUwLjI2NDIsMTY5OC4wNTQ3Ii8+PHBhdGggZD0iTS0xMTQ4Ljk2MzQsMTY5OS4zOTIyYy0wLjExNzQsMC4xMDg2LTAuMzQ3MywwLjA1ODEtMC41MDMxLTAuMTEzOWMtMC4xNjEzLTAuMTcxOC0wLjE5MTItMC40MDE2LTAuMDcyLTAuNTExOCAgIGMwLjEyMTEtMC4xMDg4LDAuMzQzOC0wLjA1NzksMC41MDUsMC4xMTM5Qy0xMTQ4Ljg3MjEsMTY5OS4wNTQxLTExNDguODQwNywxNjk5LjI4MTktMTE0OC45NjM0LDE2OTkuMzkyMkwtMTE0OC45NjM0LDE2OTkuMzkyMnogICAgTS0xMTQ5LjE5ODQsMTY5OS4xNCIvPjxwYXRoIGQ9Ik0tMTE0Ny45OTIyLDE3MDAuODEwNWMtMC4xNTEsMC4xMDUxLTAuMzk3OSwwLjAwNjctMC41NTA1LTAuMjEyM2MtMC4xNTEtMC4yMTkxLTAuMTUxLTAuNDgxOSwwLjAwMzUtMC41ODcyICAgYzAuMTUyNi0wLjEwNTEsMC4zOTYtMC4wMTA0LDAuNTUwNSwwLjIwNjhDLTExNDcuODM4MSwxNzAwLjQ0MDYtMTE0Ny44MzgxLDE3MDAuNzAzNC0xMTQ3Ljk5MjIsMTcwMC44MTA1TC0xMTQ3Ljk5MjIsMTcwMC44MTA1eiAgICBNLTExNDcuOTkyMiwxNzAwLjgxMDUiLz48cGF0aCBkPSJNLTExNDYuNjYxOSwxNzAyLjE4MTJjLTAuMTM1MSwwLjE0ODktMC40MjI3LDAuMTA4Ni0wLjYzMjktMC4wOTQ1Yy0wLjIxNTUtMC4xOTg0LTAuMjc1My0wLjQ4MDMtMC4xNDAzLTAuNjI5MyAgIGMwLjEzNzEtMC4xNDksMC40MjYzLTAuMTA3MiwwLjYzODEsMC4wOTQ0Qy0xMTQ2LjU4MzEsMTcwMS43NTAxLTExNDYuNTE4MiwxNzAyLjAzMzctMTE0Ni42NjE5LDE3MDIuMTgxMkwtMTE0Ni42NjE5LDE3MDIuMTgxMnogICAgTS0xMTQ2LjY2MTksMTcwMi4xODEyIi8+PHBhdGggZD0iTS0xMTQ0LjgyNjUsMTcwMi45NzY5Yy0wLjA1OTcsMC4xOTI3LTAuMzM2NSwwLjI4MDQtMC42MTU0LDAuMTk4NGMtMC4yNzg4LTAuMDg0NS0wLjQ2MDgtMC4zMTAzLTAuNDA0Ny0wLjUwNTEgICBjMC4wNTc3LTAuMTk0MywwLjMzNjEtMC4yODU1LDAuNjE2OS0wLjE5NzlDLTExNDQuOTUxMiwxNzAyLjU1NjMtMTE0NC43Njg4LDE3MDIuNzgwNS0xMTQ0LjgyNjUsMTcwMi45NzY5TC0xMTQ0LjgyNjUsMTcwMi45NzY5eiAgICBNLTExNDQuODI2NSwxNzAyLjk3NjkiLz48cGF0aCBkPSJNLTExNDIuODEwNywxNzAzLjEyNDNjMC4wMDY3LDAuMjAzMS0wLjIyOTksMC4zNzE2LTAuNTIyNiwwLjM3NTJjLTAuMjk0NCwwLjAwNjctMC41MzMtMC4xNTc3LTAuNTM2MS0wLjM1NzcgICBjMC0wLjIwNTIsMC4yMzEzLTAuMzcxNywwLjUyNTgtMC4zNzY4Qy0xMTQzLjA1MDksMTcwMi43NTk0LTExNDIuODEwNywxNzAyLjkyMjctMTE0Mi44MTA3LDE3MDMuMTI0M0wtMTE0Mi44MTA3LDE3MDMuMTI0M3ogICAgTS0xMTQyLjgxMDcsMTcwMy4xMjQzIi8+PHBhdGggZD0iTS0xMTQwLjkzNTEsMTcwMi44MDUyYzAuMDM1LDAuMTk4LTAuMTY4NiwwLjQwMTUtMC40NTk0LDAuNDU1N2MtMC4yODU5LDAuMDUyNi0wLjU1MDQtMC4wNzAxLTAuNTg3LTAuMjY2NSAgIGMtMC4wMzU0LTAuMjAzMSwwLjE3MTYtMC40MDY2LDAuNDU3My0wLjQ1OTJDLTExNDEuMjMzLDE3MDIuNDg0Ni0xMTQwLjk3MjIsMTcwMi42MDM2LTExNDAuOTM1MSwxNzAyLjgwNTJMLTExNDAuOTM1MSwxNzAyLjgwNTJ6ICAgIE0tMTE0MC45MzUxLDE3MDIuODA1MiIvPjwvZz48L3N2Zz4=',
      link: 'https://github.com/bibekshrestha02',
    },
    {
      icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1Ni43IDU2LjciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU2LjcgNTYuNyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI4LjIsMTYuN2MtNywwLTEyLjgsNS43LTEyLjgsMTIuOHM1LjcsMTIuOCwxMi44LDEyLjhTNDEsMzYuNSw0MSwyOS41UzM1LjIsMTYuNywyOC4yLDE2Ljd6IE0yOC4yLDM3LjcKCQljLTQuNSwwLTguMi0zLjctOC4yLTguMnMzLjctOC4yLDguMi04LjJzOC4yLDMuNyw4LjIsOC4yUzMyLjcsMzcuNywyOC4yLDM3Ljd6Ii8+Cgk8Y2lyY2xlIGN4PSI0MS41IiBjeT0iMTYuNCIgcj0iMi45Ii8+Cgk8cGF0aCBkPSJNNDksOC45Yy0yLjYtMi43LTYuMy00LjEtMTAuNS00LjFIMTcuOWMtOC43LDAtMTQuNSw1LjgtMTQuNSwxNC41djIwLjVjMCw0LjMsMS40LDgsNC4yLDEwLjdjMi43LDIuNiw2LjMsMy45LDEwLjQsMy45CgkJaDIwLjRjNC4zLDAsNy45LTEuNCwxMC41LTMuOWMyLjctMi42LDQuMS02LjMsNC4xLTEwLjZWMTkuM0M1MywxNS4xLDUxLjYsMTEuNSw0OSw4Ljl6IE00OC42LDM5LjljMCwzLjEtMS4xLDUuNi0yLjksNy4zCgkJcy00LjMsMi42LTcuMywyLjZIMThjLTMsMC01LjUtMC45LTcuMy0yLjZDOC45LDQ1LjQsOCw0Mi45LDgsMzkuOFYxOS4zYzAtMywwLjktNS41LDIuNy03LjNjMS43LTEuNyw0LjMtMi42LDcuMy0yLjZoMjAuNgoJCWMzLDAsNS41LDAuOSw3LjMsMi43YzEuNywxLjgsMi43LDQuMywyLjcsNy4yVjM5LjlMNDguNiwzOS45eiIvPgo8L2c+Cjwvc3ZnPgo=',
      link: 'https://www.instagram.com/bbkshrestha/',
      name: 'insta',
    },
  ];
  const navContainerStyle = {
    backgroundColor: colors.primary,
    color: colors.navText,
  };
  let linksContainer = (
    <>
      <LinksComponent links={links} colors={colors} />
      <SocialLinksComponent
        socialLinks={socialLinks}
        isAdmin={isAdmin}
        colors={colors}
      />
    </>
  );
  return (
    <div className={style.navMainContainer}>
      <div className={style.navContainer} style={navContainerStyle}>
        <ImageComponent
          colors={colors}
          image='./profile.jpg'
          isAdmin={isAdmin}
        />
        <AdminDetailsComponent
          colors={colors}
          name={name}
          title={title}
          isAdmin={isAdmin}
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
