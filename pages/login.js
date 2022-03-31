import React, { useState } from 'react';
import Layout from '../components/layouts/Layout'
import Router from 'next/router';
import { Formulario, Campo, InputSubmit, Error} from '../components/ui/Formulario'
import Head from 'next/head';

import firebase from '../firebase';

//validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validarIniciarSesion';

const STATE_INICIAL = {
  email: '',
  password: ''
}

const Login = () => {

  const [ error, guardarError] = useState(false);

  const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarCrearCuenta, iniciarSesion);

  const {  email, password } = valores;

  async function iniciarSesion() {
    try {
      await firebase.login(email, password);
      Router.push('/');
    } catch (error) {
      console.error('Hubo un error al autenticar el usuario ', error.message);
      guardarError(error.message);
    }
  }

  return(
   <div>
      <Layout>
        <>
          <h1 className='h1CrearCuentaPage'>Iniciar Sesión</h1>
          <Formulario onSubmit={handleSubmit}>

              {errores.nombre && <Error>{errores.nombre}</Error> }

              <Campo>
                  <label htmlFor='email'>Email</label>
                  <input
                      type="email"
                      id="email"
                      placeholder="Tu Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Campo>

              {errores.email && <Error>{errores.email}</Error> }

              <Campo>
                  <label htmlFor='password'>Password</label>
                  <input
                      type="password"
                      id="password"
                      placeholder="Tu Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Campo>
                {errores.password && <Error>{errores.password}</Error> }

                {error && <Error>{error} </Error>}
              <InputSubmit 
                type="submit" 
                value="Iniciar Sesión"
              />
          </Formulario>
        </>
        <Head>
            <link href="/static/css/appCrearCuentaPage.css" rel="stylesheet"/>
        </Head>
      </Layout>
    </div>
  )
}

export default Login