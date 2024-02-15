import React, { useEffect, useState } from 'react';
import Sidebar from './AdminSidebar';
import styles from './dashboard.module.css';
import Navbar from './navbar/navbar';

const Layout = ({ children }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (children instanceof Promise) {
      children.then((resolvedContent) => {
        setContent(resolvedContent);
      }).catch((error) => {
        console.error('Error loading content:', error);
        setContent(null);
      });
    } else {
      setContent(children);
    }
  }, [children]);

  return (
    <div>


    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {content !== null ? content : <p>Loading...</p>}
        {/* <Footer /> */}
      </div>
    </div>
    </div>
  );
};

export default Layout;
