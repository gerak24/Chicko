import React from 'react';
import styles from './Layout.module.scss'


const Layout = ({children}) => {
    return (
        <body className={styles.layout_color}>
            {children}
        </body>
    );
};

export default Layout;