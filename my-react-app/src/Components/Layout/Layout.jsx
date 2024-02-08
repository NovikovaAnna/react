import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx"
import propTypes, { string } from 'prop-types';
import React, { Fragment } from 'react';

export default function Layout({children, className}) {
    return (
        <Fragment>
            <Header />
            <main className={className}>
                {children}
            </main>
            <Footer />
        </Fragment>
    )
}

Layout.propTypes = {
    children: propTypes.node,
    className: string
};