import React, { useState } from 'react';
import Logo from "./img/logo.png"
import Perfil from "./img/p2.png"


function App() {

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }

  return (
    <div className="container-fluid">
      <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Certidões Católicas" />
      </div>
      <div className="user-actions">
        <img src={Perfil} alt="Acesso Restrito"  />
      </div>
    </nav>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mt-4">
            <div className="card-header">
              <h3>Envio de Certidão</h3>
            </div>

            <div className="card-body">

              <form>
                <input type="file" onChange={handleChange}/>
                  <div class="container">
                    <div class="wrapper">
                      <a href="#"><span>Enviar Certidão</span></a>
                    </div>
                  </div>
              </form>
              
            </div>

            <div className="card-header">
              <a href="#"><span>Voltar</span></a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default App;