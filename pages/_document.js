import Document, {Head, Main, NextScript} from 'next/document';
import React from 'react';

class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
            <Head>
                <meta charSet="utf-8"/>
                {/* Use minimum-scale=1 to enable GPU rasterization */}
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
                      integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Roboto&display=swap" rel="stylesheet" />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>);
    }
}

export default MyDocument;