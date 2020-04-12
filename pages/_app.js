import React from "react";
import App from 'next/app';
import "../style/orbit.scss"

class CVApp extends App {
    render() {
        const {Component, pageProps} = this.props;
        return (
            <Component {...pageProps} />
        );
    }
}

export default CVApp;