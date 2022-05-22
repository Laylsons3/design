import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import Atalhos from '../components/Atalhos';
import { Popover } from '@headlessui/react';

function Home() {
    const [nomeCandidato, setNomeCandidato] = useState('Candidato');
    const [numeroCandidato, setNumeroCandidato] = useState('01.234');
    const [info, setInfo] = useState('');
    const [image, setImage] = useState('');
    const [cor, setCor] = useState('#00A550'); // COR DO NUMERO DO CANDIDATO
    const [tamanhoNumero, setTamanhoNumero] = useState('75');
    const [tamanhoNome, setTamanhoNome] = useState('28');
    const [cargo, setCargo] = useState('Deputado Estadual');
    const [numero, setNumero] = useState('');
    const [opacidadeLogo, setOpacidadeLogo] = useState('100');
    const path = `/logo-partidos/${numero}.png`
    
    const handleClick = (e) => {e.target.select();};  // PEGA O HEXADECIMAL DO INPUT COLOR



    return(
        <div>
            <div className="body">
                <div className="cabecalho">

                    <div className='container-cabecalho'>
                        <h1>Design online</h1>
                        <div className='menu-1'>
                            <Link className='link' href="/DesignerList"><a>Sou um Designer</a></Link>
                            <a>Contratar Designer</a>
                        </div>
                    </div>
                    <div className='menu-p'>
                        <div>
                            <a>INICIO</a>
                            <a>TUTORIAIS</a>
                            <a>SOBRE</a>
                            <a>CONTATO</a>
                            <a>DÚVIDAS</a>
                        </div>

                    </div>

                </div>

                {/* <Atalhos /> */}

                <div className="main">

                    <div className='esquerda-dados'>

                    <div className='dados-candidato'>
                    <input 
                        className='input-nome'
                        onChange={e => setNomeCandidato(e.target.value)}
                        placeholder="Nome do candidato" 
                        type="text" />

                        <input 
                        className='input-numero'
                        onChange={e => setNumeroCandidato(e.target.value)}
                        placeholder="Número"
                        maxLength="6"
                        type="text" />

                        <textarea 
                        rows="2"
                        className='input-info'
                        onChange={e => setInfo(e.target.value)}
                        placeholder="Informações de rodapé" 
                        type="text"
                        maxLength="50"
                        />
                    </div>

                    <div>
                        <select onChange={e => setNumero(e.target.value)}>
                            <option>Partido</option>
                            <option value={10}>10 - REPUBLICANO</option>
                            <option value={11}>11 - PP</option>
                            <option value={12}>12 - PDT</option>
                            <option value={13}>13 - PT</option>
                            <option value={14}>14 - PTB</option>
                            <option value={15}>15 - MDB</option>
                            <option value={16}>16 - PSTU</option>
                            <option value={17}>17 - PSL</option>
                            <option value={18}>18 - REDE</option>
                            <option value={19}>19 - PODE</option>
                            <option value={20}>20 - PSC</option>
                            <option value={21}>21 - PCB</option>
                            <option value={22}>22 - PL</option>
                            <option value={23}>23 - CIDADANIA</option>
                            <option value={27}>27 - DC</option>
                            <option value={28}>28 - PRTB</option>
                            <option value={29}>29 - PCO</option>
                            <option value={30}>30 - NOVO</option>
                            <option value={33}>33 - PMN</option>
                            <option value={35}>35 - PMB</option>
                            <option value={36}>36 - AGIR</option>
                            <option value={40}>40 - PSB</option>
                            <option value={43}>43 - PV</option>
                            <option value={44}>44 - UNIÃO</option>
                            <option value={45}>45 - PSDB</option>
                            <option value={50}>50 - PSOL</option>
                            <option value={51}>51 - PATRIOTA</option>
                            <option value={55}>55 - PSD</option>
                            <option value={65}>65 - PCdoB</option>
                            <option value={70}>70 - AVANTE</option>
                            <option value={77}>77 - SOLIDARIEDADE</option>
                            <option value={80}>80 - UP</option>
                            <option value={90}>90 - PROS</option>
                        </select>
                    </div>

                    </div>


                    <div className="principal">
                        <div className="foto">
                        {image ? <Image className='foto-base' width={540} height={540} src={URL.createObjectURL(image)} alt="Imagem do candidato"/> : <Image className='foto-base' src="/foto-teste.png" width={540} height={540} alt="Imagem do candidato"/>}

                            <div className="cargo">
                                {cargo}
                            </div>

                            <div style={{fontSize:`${tamanhoNome}px`}} className="nome-candidato">
                                {nomeCandidato}
                            </div>

                            <div style={{color:`${cor}`,fontSize:`${tamanhoNumero}px`}} className="numero-candidato">
                                {numeroCandidato}
                            </div>

                            <div className='logo-partido'>

                               <Image width="150px" height="150px" style={{opacity:`${opacidadeLogo}%`}} src={path} alt="Imagem" />
                               
                            </div>

                            <div className='info'>
                                {info}
                            </div>

                        </div>

                    </div>
                    <div className="menu">

                        <div className="dados-candidato">

                        
                        
                        

                        </div>

                        <div className='setup'>
                            <h5>CONFIGURAÇÃO</h5>

                            <div>
                        
                                <span style={{fontSize:'11px'}}>
                                    Opacidade LOGO
                                    </span>
                                    <input 
                                    onChange={e => setOpacidadeLogo(e.target.value)}
                                    value={opacidadeLogo}
                                    type="range" />
                            </div>

                            <div className='setting'>
                            <span>Cor: NÚMERO</span>
                            <input 
                            onChange={e => setCor(e.target.value)}
                            type="color"
                             />
                             <input 
                                disabled
                                value={cor} 
                                type="text"
                                onClick={handleClick} 
                                style={{width:'70px',textAlign:'center',textTransform:'uppercase',color:'#00000088'}}/>
                             </div>

                            <div className='setting'>
                                <span>Cargo</span>
                                <select id="cargo" onChange={e => setCargo(e.target.value)}>
                                    <option>Deputado Estadual</option>
                                    <option>Deputado Federal</option>
                                    <option>Senador</option>
                                    <option>Governador</option>
                                    <option>Presidente</option>
                                </select>
                            </div>

                            <div className='setting'>
                                <span>Tam: NOME</span>
                                <input 
                                onChange={e => setTamanhoNome(e.target.value)}
                                min={20}
                                max={40}
                                type="range" />
                            </div>

                            <div className='setting'>
                            <span>Tam: NÚMERO</span>
                            <input 
                            onChange={e => setTamanhoNumero(e.target.value)}
                            min={60}
                            max={85}
                            type="range" />
                            </div>

                            <button disabled>Remover fundo</button>

                            <input
                            className='input-file'
                            type="file" 
                            name="image"
                            onChange={e => setImage(e.target.files[0])}
                            />

                        </div>

                        <button className='butao-salvar' style={{margin:'5px'}}>Salvar</button>

                    </div>

                </div>

                <div style={{textAlign:'center'}}>

                        {/* ALGO CENTRALIZADO ABAIXO */}

                                                {/* <div>
                                <Popover>
                                    <Popover.Button style={{cursor:'pointer'}}>Informações do Candidato</Popover.Button>

                                        <Popover.Panel>
                                            <div style={{display:'flex',flexDirection:'column'}}>
                                                <input placeholder='Nome do candidato...' />
                                                <input placeholder='Número do candidato...' />
                                                <input placeholder='Nome do candidato...' />
                                            </div>

                                        </Popover.Panel>
                                </Popover>
                            </div> */}



                </div>
                

            </div>

        </div>

    )
}

export default Home