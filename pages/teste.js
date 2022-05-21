import { useState } from "react";

const imagens = [
    {
        num: '10',
        caminho: '../logo-partidos/10.png',
    },    {
        num: '11',
        caminho: '../logo-partidos/11.png',
    },
]



function Teste(){
    const [numero, setNumero] = useState('');
    const path = `../logo-partidos/${numero}.png`

    return(
        <div>

            <input
            style={{textAlign:'center'}}
            type="text"
            onChange={e => setNumero(e.target.value)}
            />

            <img src={path} />
        </div>
    )
}

export default Teste