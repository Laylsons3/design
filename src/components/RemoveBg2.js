import React, { useState, useEffect, useRef } from 'react';

const RemoveBg2 = () => {
    const canvas = useRef();
    const [image, setImage] = useState(null);
    const [tolerancia, setTolerancia] = useState('');

    const tolerance = tolerancia;
    const referenceColor = {r:0, g:255, b:0}

    useEffect(() => {
        const image = new Image();
        image.src = '/fundo-verde1.jpg';
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

                // if (g> 100 && r <100) {
                //     data[i+3]=0
                // }

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

},[image, canvas, referenceColor])

    return (
        <div>
            <h1>RemoveB.G</h1>
            <input
            onChange={e => setTolerancia(e.target.value)}
            min={0}
            max={255}
            type="range"
            />

            <div>
                <canvas 
                width={540}
                height={540}
                ref={canvas}/>
            </div>
            {/* <input type="color"/> */}
        </div>
    )
}

export default RemoveBg2