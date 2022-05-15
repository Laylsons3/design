import { useState } from 'react'

function Home() {
    const [nomeCandidato, setNomeCandidato] = useState('');
    const [numeroCandidato, setNumeroCandidato] = useState('');

    console.log(nomeCandidato);

    return(
        <div>
            <div className="body">
                <div className="cabecalho">
                    <h1>Design online</h1>
                    
                </div>
                <div className="estilos">
                    
                    <div className="modelo-estilo">
                    <img src="teste1.png" />


                    </div>
                    <div className="modelo-estilo">
                    <img src="teste2.png" />

                        
                    </div>
                    <div className="modelo-estilo">
                    <img src="teste3.png" />
                        
                        <img className="premium" src="estrela.png" />
                    </div>
                    <div className="modelo-estilo">
                    <img src="teste4.png" />

                        
                    </div>
                    <div className="modelo-estilo">
                    <img src="teste5.png" />

                        
                    </div>
                    <div className="modelo-estilo">
                    <img src="teste6.png" />

                        
                        <img className="premium" src="estrela.png" />

                    </div>
                    <div className="modelo-estilo">
                    <img src="teste7.png" />

                        
                        <img className="premium" src="estrela.png" />

                    </div>
                    <div className="modelo-estilo">
                    <img src="teste8.png" />

                        
                    </div>
                    <div className="modelo-estilo">
                    <img src="teste9.png" />

                        
                        <img className="premium" src="estrela.png" />

                    </div>
                    <div className="modelo-estilo">
                    <img src="teste10.png" />

                        
                    </div>

                </div>

                <div className="dados-candidato">

                <input 
                onChange={e => setNomeCandidato(e.target.value)}
                placeholder="Nome do candidato" 
                type="text" />

                <input 
                onChange={e => setNumeroCandidato(e.target.value)}
                placeholder="Número" 
                type="text" />

                </div>
                <div className="main">
                    <div className="principal">
                        <div className="foto">
                            <img src="foto-teste.png"></img>

                            <div className="nome-candidato">
                                {nomeCandidato}
                            </div>
                            
                            <div className="numero-candidato">
                                {numeroCandidato}
                            </div>

                        </div>

                    </div>
                    <div className="menu">


                        
                        <span>Configuração</span>

                        <input type="range" />


                        
                        


                    </div>

                </div>


            </div>

        </div>

    )
}

export default Home