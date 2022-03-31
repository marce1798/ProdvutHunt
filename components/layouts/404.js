import React from 'react';
import Head from 'next/head';
const Error404 = () => {
    return ( 
        <>
            <h1
                className='h1CrearCuentaPage'
            >No se puede mostrar
             </h1> 
            <Head>
                <link href="/static/css/appCrearCuentaPage.css" rel="stylesheet"/>
            </Head>
        </>
    );
}
 
export default Error404;