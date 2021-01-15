import React, {Fragment} from "react";
import App from 'next/app';
import Head from 'next/head'
import "../style/orbit.scss"

class CVApp extends App {
    render() {
        const title = 'Ricky Nguyễn';
        const site = 'https://cv.kikiguru.com';
        const description = "A senior full-stack developer with 8 years of work experience in software development"
        const avatar = 'https://s.gravatar.com/avatar/5a2181af432f7e87e8d505a17dd5254b?s=180';
        const {Component, pageProps} = this.props;
        return (
            <Fragment>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description}/>
                    <meta property="og:site_name" content={title}/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content={title}/>
                    <meta property="og:description" content="Senior full-stack developer"/>
                    <meta property="og:url" content={site}/>
                    <meta property="og:image"
                          content={avatar}/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:title" content={title}/>
                    <meta name="twitter:description" content={description}/>
                    <meta name="twitter:url" content={site}/>
                    <meta name="twitter:image"
                          content={avatar}/>
                    <meta name="twitter:site" content={site}/>
                    <link rel="canonical" href={site}/>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                </Head>
                <Component {...pageProps} />
            </Fragment>
        );
    }
}

export default CVApp;