import React from 'react';
import { Link } from 'react-router-dom';
import './style_header_link.css';

function HeaderLink(props) {
  const { text, path } = props;
  return (
    <Link className="header-link" to={path}>
      {text}
    </Link>
  );
}

export default HeaderLink;
