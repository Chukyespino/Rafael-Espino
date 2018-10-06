import React from 'react';
import { Link } from 'gatsby';
import styles from './layout.module.css';


const ListLink = (props) => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);


export default ({children}) => (
  <div className={styles.outer}>
  <header>
    <Link to="/">
      <h1 className={styles.homeLink}>VS Code Extensions</h1>
    </Link>
  <ul>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/about/">About</ListLink>
    <ListLink to="contact/">Contact</ListLink>
  </ul>
  </header>
    <div className={styles.inner}>
      {children}
    </div>
  </div>
);