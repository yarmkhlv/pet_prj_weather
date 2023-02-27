import React from 'react';
import { Link } from 'react-router-dom';
import './style_menu_link.css';

function MenuLink(props) {
  const { text, path, state } = props;
  const disabledClass = state ? '' : 'link-disabled';
  return (
    <Link className={`menu-link ${disabledClass}`} to={path}>
      {text}
    </Link>
  );
}

export default MenuLink;
