import Image from 'next/image';
import React, { useState, useRef, useContext, createContext } from 'react'
import Head from 'next/head';
import Header from '../components/Header';
import { bg } from '../components/Background';
import { cargoPol } from '../components/Cargos';
import { partidos } from '../components/Partidos';
import { exportAsImage } from '../components/ExportAsImage';
import { RemoveBg } from '../components/RemoveBg';

export const UserContext = React.createContext();

function Home() {
    const exportRef = useRef();

    const [info, setInfo] = useState('');

    //IMAGEM PRINCIPAL
    const [image, setImage] = useState('');
    const [tamanhoImagemCandidato, setTamanhoImagemCandidato] = useState('');

    //NUMERO
    const [corNumero, setCorNumero] = useState('#404040'); // COR DO NUMERO DO CANDIDATO
    const [corSombraNumero, setCorSombraNumero] = useState('#FFFFFF');
    const [numeroCandidato, setNumeroCandidato] = useState('01.234');
    const [tamanhoNumero, setTamanhoNumero] = useState('110');
    const [distanciaVerticalNumero, setDistanciaVerticalNumero] = useState('10');
    const [distanciaHorizontalNumero, setDistanciaHorizontalNumero] = useState('10');
    const [fonteNumero, setFonteNumero] = useState('Montserrat');

    //NOME
    const [tamanhoNome, setTamanhoNome] = useState('50');
    const [nomeCandidato, setNomeCandidato] = useState('Candidato(a)');
    const [corNome, setCorNome] = useState('#FFFFFF'); // COR DO NOME DO CANDIDATO
    const [distanciaVerticalNome, setDistanciaVerticalNome] = useState('105');
    const [distanciaHorizontalNome, setDistanciaHorizontalNome] = useState('10');
    const [fonteNome, setFonteNome] = useState('Roboto');

    //CARGO
    const [cargo, setCargo] = useState('Deputado Estadual');
    const [tamanhoCargo ,setTamanhoCargo] = useState('')
    const [distanciaVerticalCargo, setDistanciaVerticalCargo] = useState('155');
    const [distanciaHorizontalCargo, setDistanciaHorizontalCargo] = useState('10');
    const [corCargo, setCorCargo] = useState('#FFFFFF'); // COR DO CARGO

    //BACKGROUND
    const [background, setBackgroung] = useState('#ff972d, #db1865');
    const [rotacaoBackground , setRotacaoBackground] = useState('180');

    //LOGO
    const [opacidadeLogo, setOpacidadeLogo] = useState('100');
    const [tamanhoLogo ,setTamanhoLogo] = useState('40')
    const [distanciaVerticalLogo, setDistanciaVerticalLogo] = useState('-80');
    const [distanciaHorizontalLogo, setDistanciaHorizontalLogo] = useState('-40');

    const [numero, setNumero] = useState('0'); //NUMERO DO PARTIDO
    const path = `/logo-partidos/${numero}.png`
    
    const handleClick = (e) => {e.target.select();};  // PEGA O HEXADECIMAL DO INPUT COLOR

    // SALVAR IMAGEM
    const refHtml = useRef();
    const refBody = useRef();

    //REMOVER FUNDO
    const [tolerancia, setTolerancia] = useState('200');

    return(
<>
    <Head>
        <title>Design</title>
        <meta
            name="viewport"
            content="
                initial-scale=1.0,
                width=device-width" />
    </Head>

    <div className="body">

        <Header />

        {/* <canvas id="canvas"></canvas> */}

        {/* PRINCIPAL */}

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
                rows="4"
                className='input-info'
                onChange={e => setInfo(e.target.value)}
                placeholder="Informações de rodapé" 
                type="text"
                maxLength="100"
                />
            </div>

            <div>

                <select onChange={e => setNumero(e.target.value)}>
                    {partidos.map(({ partido, numPart }) => (
                        <option key={partido} value={numPart}>{partido}</option>
                    ))}

                </select>

                {/* {bg.map(({ cores }) => (
                <button  key={cores} value={cores} onClick={e => setBackgroung(e.target.value)}/>
            ))} */}

                    <select id="cargo" onChange={e => setCargo(e.target.value)}>
                        {cargoPol.map(({ cargopolitico }) => (
                        <option key={cargopolitico}>{cargopolitico}</option>
                        ))}
                    </select>
                

                <div className="input-file">
                    <label htmlFor="image">Enviar imagem</label>
                    <input
                    type="file" 
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={e => setImage(e.target.files[0])}
                    />
                </div>
            </div>

            {/* BACKGROUND */}

            <div style={{textAlign:'center'}}>
                
                <input
                style={{marginTop:'5px'}}
                onChange={e => setRotacaoBackground(e.target.value)}
                value={rotacaoBackground}
                min={0}
                max={360}
                type="range" 
                />

            </div>

            <div style={{textAlign:'center',margin:'5px'}}>
            {bg.map(({ cores }) => (
                <button style={{cursor:'pointer',border:'none',backgroundImage:`linear-gradient(${cores})`,padding:'15px',margin:'1px'}} key={cores} value={cores} onClick={e => setBackgroung(e.target.value)}/>
            ))}
            </div>

                <div style={{position:'absolute',bottom:'40px'}}>

                        <div className='flex-row'>
                            <span>Selecionar Cor</span><br />
                            <input type="color" /><br />
                        </div>

                        <div className='flex-row'>
                            <span>Remover</span><br />
                            <input
                            style={{marginTop:'5px',width:'80px'}}
                            onChange={e => setTolerancia(e.target.value)}
                            value={tolerancia}
                            min={0}
                            max={255}
                            type="range"
                            id="tolerancia"
                            />
                        </div>


                </div>

            </div>
            



            {/* IMAGEM PRINCIPAL */}

            <div ref={refHtml}>
                <div ref={refBody}>
                <section ref={exportRef} className="principal" id="captura">
                    <div 
                    style={{
                        display:'flex',
                        backgroundImage:`linear-gradient(${rotacaoBackground}deg, ${background})`,
                        width:`33.8rem`,
                        height:`33.8rem`}} 
                    className="foto">

                    {/* {   image ? <Image 
                        className='foto-base' 
                        width={540} 
                        height={540} 
                        src={URL.createObjectURL(image)} 
                        alt="Imagem do candidato"
                        style={{transform:`scale(${tamanhoImagemCandidato}%)`}}
                        />
                            : 
                            <Image 
                                className='foto-base' 
                                src="/foto-teste.png" 
                                width={540} 
                                height={540} 
                                alt="Imagem do candidato"
                                style={{transform:`scale(${tamanhoImagemCandidato}%)`}}
                        />} */}

                        <canvas id="canvas"></canvas>

                        <div 
                        className='logo-partido' 
                        style={{
                            position:'absolute',
                            filter:'drop-shadow(1px 1px 1px white)',
                            opacity:`${opacidadeLogo}%`,
                            transform:`scale(${tamanhoLogo}%)`,
                            top:`${distanciaVerticalLogo}px`,
                            left:`${distanciaHorizontalLogo}px`,
                            width:'300px',
                            height:'300px',
                            background:`url(${path}) no-repeat`,
                            backgroundRepeat:'no-repeat'
                        }} >

                        </div>

                        <span 
                        style={{
                            fontSize:`${tamanhoCargo}px`,
                            left:`${distanciaHorizontalCargo}px`,
                            bottom:`${distanciaVerticalCargo}px`,
                            color:`${corCargo}`}} 
                        className="cargo">{cargo}
                        </span>

                        <span 
                        style={{
                            fontSize:`${tamanhoNome}px`,
                            color:`${corNome}`,
                            bottom:`${distanciaVerticalNome}px`,
                            left:`${distanciaHorizontalNome}px`,
                            fontFamily:`${fonteNome}`
                        }} 
                        className="nome-candidato">
                            {nomeCandidato}
                        </span>

                        <span 
                        style={{
                            color:`${corNumero}`,
                            fontSize:`${tamanhoNumero}px`,
                            bottom:`${distanciaVerticalNumero}px`,
                            left:`${distanciaHorizontalNumero}px`,
                            filter:`drop-shadow(1px 1px 2px ${corSombraNumero})`,
                            fontFamily:`${fonteNumero}`
                        }} 
                        className="numero-candidato">
                            {numeroCandidato}
                        </span>

                        <span 
                        className='info'>
                            {info}
                        </span>
                    </div>
                    </section>
                </div>
            </div>

            {/* FIM MEIO */}


            <div className="menu">

                <div className='setup'>

                    <h5 style={{textAlign:'center'}}>CONFIGURAÇÃO</h5>

                    


                    {/* MENU DIREITO */}


                        {/* FOTO */}

                    <div className='setting'>

                        <span style={{textAlign:'center'}}>FOTO</span>

                        <div className='flex-row'>
                            <span>Tamanho</span>
                            <input 
                            onChange={e => setTamanhoImagemCandidato(e.target.value)}
                            value={tamanhoImagemCandidato}
                            type="range"
                            min={40}
                            max={140}
                            />
                    
                        </div>

                    </div>

                        {/* LOGO */}

                    <div className='setting'>

                        <span style={{textAlign:'center'}}>LOGO</span>

                        <div className='flex-row'>
                            <span>Opacidade</span>
                            <input 
                            onChange={e => setOpacidadeLogo(e.target.value)}
                            value={opacidadeLogo}
                            type="range"
                            style={{position:'absolute',right:'0'}}
                            />
                        </div>

                        <div className='flex-row'>
                                <span>Tamanho</span>
                                <input 
                                    style={{
                                        position:'absolute',
                                        right:'0'
                                    }}
                                    onChange={e => setTamanhoLogo(e.target.value)}
                                    value={tamanhoLogo}
                                    min={0}
                                    max={100}
                                    type="range" 
                                    />
                        </div>

                        <div className='flex-row'>
                            <span>Dist Vertic.</span>
                            <input 
                                style={{
                                    position:'absolute',
                                    right:'0'
                                }}
                                onChange={e => setDistanciaVerticalLogo(e.target.value)}
                                value={distanciaVerticalLogo}
                                min={-80}
                                max={400}
                                type="range" 
                                />
                        </div>

                        <div className='flex-row'>
                            <span>Dist Horiz.</span>
                            <input 
                                style={{
                                    position:'absolute',
                                    right:'0'
                                }}
                                onChange={e => setDistanciaHorizontalLogo(e.target.value)}
                                value={distanciaHorizontalLogo}
                                min={-40}
                                max={350}
                                type="range" 
                                />
                        </div>
                    </div>


                    {/* CARGO */}

                    <div className='setting'>

                        <span style={{textAlign:'center'}}>CARGO</span>

                        <div className='flex-row'>
                            <span>Tamanho</span>
                            <input 
                                style={{
                                    position:'absolute',
                                    right:'0'
                                }}
                                onChange={e => setTamanhoCargo(e.target.value)}
                                value={tamanhoCargo}
                                min={10}
                                max={30}
                                type="range" 
                                />
                        </div>

                        <div className='flex-row'>
                            <span>Cor</span>
                            <input 
                                style={{
                                    position:'absolute',
                                    left:'53px',
                                    bottom:'-5px',
                                    transform:'scale(.5)'
                                }}
                                onChange={e => setCorCargo(e.target.value)}
                                value={corCargo}
                                type="color"
                                />

                            <input 
                                disabled
                                value={corCargo} 
                                type="text"
                                onClick={handleClick} 
                                style={{
                                    width:'70px',
                                    textAlign:'center',
                                    textTransform:'uppercase',
                                    color:'#00000088',
                                    position:'absolute',
                                    right:'8px',
                                    top:'-1px'
                                }}
                                />
                            
                        </div>

                        <div className='flex-row'>
                            <span>Dist Vertic.</span>
                            <input 
                                style={{
                                    position:'absolute',
                                    right:'0'}}
                                onChange={e => setDistanciaVerticalCargo(e.target.value)}
                                value={distanciaVerticalCargo}
                                min={10}
                                max={280}
                                type="range" 
                                />
                        </div>

                        <div className='flex-row'>
                            <span>Dist Horiz.</span>
                            <input 
                                style={{
                                    position:'absolute',
                                    right:'0'}}
                                onChange={e => setDistanciaHorizontalCargo(e.target.value)}
                                value={distanciaHorizontalCargo}
                                min={10}
                                max={500}
                                type="range" 
                                />
                        </div>
                    </div>

                    {/* NOME */}

                    <div className='setting'>
                        
                        <span style={{textAlign:'center'}}>NOME</span>

                        <div className='flex-row'>
                            <span>Fonte</span>
                            <select value={fonteNome} style={{position:'absolute',right:'0',top:'0'}} onChange={e => setFonteNome(e.target.value)}>
                                <option style={{fontFamily:'Arial'}}>Arial</option>
                                <option style={{fontFamily:'Bahnschrift'}}>Bahnschrift</option>
                                <option style={{fontFamily:'Bebas Neue'}}>Bebas Neue</option>
                                <option style={{fontFamily:'Book Antiqua'}}>Book Antiqua</option>
                                <option style={{fontFamily:'Bookman Old Style'}}>Bookman Old Style</option>
                                <option style={{fontFamily:'Calibri'}}>Calibri</option>
                                <option style={{fontFamily:'Cambria'}}>Cambria</option>
                                <option style={{fontFamily:'Candara'}}>Candara</option>
                                <option style={{fontFamily:'Consolas'}}>Consolas</option>
                                <option style={{fontFamily:'Comic Sans MS'}}>Comic Sans MS</option>
                                <option style={{fontFamily:'Ink Free'}}>Ink Free</option>
                                <option style={{fontFamily:'Impact'}}>Impact</option>
                                <option style={{fontFamily:'Montserrat'}}>Montserrat</option>
                                <option style={{fontFamily:'Verdana'}}>Verdana</option>
                                <option style={{fontFamily:'Roboto'}}>Roboto</option>
                            </select>
                        </div>


                        <div className='flex-row'>
                            <span>Cor</span>
                            <input 
                            style={{
                                position:'absolute',
                                left:'53px',
                                bottom:'-5px',
                                transform:'scale(.5)'}}
                            onChange={e => setCorNome(e.target.value)}
                            value={corNome}
                            type="color"
                            />

                            <input 
                            disabled
                            value={corNome} 
                            type="text"
                            onClick={handleClick} 
                            style={{
                                width:'70px',
                                textAlign:'center',
                                textTransform:'uppercase',
                                color:'#00000088',
                                position:'absolute',
                                right:'8px',
                                top:'-1px'}}
                            />
                        </div>

                        <div className='flex-row'>
                            <span>Tamanho</span>
                            <input 
                            onChange={e => setTamanhoNome(e.target.value)}
                            min={20}
                            max={80}
                            type="range" 
                            value={tamanhoNome}
                            />
                        </div>

                        <div className='flex-row'>
                            <span>Dist Vertic.</span>
                            <input 
                            style={{
                                position:'absolute',
                                right:'0'}}
                            onChange={e => setDistanciaVerticalNome(e.target.value)}
                            value={distanciaVerticalNome}
                            min={10}
                            max={450}
                            type="range" 
                            />
                        </div>

                        <div className='flex-row'>
                            <span>Dist Horiz.</span>
                            <input 
                            style={{
                                position:'absolute',
                                right:'0'}}
                            onChange={e => setDistanciaHorizontalNome(e.target.value)}
                            value={distanciaHorizontalNome}
                            min={10}
                            max={200}
                            type="range" 
                            />
                        </div>

                    </div>

                        {/* NUMERO */}

                    <div className='setting'>
                        
                        <span style={{textAlign:'center'}}>NUMERO</span>

                        <div className='flex-row'>
                            <span>Fonte</span>
                            <select value={fonteNumero} style={{position:'absolute',right:'0',top:'0'}} onChange={e => setFonteNumero(e.target.value)}>
                                <option style={{fontFamily:'Arial'}}>Arial</option>
                                <option style={{fontFamily:'Bahnschrift'}}>Bahnschrift</option>
                                <option style={{fontFamily:'Bebas Neue'}}>Bebas Neue</option>
                                <option style={{fontFamily:'Book Antiqua'}}>Book Antiqua</option>
                                <option style={{fontFamily:'Bookman Old Style'}}>Bookman Old Style</option>
                                <option style={{fontFamily:'Calibri'}}>Calibri</option>
                                <option style={{fontFamily:'Cambria'}}>Cambria</option>
                                <option style={{fontFamily:'Candara'}}>Candara</option>
                                <option style={{fontFamily:'Consolas'}}>Consolas</option>
                                <option style={{fontFamily:'Comic Sans MS'}}>Comic Sans MS</option>
                                <option style={{fontFamily:'Ink Free'}}>Ink Free</option>
                                <option style={{fontFamily:'Impact'}}>Impact</option>
                                <option style={{fontFamily:'Montserrat'}}>Montserrat</option>
                                <option style={{fontFamily:'Verdana'}}>Verdana</option>
                                <option style={{fontFamily:'Roboto'}}>Roboto</option>
                            </select>
                        </div>

                        <div className='flex-row'>
                        <span>Cor</span>
                        <input 
                        style={{
                            position:'absolute',
                            left:'53px',
                            bottom:'-5px',
                            transform:'scale(.5)'}}
                        onChange={e => setCorNumero(e.target.value)}
                        type="color"
                        value={corNumero}
                        />
                        <input 
                        style={{
                            position:'absolute',
                            left:'25px',
                            bottom:'-5px',
                            transform:'scale(.5)'}}
                        onChange={e => setCorSombraNumero(e.target.value)}
                        type="color"
                        value={corSombraNumero}
                        />                        
                        <input 
                        disabled
                        value={corNumero} 
                        type="text"
                        onClick={handleClick} 
                        style={{
                            width:'70px',
                            textAlign:'center',
                            textTransform:'uppercase',
                            color:'#00000088',
                            position:'absolute',
                            right:'8px',
                            top:'-1px'}}
                        />
                        </div>

                        <div className='flex-row'>
                            <span>Tamanho</span>
                            <input 
                            onChange={e => setTamanhoNumero(e.target.value)}
                            min={60}
                            max={185}
                            type="range" 
                            />
                        </div>

                        <div className='flex-row'>
                            <input 
                            style={{
                                position:'absolute',
                                right:'-48px',
                                top:'-31px',
                                transform:'rotate(-90deg) scale(.8)',
                                width:'110px'
                            }}
                            onChange={e => setDistanciaVerticalNumero(e.target.value)}
                            value={distanciaVerticalNumero}
                            min={10}
                            max={430}
                            type="range" 
                            />
                        </div>

                        <div className='flex-row'>
                            <span>Dist Horiz.</span>
                            <input style={{position:'absolute',right:'0'}}
                            onChange={e => setDistanciaHorizontalNumero(e.target.value)}
                            value={distanciaHorizontalNumero}
                            min={10}
                            max={200}
                            type="range" 
                            />
                        </div>
                    </div>

                    <button disabled >Remover fundo</button>

                </div>

                <div>
                    <button 
                    style={{position:'absolute',bottom:'0',padding:'4px 68px',margin:'0 5px',marginBottom:'5px',borderRadius:'4px',border:'none',cursor:'pointer'}} 
                    onClick={() => exportAsImage(exportRef.current, "Imagem")}>
                        Salvar
                    </button>
                </div>

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
</>
    )
}

export default Home