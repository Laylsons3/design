import Image from 'next/image'
import React, { useState } from 'react';

function Asd() {
    const [valorInput, setValorInput] = useState('Teste');
    const [alturaInput, setAlturaInput] = useState('45');
    const [fontSize, setFontSize] = useState('22');

    return(

        <div style={{textAlign:'center',}}>
            

            <div style={{backgroundColor:'darkblue',width:'450px',margin:'auto'}}>
                
                <div style={{position:'relative'}}>

                    <Image style={{position:'relative'}} src="/fundo-verde1.jpg" width={350} height={350} alt="Imagem" />
                    <input size="10" value={valorInput} onChange={e => setValorInput(e.target.value)} type="text" style={{fontFamily:'Montserrat',fontWeight:'normal',fontSize:`${fontSize}pt`,position:'absolute',left:'0',top:`${alturaInput}px`,background:'transparent',border:'none'}} />
                    
                </div>

            </div>
            <div>

                <input min={0} max={260} value={alturaInput} type="range" onChange={e => setAlturaInput(e.target.value)} />
                <input min={10} max={60} value={fontSize} type="range" onChange={e => setFontSize(e.target.value)} />

                <button style={{padding:'2px 5px',cursor:'pointer'}}>B</button>

            </div>
        </div>
    )
}

export default Asd;