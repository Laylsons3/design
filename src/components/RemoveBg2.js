import React, { useState, useEffect, useRef } from 'react';

const RemoveBg2 = () => {

    const canvas = useRef();
    const [image, setImage] = useState(null);
    const [tolerancia, setTolerancia] = useState('45');
    const [corRemove, setCorRemove] = useState('#FF00FF');

    const [caminhoImage, setCaminhoImage] = useState('/fundo-verde1.jpg')

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if(result){
            const rr = parseInt(result[1], 16);
            const gg = parseInt(result[2], 16);
            const bb = parseInt(result[3], 16);
            return rr+","+gg+","+bb;
        } 
        return null;
      }
    //   console.log(hexToRgb(corRemove)); //pegar esse valor e injetar no referenceColor

    const tolerance = tolerancia;

    useEffect(() => {

        const corR = 0
        const corG = 255
        const corB = 0

    const referenceColor = {r:corR, g:corG, b:corB}

        const image = new Image();
        image.src = `${caminhoImage}`; //usar setImage pra adicionar a imagem dinamicamente
        image.onload = drawImage;

    function drawImage() {
        if (image && canvas) {
            canvas.width = image.naturalWidth;
            canvas.heigh = image.naturalHeight;
            const ctx = canvas.current.getContext('2d');
            ctx.drawImage(image, 0, 0);
            processImage(ctx);
        }   
    }

    function processImage(context) {
        const imageData = context.getImageData(0, 0, 540, 540); // TAMANHO DA IMAGEM COLOCAR DINAMICO
        const data = imageData.data

            for (let i=0; i< data.length; i += 4) {
                const r = data[i]
                const g = data[i+1]
                const b = data[i+2]

                // (...)

            const color = {r, g, b}

            if (distance(color, referenceColor) < tolerance){
            data[i + 3] = 0
            }

        }
    context.putImageData(imageData, 0, 0);

}
function distance(color, reference) {
    const diff = { r: reference.r - color.r, g: reference.g - color.g, b: reference.b - color.b }
    const modulo = Math.sqrt((diff.r * diff.r) + (diff.g * diff.g) + (diff.b * diff.b))
    return modulo;
}

},[image, canvas, tolerance, caminhoImage])

    return (
        <div>
            <h1>RemoveB.G</h1>
            <input
            onChange={e => setTolerancia(e.target.value)}
            min={0}
            max={255}
            type="range"
            value={tolerancia}
            />

            <div>
                <canvas 
                width={540}
                height={360}
                ref={canvas}/>

            </div>
            <input 
                type="color" 
                value={corRemove} 
                onChange={e => setCorRemove(e.target.value)} />
                <span>{corRemove}</span>
                <div>
                    <select onChange={e => setCaminhoImage(e.target.value)}>
                        <option value='/fundo-verde1.jpg'>Imagem 1</option>
                        <option value='/fundo-verde3.jpg'>Imagem 2</option>
                    </select>
                </div>
        </div>
    )
}

export default RemoveBg2