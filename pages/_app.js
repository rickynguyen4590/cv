import React, {Fragment} from "react";
import App from 'next/app';
import Head from 'next/head'
import "../style/orbit.scss"

class CVApp extends App {
    render() {
        const {Component, pageProps} = this.props;
        return (
            <Fragment>
                <Head>
                    <title>Ricky Nguyễn</title>
                </Head>
                <Component {...pageProps} />
            </Fragment>
        );
    }
}

export default CVApp;