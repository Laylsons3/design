import React from 'react';

import Api from './Api';

export default function login() {
  const actionLoginGoogle = async () => {
    let result = Api.googleLogar();

    if (result) {

    } else {
      alert('Error');
    }
  }

    return (
      <div style={{textAlign:'center',marginTop:'5px'}}>
          <div>
          <h1>Login</h1>
            <div style={{marginTop:'50px'}}>
                Login:<input></input><br />
                Senha:<input type="password"></input><br />
                <button>Entrar</button><br />

                Entrar com o <button>Google</button>
            </div>
          </div>
      </div>
    );
  }