import Image from 'next/image';
import React, { useState, useRef } from 'react'
import Head from 'next/head';
import Header from '../components/Header';
import { exportAsImage } from '../components/ExportAsImage';
// import useAuth from '../../hooks/useAuth';
import InputText from '../components/Inputs/InputText';
import Select from '../components/Inputs/Select';
import BackgroundGradient from '../components/BackgroundGradient';
import InputSettingFoto from '../components/Inputs/InputSettingFoto';
import InputSettingLogo from '../components/Inputs/InputSettingLogo';
import InputSettingCargo from '../components/Inputs/InputSettingCargo';
import InputSettingNome from '../components/Inputs/InputSettingNome';
import InputSettingNumero from '../components/Inputs/InputSettingNumero';

import Loading from '../components/layout/Loading';

function Home() {
    // const { user, signin} = useAuth();
    // console.log('user', user);

    const exportRef = useRef();
    const RefImage = useRef();

    // INFORMAÇÕES DE RODAPÉ
    const [info, setInfo] = useState('');

    //IMAGEM PRINCIPAL
    const [image, setImage] = useState('');
    const [tamanhoImagemCandidato, setTamanhoImagemCandidato] = useState('100');

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
    const [background, setBackgroung] = useState('#2677a8, #aa77a8, #aaffaa');
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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className="body">

        <Header />

        {/* PRINCIPAL */}

        <div className="main">

            <div className='esquerda-dados'>

                <div className='dados-candidato'>

                    <InputText 
                    setNomeCandidato={setNomeCandidato} 
                    setNumeroCandidato={setNumeroCandidato} 
                    setInfo={setInfo} 
                    />

                    <Select 
                    setNumero={setNumero} 
                    setCargo={setCargo} 
                    />

                </div>

            <div>

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

                <BackgroundGradient 
                setBackgroung={setBackgroung} 
                setRotacaoBackground={setRotacaoBackground}
                />

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

                    {/* BACKGROUND */}

                    <div 
                    style={{
                        display:'flex',
                        backgroundImage:`linear-gradient(${rotacaoBackground}deg, ${background})`,
                        width:`540px`,
                        height:`540px`}} 
                    className="foto">

                        {/* IMAGEM */}

                        {   
                        image ? 
                        <Image 
                        ref={RefImage}
                        className='foto-base' 
                        width={540} 
                        height={540} 
                        src={URL.createObjectURL(image)} 
                        alt="Imagem do candidato"
                        style={{transform:`scale(${tamanhoImagemCandidato}%)`}}
                        /> : 
                        <Image 
                        className='foto-base' 
                        src="/foto-teste.png" 
                        width={540} 
                        height={540} 
                        alt="Imagem do candidato"
                        style={{transform:`scale(${tamanhoImagemCandidato}%)`}}
                        />
                        }

                        {/* LOGO */}

                        <div 
                        className='logo-partido' 
                        style={{
                            position:'absolute',
                            filter:'drop-shadow(1px 1px 1px white)',
                            opacity:`${opacidadeLogo}%`,
                            transform:`scale(${tamanhoLogo}%)`,
                            top:`${distanciaVerticalLogo}px`,
                            left:`${distanciaHorizontalLogo}px`,
                            width:'340px',
                            height:'340px',
                            background:`url(${path}) no-repeat`,
                            backgroundRepeat:'no-repeat'
                        }} >
                        </div>

                        {/* CARGO */}

                        <span 
                        style={{
                            fontSize:`${tamanhoCargo}px`,
                            left:`${distanciaHorizontalCargo}px`,
                            bottom:`${distanciaVerticalCargo}px`,
                            color:`${corCargo}`}} 
                        className="cargo">
                            {cargo}
                        </span>

                        {/* NOME */}

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

                        {/* NUMERO */}

                        <span 
                        style={{
                            color:`${corNumero}`,
                            fontSize:`${tamanhoNumero}px`,
                            bottom:`${distanciaVerticalNumero}px`,
                            left:`${distanciaHorizontalNumero}px`,
                            fontFamily:`${fonteNumero}`
                        }} 
                        className="numero-candidato">
                            {numeroCandidato}
                        </span>

                        {/* INFORMAÇÕES DE RODAPÉ */}

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
                        <InputSettingFoto 
                        setTamanhoImagemCandidato={setTamanhoImagemCandidato} 
                        tamanhoImagemCandidato={tamanhoImagemCandidato} />
                    </div>

                        {/* LOGO */}

                    <div className='setting'>
                        <InputSettingLogo 
                        setOpacidadeLogo={setOpacidadeLogo}
                        opacidadeLogo={opacidadeLogo}
                        setTamanhoLogo={setTamanhoLogo}
                        tamanhoLogo={tamanhoLogo}
                        setDistanciaVerticalLogo={setDistanciaVerticalLogo}
                        distanciaVerticalLogo={distanciaVerticalLogo}
                        setDistanciaHorizontalLogo={setDistanciaHorizontalLogo}
                        distanciaHorizontalLogo={distanciaHorizontalLogo}
                        />
                    </div>

                    {/* CARGO */}

                    <div className='setting'>
                        <InputSettingCargo 
                        setTamanhoCargo={setTamanhoCargo}
                        tamanhoCargo={tamanhoCargo}
                        setCorCargo={setCorCargo}
                        corCargo={corCargo}
                        handleClick={handleClick}
                        setDistanciaVerticalCargo={setDistanciaVerticalCargo}
                        distanciaVerticalCargo={distanciaVerticalCargo}
                        setDistanciaHorizontalCargo={setDistanciaHorizontalCargo}
                        distanciaHorizontalCargo ={distanciaHorizontalCargo}
                        />
                    </div>

                    {/* NOME */}

                    <div className='setting'>
                        <InputSettingNome 
                        fonteNome={fonteNome}
                        setFonteNome={setFonteNome}
                        setCorNome={setCorNome}
                        corNome={corNome}
                        handleClick={handleClick}
                        setTamanhoNome={setTamanhoNome}
                        tamanhoNome={tamanhoNome}
                        setDistanciaVerticalNome={setDistanciaVerticalNome}
                        distanciaVerticalNome={distanciaVerticalNome}
                        setDistanciaHorizontalNome={setDistanciaHorizontalNome}
                        distanciaHorizontalNome={distanciaHorizontalNome}
                        />
                    </div>

                        {/* NUMERO */}

                    <div className='setting'>
                        <InputSettingNumero 
                        fonteNumero={fonteNumero}
                        setFonteNumero={setFonteNumero}
                        setCorNumero={setCorNumero}
                        corNumero={corNumero}
                        setCorSombraNumero={setCorSombraNumero}
                        corSombraNumero={corSombraNumero}
                        handleClick={handleClick}
                        setTamanhoNumero={setTamanhoNumero}
                        setDistanciaVerticalNumero={setDistanciaVerticalNumero}
                        distanciaVerticalNumero={distanciaVerticalNumero}
                        setDistanciaHorizontalNumero={setDistanciaHorizontalNumero}
                        distanciaHorizontalNumero={distanciaHorizontalNumero}
                        />
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

        </div>

    </div>
</>
    )
}

export default Home;