import React from 'react';
// import { Global, css } from '@emotion/react';
import Header from './Header';
import Head from 'next/head';

const Layout = props => {
    return ( 
        <>
            <Head>
                <html lang='es'/>
                <title>Product Hunt Firebase and Next.js</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto+Slab:400,700&display=swap" rel="stylesheet"/>
                <link href="/static/css/app.css" rel="stylesheet"/>
                <link href="/static/css/style.css" rel="stylesheet"/>
            </Head>
            <Header/>
            <main>
                {props.children}
            </main>
        </>
     );
}
 
export default Layout;