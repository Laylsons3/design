import { useState } from 'react'

function Home() {
    const [nomeCandidato, setNomeCandidato] = useState('Candidato');
    const [numeroCandidato, setNumeroCandidato] = useState('01234');
    const [info, setInfo] = useState('');
    const [image, setImage] = useState('');
    const [endImg, setEndImg] = useState('');
    const [status, setStatus] = useState('');

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

                    <div className="modelo-estilo">
                    <img src="teste1.png" />
                    </div>

                    <div className="modelo-estilo">
                    <img src="teste5.png" />                       
                    </div>


                </div>




                <div className="main">
                    <div className="principal">
                        <div className="foto">
                        {image ? <img className='foto-base' src={URL.createObjectURL(image)} alt="Imagem" width="150" height="150" /> : <img style={{filter:'grayscale(100%)'}} className='foto-base' src="foto-teste.png" alt="Imagem" width="150" height="150" />}
                            

                            <div className="cargo">
                                Deputado Estadual
                            </div>

                            <div className="nome-candidato">
                                {nomeCandidato}
                            </div>
                            
                            <div className="numero-candidato">
                                {numeroCandidato}
                            </div>

                            <div className='logo-partido'>
                                <img src="/logo-partidos/15.png" />
                            </div>

                            <div className='info'>
                                {info}
                            </div>

                        </div>

                    </div>
                    <div className="menu">


                        


                        <div className="dados-candidato">

                        <input 
                        className='input-nome'
                        onChange={e => setNomeCandidato(e.target.value)}
                        placeholder="Nome do candidato" 
                        type="text" />

                        <input 
                        className='input-numero'
                        onChange={e => setNumeroCandidato(e.target.value)}
                        placeholder="Número" 
                        type="text" />

                        <textarea 
                        rows="4"
                        className='input-info'
                        onChange={e => setInfo(e.target.value)}
                        placeholder="Informações de rodapé" 
                        type="text"
                        maxLength="50"
                        />
                        </div>

                        <div className='setup'>
                            <h5>CONFIGURAÇÃO</h5>

                            <span>Cor: NÚMERO</span>
                            <input style={{transform:'scale(.8)'}} type="color" />
                            

                            <span>Tamanho da imagem</span>
                            <input disabled type="range" />

                            <span>Tamanho da fonte: CARGO</span>
                            <input disabled type="range" />

                            <span>Tamanho da fonte: NOME</span>
                            <input disabled type="range" />

                            <span>Tamanho da fonte: NÚMERO</span>
                            <input disabled type="range" />


                        </div>

                        <input
                            type="file" 
                            name="image"
                            onChange={e => setImage(e.target.files[0])}
                            />

                            

                        <button style={{margin:'5px'}}>Salvar</button>


                        
                        


                    </div>
        
                </div>
                

            </div>

        </div>

    )
}

export default Home