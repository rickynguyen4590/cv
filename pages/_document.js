import Document, {Head, Html, Main, NextScript} from 'next/document';
import React from 'react';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
            <Head>
                <meta charSet="utf-8"/>
                {/* Use minimum-scale=1 to enable GPU rasterization */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
                      integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Roboto&display=swap" rel="stylesheet" />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-0QNC50F54M"/>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-0QNC50F54M');
        `,
                }}
            />
            </body>
            </Html>);
    }
}

export default MyDocument;