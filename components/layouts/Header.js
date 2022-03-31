import React, { useContext } from 'react';
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/dist/client/link';
import Head from 'next/head';
import styled from '@emotion/styled';
import Boton from '../ui/Boton';
import { FirebaseContext } from '../../firebase';

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media(min-width:768px) {
        display: flex;
        justify-content: space-between;    
    }
`
const Logo = styled.p`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
    &:hover {
        cursor: pointer;
    }
`
 const Header = () => {

    const { usuario, firebase } = useContext(FirebaseContext);
     return (
         <> 
            <header className='header'>
                <ContenedorHeader>
                    <div className="divContenedor">
                        <Link href="/">
                             <Logo>P</Logo>
                        </Link>
                        
                        <Buscar/>

                        <Navegacion/>
                    </div>

                    <div className='divBoton'>
                        { usuario ? (
                            <>
                                <p className='pBoton'>Hola: {usuario.displayName}</p>

                                <Boton 
                                bgColor="true"
                                onClick={() => firebase.CerrarSesion() }
                                >Cerrar Sesión</Boton>
                            </>
                        ) : (
                            <>
                                 <Link href="/login">
                                <Boton bgColor="true">Login</Boton>
                                </Link>
                                <Link href="/crear-cuenta">
                                    <Boton>Crear Cuenta</Boton>
                                </Link> 
                            </>
                        )}
                    </div>
                    <Head>
                         <link href="/static/css/appHeader.css" rel="stylesheet"/>
                    </Head>
                </ContenedorHeader>
            </header>

         </>
       );
 }
  
 export default Header;